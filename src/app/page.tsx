'use client'
import Description from "./Description/Description";
import FAQSection from "./FAQSection/FAQSection";
import Footer from "./Footer/Footer";
import Gallery from "./ImageGallery/Gallery";
import InfoSection from "./Info/DreamHomeSection";
import IntroSection from "./IntroSection/IntroSection";
import Navbar from "./Navbar/Navbar";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/hero-section.png")',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center text-white px-4">
          <h1 className="text-3xl sm:text-lg md:text-5xl ">More Comfortable. More Classy.</h1>
          <p className="text-base sm:text-lg mb-80 md:text-xl mt-2 sm:mt-4">Make your living experience even more memorable.</p>
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[240px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.37) 37%, rgba(255, 255, 255, 0.78) 78%, rgba(255, 255, 255, 0.94) 94%, rgba(255, 255, 255, 1) 100%)",
          }}
        />
      </div>

      {/* Main Section */}
      <div className="px-4 sm:px-8 md:px-20">
        <IntroSection />
        <Gallery />
        <Description />
        <InfoSection />
        <FAQSection />
        <Footer/>
      </div>

    </div>
    


  );
}
