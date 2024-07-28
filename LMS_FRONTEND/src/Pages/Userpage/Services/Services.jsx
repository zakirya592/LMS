import React from "react";
import barcodeVerificationImage from "../../../assets/image/agriculture.webp"; // Use appropriate image paths
import trainingImage from "../../../assets/image/healthcare.webp"; // Use appropriate image paths
import consultancyImage from "../../../assets/image/retail.webp"; // Use appropriate image paths
import { useNavigate } from "react-router-dom";
import newRequest from "../../../utils/userRequest";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const Services = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: featuresData,
  } = useQuery("fetchAllFeatures", fetchFeaturesData);

  async function fetchFeaturesData() {
    const response = await newRequest.get("/getAllfeatured_articales");
    return response?.data.filter((item) => item.status === 1) || [];
  }

  return (
    <div className="bg-[#f0f5fa] h-auto py-3">
      <div
        className={`p-8 mt-5`}
      >
        <div className="inline-block px-12">
          <h2 className="sm:text-4xl text-lg font-bold font-sans text-secondary">
            Resources
          </h2>
          <span className="block h-1 bg-primary mt-1"></span>
        </div>
      </div>

      <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 gap-7 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:px-20 px-5 mb-3">
        {/* First Card */}
        {/* {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          ""
        ) : (
          featuresData.map((item) => (
            <div
              className={`h-auto w-full border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-110 flex ${
                i18n.language === "ar" ? "text-end" : "text-start"
              }`}
            >
              <img
                src={imageLiveUrl(item?.image)}
                alt="Barcode Verification"
                className="w-1/2 h-full object-cover rounded-l-md"
              />
              <div className="p-4 w-2/3 bg-white">
                <h3 className="text-xl font-semibold font-sans text-secondary">
                  {i18n.language === "ar" ? item?.title_ar : item?.title}
                </h3>
                <Link
                  to={`/${item?.link}`}
                  className="text-primary font-sans hover:underline cursor-pointer"
                >
                  {t("Read more")} →
                </Link>
              </div>
            </div>
          ))
        )} */}

         <div className="h-auto w-full border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-110 flex">
          <img src={barcodeVerificationImage} alt="Barcode Verification" className="w-1/2 h-full object-cover rounded-l-md"/>
          <div className="p-4 w-2/3 bg-white">
            <h3 className="text-xl font-semibold font-sans text-secondary">How to Get A Barcode</h3>
            <p onClick={() => navigate('/barcode-services')} className="text-primary font-sans hover:underline cursor-pointer">Read more →</p>
          </div>
        </div>
        
        <div className="h-auto w-full border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-110 flex">
          <img src={trainingImage} alt="Training" className="w-1/2 h-full object-cover rounded-l-md"/>
          <div className="p-4 w-2/3 bg-white">
            <h3 className="text-xl font-sans font-semibold text-secondary">National Product Catalogue</h3>
            <p onClick={() => navigate('/gs1-barcode-services')} className="text-primary font-sans hover:underline hover:cursor-pointer">Read more →</p>
          </div>
        </div>
        
        <div className="h-auto w-full border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-110 flex">
          <img src={consultancyImage} alt="Consultancy" className="w-1/2 h-full object-cover rounded-l-md"/>
          <div className="p-4 w-2/3 bg-white">
            <h3 className="text-xl font-semibold font-sans text-secondary">Verified by GS1</h3>
            <a href="#" className="text-primary font-sans hover:underline">Read more →</a>
          </div>
        </div>

        <div className="h-auto w-full border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-110 flex">
          <img src={consultancyImage} alt="Consultancy" className="w-1/2 h-full object-cover rounded-l-md"/>
          <div className="p-4 w-2/3 bg-white">
            <h3 className="text-xl font-semibold font-sans text-secondary">Data Integration Services</h3>
            <a href="#" className="text-primary font-sans hover:underline">Read more →</a>
          </div>
        </div>

        <div className="h-auto w-full border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-110 flex">
          <img src={trainingImage} alt="Training" className="w-1/2 h-full object-cover rounded-l-md"/>
          <div className="p-4 w-2/3 bg-white">
            <h3 className="text-xl font-sans font-semibold text-secondary">GS1 Traceability</h3>
            <a href="#" className="text-primary font-sans hover:underline">Read more →</a>
          </div>
        </div>

        <div className="h-auto w-full border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-110 flex">
          <img src={barcodeVerificationImage} alt="Barcode Verification" className="w-1/2 h-full object-cover rounded-l-md"/>
          <div className="p-4 w-2/3 bg-white">
            <h3 className="text-xl font-semibold font-sans text-secondary">GS1 Digital Link</h3>
            <a href="#" className="text-primary font-sans hover:underline">Read more →</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
