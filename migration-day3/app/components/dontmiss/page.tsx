import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DONT = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-left w-full max-w-4xl text-lg font-semibold mb-4 sm:text-xl md:text-2xl lg:mb-6">
        Dont Miss
      </h2>
      {/* Image Section */}
      <div className="w-full max-w-4xl h-[50vh] sm:h-[60vh] lg:h-[70vh] relative mb-8">
        <Image
          src="/twoman.png" // Replace with your actual image path
          alt="Flight Essentials"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Text and Button Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-2xl font-bold mb-2 sm:text-3xl lg:text-4xl">
          FLIGHT ESSENTIALS
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg">
          Your built-to-last, all-week wear—but with style only Jordan Brand can deliver.
        </p>
        
          <Link href="/fourcompo/bag" className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-sm sm:text-base lg:text-lg">
            SHOP
          </Link>
        
      </div>
    </div>
  );
};

export default DONT;
