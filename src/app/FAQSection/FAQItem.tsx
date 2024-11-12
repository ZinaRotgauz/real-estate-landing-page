import { useState } from "react";

interface FAQItemProps {
    question: string;
    answer: string;
  }
export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b last:border-none">
      <button
        onClick={toggleFAQ}
        className="w-full flex justify-between items-center py-4 px-4 text-left text-lg font-medium focus:outline-none"
      >
        {question}
        <span className="text-2xl">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}
