'use client'
/* eslint-disable @next/next/no-img-element*/
export default function DreamHomeSection() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Left Column: Text, Blank Space, and Image 1 */}
        <div className="md:col-span-1 flex flex-col space-y-5">
          {/* Text Block */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Find Your Dream Home Here</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              You can see for yourself how the Perumnas cluster housing offers beautiful and comfortable housing for you and your family. See photos of the house, environment, and facilities we provide here.
            </p>
          </div>

          {/* Small Blank Space */}
          <div className="h-4"></div> {/* Adjust the height as needed */}

          {/* Image 1 */}
          <img
            src="/home1.png"
            alt="Living area"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Column: Images 2 and 3 */}
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
          {/* Image 2 */}
          <img
            src="/home2.png"
            alt="Living room"
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Image 3 */}
          <img
            src="/home3.png"
            alt="Interior view"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
