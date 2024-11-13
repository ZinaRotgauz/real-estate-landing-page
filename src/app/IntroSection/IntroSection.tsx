'use client'
export default function IntroSection(){
    return(
    <div className="py-16 px-8 sm:px-20 bg-white flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* Left Column: Heading */}
          <div className="text-left">
            <h2 className="text-3xl font-semibold mb-4">Enjoy Quality Life in Perumnas Housing</h2>
          </div>

          {/* Right Column: Description and Key Metrics */}
          <div className="flex flex-col">
            <p className="text-gray-600 mb-8">
              Perumnas cluster housing is the right choice for those of you who are looking for comfortable, modern, and affordable housing. With the cluster concept, you can enjoy the privacy and comfort of living in a beautiful and clean environment. Apart from that, you can also enjoy the various facilities provided, such as playgrounds, sports fields, shopping centers, schools, and others.
            </p>

            {/* Key Metrics */}
            <div className="flex justify-start gap-10">
              <div className="text-center">
                <span className="text-4xl font-bold sm:text-2xl">+100</span>
                <p className="text-gray-600">Units Ready</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold sm:text-2xl">+60K</span>
                <p className="text-gray-600">Customers</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold sm:text-2xl">+70K</span>
                <p className="text-gray-600">Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}