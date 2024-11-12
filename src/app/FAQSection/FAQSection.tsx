'use client'
import { useEffect, useState } from "react";
import FAQItem from "./FAQItem";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    fetch("/faqs.json")
      .then((response) => response.json())
      .then((data: FAQ[]) => setFaqs(data));
  }, []);

  return (
    <div className="py-16 px-8 sm:px-20 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: FAQ Title and Description */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            If there are questions you want to ask, we will answer all your questions.
          </p>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="border rounded-lg ">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
