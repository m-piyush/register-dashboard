'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CompanyDetails } from '@/types';
import { companyLogo } from '@/data/Data';
import Image from 'next/image';

const CompanyDetailPage = () => {
  const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(null);

  const params = useParams<{ id: string }>();
  const id = params.id;

  useEffect(() => {
    if (!id) return; // Ensure id is available before making the API request

    const fetchCompanyDetails = async () => {
      try {
        const response = await fetch(`/api/company/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setCompanyDetails(data);
      } catch (error) {
        console.log("error in fetching",error)
      }
    };

    fetchCompanyDetails();
  }, [id]);


  if (!companyDetails) {
    return <div className="text-center text-gray-500 py-24">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Company Info Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className='w-1/4 mx-auto mb-10'>
          <Image
            className="cursor-pointer"
            src={companyLogo.find((logo) => logo.id === companyDetails.company.id)?.path || 'logo.svg'}
            alt={companyDetails.company.name}
            width={50}
            height={30}
            layout="responsive"
          />
        </div>

        <p className="text-lg text-gray-600">{companyDetails.company.details}</p>
      </div>

      {/* Directors Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-[#FFA229] mb-4">Directors</h3>
        <div className="space-y-6">
          {companyDetails.directors.map((director) => (
            <div key={director.id} className="border-b pb-6">
              <h4 className="text-xl font-bold text-gray-700">{director.name}</h4>
              <p className="text-gray-600"><span className='text-[#FFA229]'>Details:</span> {director.details}</p>
              <p className="text-gray-600"><span className='text-[#FFA229]'>Company Name:</span> : {director.company_name}</p>
              <p className="text-gray-600"><span className='text-[#FFA229]'>Headquarters</span> : {director.headquarters}</p>
              <p className="text-gray-600">
                <span className='text-[#FFA229]'>LinkedIn: </span>
                <a href={director.linkedin} className="underline">{director.linkedin}</a>
              </p>
              <p className="text-gray-600"><span className='text-[#FFA229]'>Email</span> : {director.email}</p>
              <p className="text-gray-600"><span className='text-[#FFA229]'>Phone</span> : {director.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailPage;
