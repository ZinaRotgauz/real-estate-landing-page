'use client'
import Description from "./Description/Description";
import FAQSection from "./FAQSection/FAQSection";
import Gallery from "./ImageGallery/Gallery";
import InfoSection from "./Info/InfoSection";
import IntroSection from "./IntroSection/IntroSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/hero-section.png")',
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[240px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.37) 37%, rgba(255, 255, 255, 0.78) 78%, rgba(255, 255, 255, 0.94) 94%, rgba(255, 255, 255, 1) 100%)",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold">More Comfortable. More Classy.</h1>
          <p className="text-lg sm:text-xl mt-4">Make your living experience even more memorable.</p>
        </div>
      </div>

      {/* Introduction Section */}
      <IntroSection/>
      <Gallery/>
      <Description/>
      <InfoSection/>
      <FAQSection/>

    </div>
    


  );
}
