'use client'
/* eslint-disable @next/next/no-img-element*/
export default function InfoSection() {
    return (
      <div className="py-16 px-8 sm:px-20 bg-white">
        <div className=" ml-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column: Text, Blank Space, and Image 1 */}
          <div className="md:col-span-1 flex flex-col space-y-5">
            {/* Text Block */}
            <div>
              <h2 className="text-3xl font-semibold mb-10">Find Your Dream Home Here</h2>
              <p className="text-gray-600">
                You can see for yourself how the Perumnas cluster housing offers beautiful and comfortable housing for you and your family. See photos of the house, environment, and facilities we provide here.
              </p>
            </div>
            {/* Small Blank Space */}
            <div className="h-4"></div> {/* Adjust the height as needed */}
            {/* Image 1 */}
            <img
              src="/home1.png"
              alt="Living area"
              className="w-min h-min object-cover rounded-lg"
            />
          </div>
  
          {/* Right Column: Images 2 and 3 */}
          <div className="md:row-span-2 grid grid-rows-1 gap-4 mt-30 ml-10">
            {/* Image 2 (aligns to the middle of Image 1) */}
            <div className="row-span-1">
              <img
                src="/home2.png"
                alt="Living room"
                className="w-min h-min object-cover rounded-lg"
              />
            </div>
  
            {/* Image 3 (placed below Image 2) */}
            <div className="row-span-1 mt-20">
              <img
                src="/home3.png"
                alt="Interior view"
                className="w-min h-min object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  