import React from "react";
// import aboutgs1 from "../../../Images/sliderimages/aboutgs1.webp";
import product1 from "../../../assets/image/product1.webp";
import product2 from "../../../assets/image/product2.webp";
import product3 from "../../../assets/image/product3.webp";
import product4 from "../../../assets/image/product4.webp";
// import product5 from "../../../assets/image/product5.webp";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import newRequest from "../../../utils/userRequest";

const SolutionsAndInovations = () => {
  const navigate = useNavigate();

  // Solutions And Innovations Api
  const {
    isLoading,
    error,
    data: solutionsAndInnovationData,
  } = useQuery(
    "fetchAllSolutionsAndInnovations",
    fetchSolutionsAndInnovationsData
  );

  async function fetchSolutionsAndInnovationsData() {
    const response = await newRequest.get("/getAllfeatured_services");
    return response?.data.filter((item) => item.status === 1) || [];
  }

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length <= maxLength
      ? text
      : `${text.substring(0, maxLength)}...`;
  };

  const maxLength = 50; // Set your desired max length here

  return (
    <div className="bg-gradient-to-r from-[#fef1ec] pb-10">
      <div className={`p-8 mt-10`}>
        <div className="inline-block px-12">
          <h2 className="sm:text-4xl text-lg font-bold font-sans text-secondary">
            Categories
          </h2>
          <span className="block h-1 bg-primary mt-1"></span>
        </div>
      </div>

      <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 gap-7 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:px-20 px-5 mb-3">
        {/* second Card */}
        <div className="h-auto w-full py-1 border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-110">
          <img src={product2} alt="" className="w-full h-44 -mt-1" />
          <div className="w-full">
            <div className={`px-3 flex flex-col gap-2`}>
              <p className="font-semibold text-secondary sm:text-lg text-base mt-3">
                Verified by GS1
              </p>
              <p className="text-secondary sm:text-lg text-base">
                GS1 Barcodes are reqiured by all major online and...
              </p>
              <p
                onClick={() => navigate("/gs1-gdsn")}
                className="text-gray-500 text-lg mt-3 cursor-pointer hover:text-primary"
              >
                Read more
              </p>
            </div>
          </div>
        </div>

        {/* third Card */}
        <div className="h-auto w-full py-1 border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-110">
          <img src={product3} alt="" className="w-full h-44 -mt-1" />
          <div className="w-full">
            <div className={`px-3 flex flex-col gap-2`}>
              <p className="font-semibold text-secondary sm:text-lg text-base mt-3">
                GS1 Traceability
              </p>
              <p className="text-secondary sm:text-lg text-base">
                GS1 Barcodes are reqiured by all major online and...
              </p>
              <p
                onClick={() => navigate("/traceability")}
                className="text-gray-500 text-lg mt-3 cursor-pointer hover:text-primary"
              >
                Read more
              </p>
            </div>
          </div>
        </div>

        {/* fourth Card */}
        <div className="h-auto w-full py-1 border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-110">
          <img src={product4} alt="" className="w-full h-44 -mt-1" />
          <div className="w-full">
            <div className={`px-3 flex flex-col gap-2`}>
              <p className="font-semibold text-secondary sm:text-lg text-base mt-3">
                National Product Catalogue (NPC)
              </p>
              <p className="text-secondary sm:text-lg text-base">
                GS1 Barcodes are reqiured by all major online and...
              </p>
              <p
                onClick={() => navigate("/industry-solutions")}
                className="text-gray-500 text-lg mt-3 cursor-pointer hover:text-primary"
              >
                Read more
              </p>
            </div>
          </div>
        </div>

        {/* fifth Card */}
        <div className="h-auto w-full py-1 border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-110">
          <img src={product1} alt="" className="w-full h-44 -mt-1" />
          <div className="w-full">
            <div className={`px-3 flex flex-col gap-2`}>
              <p className="font-semibold text-secondary sm:text-lg text-base mt-3">
                GS1 Digital Link
              </p>
              <p className="text-secondary sm:text-lg text-base">
                GS1 Barcodes are reqiured by all major online and...
              </p>
              <p
                onClick={() => navigate("/digital-link-template")}
                className="text-gray-500 text-lg mt-3 cursor-pointer hover:text-primary"
              >
                Read more
              </p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full py-1 border border-gray-300 rounded-md shadow-lg transition-transform transform hover:scale-110">
          <img src={product2} alt="" className="w-full h-44 -mt-1" />
          <div className="w-full">
            <div className={`px-3 flex flex-col gap-2`}>
              <p className="font-semibold text-secondary sm:text-lg text-base mt-3">
                GS1 Digital Link
              </p>
              <p className="text-secondary sm:text-lg text-base">
                GS1 Barcodes are reqiured by all major online and...
              </p>
              <p
                onClick={() => navigate("/digital-link-template")}
                className="text-gray-500 text-lg mt-3 cursor-pointer hover:text-primary"
              >
                Read more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsAndInovations;
