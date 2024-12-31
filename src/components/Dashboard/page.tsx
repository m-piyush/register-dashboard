'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function Dashboard() {
  return (
    <div className="bg-[url('/Dashboard-background.svg')] bg-cover bg-left flex flex-col items-center pt-10 pl-10">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row w-full justify-between items-start">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
          {/* Google Rating */}
          <div className="flex items-center gap-2">
            <Image src="/Dashboard-star.svg" alt="Star" width={20} height={20} />
            <p className="text-gray-600 font-medium">Google Rating</p>
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <Image key={i} src="/Dashboard-star-1.svg" alt="Star" width={20} height={20} />
              ))}
            </div>
          </div>
          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-gray-800">
            Your trusted partner 
          </h1>
          <h1 className="text-4xl font-bold leading-tight text-gray-800">
            for compliance business needs
          </h1>
          {/* Divider */}
          <Image src="/Dashboard-div.svg" alt="Divider" width={100} height={10} />
          {/* Description */}
          <p className="text-gray-600 text-lg w-full lg:w-3/4">
            An online business compliance platform that helps entrepreneurs and other individuals with various registrations, tax filings, and other legal matters.
          </p>
          <div className="my-10">
            <Image src="/Dashboard-customer.svg" alt="Customer" width={400} height={400} />
          </div>
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col lg:flex-row gap-4">
            <Button className="bg-blue-600 text-white px-6 py-3 rounded-md">Talk An Expert</Button>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/Dashboard-button.svg" alt="Play Button" width={30} height={30} />
              <span className="text-blue-600 font-medium">See how it works</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[url('/Dashboard-bg-2.svg')] w-full lg:w-1/2 bg-contain bg-repeat-space bg-center flex flex-col items-end gap-8 pt-10 pl-8">
          {/* Service Buttons */}
          <div className="flex gap-4 flex-col">
            <Button className="bg-white text-gray-700 px-6 py-3 rounded-md shadow-md border border-gray-300">
              Annual Compliance
            </Button>
            <Button className="bg-white text-gray-700 px-6 py-3 rounded-md shadow-md border border-gray-300">
              Payroll Services
            </Button>
            <Button className="bg-white text-gray-700 px-6 py-3 rounded-md shadow-md border border-gray-300">
              Company Formation
            </Button>
            <Button className="bg-white text-gray-700 px-6 py-3 rounded-md shadow-md border border-gray-300">
              Tax Filings
            </Button>
          </div>
          {/* Additional Image */}
          <Image src="/Dashboard-bg-3.svg" alt="Additional Graphic" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;