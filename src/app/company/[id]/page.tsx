'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DirectorsAvartar } from '@/data/Data';
import { FcGoogle } from "react-icons/fc";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Rate, Carousel } from 'antd';
import { CompaniesDirectors,ApiResponse} from '@/types';
const CompanyDetailPage = () => {
  const [companyDetails, setCompanyDetails] = useState<CompaniesDirectors[]>([]);
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    if (!id) return;

    const fetchCompanyDetails = async () => {
      try {
        const response = await fetch(`/api/company/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: ApiResponse = await response.json();
        setCompanyDetails(data.CompaniesDirectors || []);
      } catch (error) {
        console.error("Error in fetching company details:", error);
      }
    };

    fetchCompanyDetails();
  }, [id]);

  if (!companyDetails.length) {
    return <div className="text-center text-gray-500 py-24">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Carousel speed={1000} autoplaySpeed={3000} dots autoplay>
        {companyDetails.map((director, index) => (
          <div key={index} className="p-6">
            <h1 className="text-3xl capitalize font-bold text-orange-500 text-center">
              {director.mainheading}
            </h1>
            <h2 className="text-5xl font-semibold text-gray-700 text-center mb-8">
              {director.subheading}
            </h2>
            <blockquote className="text-gray-600 text-xl text-center mb-4 relative px-10">
              <span className="absolute left-0 text-6xl text-gray-400 -top-3">“</span>
              <p>{director.quotes}</p>
              <span className="absolute right-0 text-6xl text-gray-400 -bottom-3">”</span>
            </blockquote>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    sizes="50px"
                    src={`/${DirectorsAvartar.find((icon) => String(icon.id) === String(director.id))?.icon || 'logo.svg'}`}
                    alt={director.name}
                  />
                </Avatar>
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-gray-700">{director.name}</h4>
                  <p className="text-sm text-gray-500">{director.company_name}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FcGoogle className="border-solid border-2 border-gray-500 rounded-full" size={50} />
                <div>
                  <h4 className="text-l font-semibold text-gray-600">Google Reviews</h4>
                  <div className="flex items-center gap-2">
                    <Rate allowHalf disabled defaultValue={director.rating} />
                    <span>{director.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CompanyDetailPage;