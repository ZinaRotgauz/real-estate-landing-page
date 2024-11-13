'use client'
export default function Description(){
    return(
    <div className="py-16 px-8 sm:px-20 bg-white flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-w-5xl w-full">
          {/* Left Column: Heading empty*/}
          <div className="text-left">
            <h2 className="text-xl font-semibold mb-4"></h2>
          </div>

          

            {/* Key Metrics */}
            <div className="flex flex-col justify-end gap-10">
              <div className="text-left">
                <span className="text-4xl font-bold sm:text-2xl">Strategic Location</span>
                <p className="text-gray-600">Cluster housing perumnas is located in an area that is easily accessible from various directions. You can reach the city center, airport, train station, bus terminal, and other important places easily and quickly.</p>
              </div>
              <div className="text-left">
                <span className="text-4xl font-bold sm:text-2xl">Modern Design</span>
                <p className="text-gray-600">Cluster housing perumnas has a modern and elegant house design. You can choose the type of house that suits your taste and needs, ranging from type 36 to type 120. </p>
              </div>
              <div className="text-left">
                <span className="text-4xl font-bold sm:text-2xl">Guaranteed Security</span>
                <p className="text-gray-600">Cluster housing perumnas has an integrated security system. Each cluster is equipped with a fence, gate, and guard post that are monitored by professional security officers. In addition, each house isalso equipped with a fire alarm and CCTV.</p>
              </div>
            </div>
          </div>
        </div>
      
    )
}