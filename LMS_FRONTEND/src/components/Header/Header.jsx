import React from "react";
// import gs1logowhite from "../../Images/gs1logowhite.png";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="sticky top-0 z-50 bg-white ">
        <div
          className={`h-auto w-full bg-gray-100 flex flex-col sm:flex-row justify-between items-center px-4 py-4 lg:flex-row`}
        >
          {/* Logo and Text */}
          <div
            className={`flex items-center flex-wrap mb-4 sm:mb-0 lg:flex-row`}
          >
            {/* <img
              onClick={() => navigate("/")}
              src={gs1logowhite}
              className="h-14 w-auto cursor-pointer"
              alt=""
            /> */}
            <div className="text-center px-2">
              <p className="text-secondary font-semibold">GS1 Saudia Arabia</p>
              <p className="text-secondary">The Global Language of Business</p>
            </div>
          </div>

          {/* Buttons */}
          <div className={`flex flex-wrap justify-center flex-row`}>
            <div className="">
              <div className="flex justify-end items-end px-1 gap-3 font-sans font-semibold">
                {/* <p
                  onClick={() => navigate("/gepir")}
                  className="text-blue-500 transition-transform transform hover:scale-125 cursor-pointer"
                >
                  {t("Verified By GS1")}
                </p> */}
                |
                <span
                  onClick={() => navigate("/admin-login")}
                  className="text-blue-500 transition-transform transform hover:scale-125 cursor-pointer"
                >
                  Staff Login
                </span>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <button
                  // onClick={() => navigate('/get-barcode')}
                  onClick={() => navigate("/select-business-type")}
                  className="bg-secondary text-white px-2 py-1 rounded-md transition-transform transform hover:scale-90"
                >
                 Register Training
                </button>
                <button
                  onClick={() => navigate("/email-address")}
                  className="bg-primary text-white px-2 py-1 rounded-md transition-transform transform hover:scale-90"
                >
                  GS1 Member Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Nav */}
    </div>
  );
};

export default Header;
