'use client'
/* eslint-disable @next/next/no-img-element */
export default function Gallery() {
    const images = ["/interior1.png", "/interior2.png","/interior1.png", "/interior2.png"]; 
  
    return (
      <div className="overflow-hidden w-full bg-white py-8">
        <div className="flex animate-scroll">
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-[300px] h-[200px] object-cover rounded-lg mx-4"
          />
        ))}
        </div>
      </div>
    );
  }
  