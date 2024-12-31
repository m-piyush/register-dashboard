import React from 'react';
import { WhyChooseData } from '@/data/Data';
import Image from 'next/image';

function WhyChooserRegister() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-[#FFA229] font-bold text-lg sm:text-xl">Why Choose RegisterKaro.in</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold my-4 text-gray-800">Why Choose Register Karo</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {WhyChooseData.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bg }}
            className="rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">
              <Image src={item.icon} alt="logo" width={50} height={50} className="rounded-full" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooserRegister;
