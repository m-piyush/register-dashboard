"use client";
import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#011B5B] text-white py-8 px-2 md:px-4  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <p className="text-sm w-full sm:w-3/4 text-gray-300 ">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" >
                <FaFacebook size={20} />
              </a>
              <a href="#" >
                <FaGoogle size={20} />
              </a>
              <a href="#" >
                <FaInstagram size={20} />
              </a>
              <a href="#" >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:w-2/3">
            <div>
              <h3 className="text-lg text-[#FFA229] font-semibold mb-4">START A BUSINESS</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" >Features</a></li>
                <li><a href="#" >Solutions</a></li>
                <li><a href="#" >Integrations</a></li>
                <li><a href="#" >Enterprise</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg text-[#FFA229] font-semibold mb-4">GOVERNMENT REGISTRATION</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" >Partners</a></li>
                <li><a href="#" >Community</a></li>
                <li><a href="#" >Developers</a></li>
                <li><a href="#" >App</a></li>
                <li><a href="#" >Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg text-[#FFA229] font-semibold mb-4">COMPLIANCE & TAX</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" >Channels</a></li>
                <li><a href="#" >Scale</a></li>
                <li><a href="#" >Watch the Demo</a></li>
                <li><a href="#" >Our Competition</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#FFA229] mb-4">BIS & CDSCO</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" >About Us</a></li>
                <li><a href="#" >News</a></li>
                <li><a href="#" >Leadership</a></li>
                <li><a href="#" >Media Kit</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8">
          <a href="#" className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </a>
        </div>

        <p className="text-center text-sm mt-4 text-gray-300">
          © 2024 Registerkaro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
