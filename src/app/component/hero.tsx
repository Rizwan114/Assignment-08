"use client"
import Link from 'next/link'
import React from 'react'

const Hero = () => {

 

  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Details
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              2023 TOYOTA LAND CRUSIER
            </h1>
            <p className="leading-relaxed mb-3">
              {/* Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat. */}

              Book LC300 Land Cruiser V8 with Dreamz Carz Today

            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={"blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Details
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              2014 TOYOTA LAND CRUSIER
             </h1>
            <p className="leading-relaxed mb-3">
              {/* Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat. */}
              Toyota Land Cruiser 2014 :: Behance
            </p>
            <div className="flex items-center flex-wrap">
              <Link href={"blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://cache4.pakwheels.com/system/car_generation_pictures/3882/original/side_pose.jpg?1451548933"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Details
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              2022 TOYOTA LAND CRUSIER
            </h1>
            <p className="leading-relaxed mb-3">
              {/* Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat. */}

               Toyota Land Cruiser V8 Price in Pakistan, Pictures and Specs | PakWheels
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={"blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
      
      



</section>

    </div>
  )
}

export default Hero