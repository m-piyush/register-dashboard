'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Company } from '../../types';
import { useRouter } from 'next/navigation'; // Import useRouter
import { companyLogo } from '@/data/Data';

export default function CompanyList() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const router = useRouter(); // Initialize useRouter

  const fetchCompanyDetails = async (id: number) => {
    // Navigate to the dynamic company detail page
    router.push(`/company/${id}`);
  };

  const allCompanies = async () => {
    try {
      const response = await fetch('/api/companies');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setCompanies(json);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  useEffect(() => {
    allCompanies();
  }, []);

  return (
    <div className="flex flex-col items-center py-10 w-full bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Trusted By Over 100+ Startups and Freelance Businesses
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {companies.map((company) => {
          return (
            <div
              key={company.id}
              onClick={() => fetchCompanyDetails(company.id)}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" // Adjust width based on screen size
            >
              <Image
                className="cursor-pointer mx-auto" // Center the image horizontally
                src={companyLogo.find((logo) => logo.id === company.id)?.path || '/logo.svg'}
                alt={company.name}
                width={200}
                height={150}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          );
        })}
      </div>

    </div >
  );
}
