import React from "react";
import Aboutksa from "../../../assets/image/aboutgs1ksa.png";

const About = () => {

  return (
    <div className={`w-full px-4 md:px-20`}>
      <div
        className={`bg-[#f0f5fa] flex flex-wrap justify-center items-center flex-row`}
      >
        <div className={`w-full md:w-1/2 flex `}>
          <img
            src={Aboutksa}
            className="h-auto sm:w-[90%] w-full object-contain"
            alt="About"
          />
        </div>

        <div className="w-full md:w-1/2 sm:py-0 py-4 sm:px-0 px-3">
          <p className="text-sm font-sans text-red-500">About Saudi Arabia</p>
          <h2 className="text-2xl font-sans text-secondary font-semibold mb-3 mt-3">
            Enhancing Traceability
          </h2>
          <p className="font-sans mr-3">
            GS1 Saudi Arabia (GS1 KSA), known locally as the Saudi Barcode
            Centre, is the leading provider of GS1 International barcodes for
            the local market, essential for Supply chain traceability,
            automating inventory, warehouse management, and point-of-sale
            systems etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
