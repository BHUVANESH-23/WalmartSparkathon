import React from 'react';
import privacyJPG from '../assets/privacy_policy.png';

const Footer = () => {
  return (
    <div className="relative w-full border-t border-gray-300 text-center py-4  ">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:items-start justify-between">
        <div className="text-gray-500 text-sm ml-20">
          &copy; 2024 Walmart. All Rights Reserved.
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-7 md:space-y-0 md:space-x-4 mt-4 md:mt-0 pr-40">
          <a href="#feedback" className="text-gray-500 text-sm hover:text-gray-900">Give feedback</a>
          <a href="#privacy-rights" className="text-gray-500 text-sm hover:text-gray-900">CA Privacy Rights</a>
          <a href="#privacy-choices" className="text-gray-500 text-sm hover:text-gray-900 flex items-center">
            <img src={privacyJPG} className="h-4 w-6 mr-1" alt="Privacy" />
            Your Privacy Choices
          </a>
          <a href="#notice-collection" className="text-gray-500 text-sm hover:text-gray-900">Notice at Collection</a>
          <a href="#request-info" className="text-gray-500 text-sm hover:text-gray-900">Request My Personal Information</a>
          <a href="#delete-account" className="text-gray-500 text-sm hover:text-gray-900">Delete Account</a>
        </div>
      </div>
        <div className="flex justify-center md:justify-start mt-10 pt-5 md:mt-0 w-full md:w-auto flex-col float-right pr-40 ">
          <a href="#supply-chains-act" className="text-gray-500 text-sm hover:text-gray-900">California Supply Chains Act</a>
        </div>
    </div>
  );
}

export default Footer;
