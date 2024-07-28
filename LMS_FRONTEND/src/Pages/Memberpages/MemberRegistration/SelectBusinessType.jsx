import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import DropDownSelection from "../../Userpage/DropDownSelection/DropDownSelection";

const SelectBusinessType = () => {
  const navigate = useNavigate();

  // Static options for the Autocomplete component
  const options = [
    { label: `Organization`, value: "organization" },
    {
      label: `Individual/Family Business`,
      value: "individual/family business",
    },
  ];

  // State to hold the selected option, defaulting to 'Organization'
  const [entityType, setEntityType] = useState(options[0]);
  // Function to handle option selection
  const handleOptionChange = (event, newValue) => {
    setEntityType(newValue);
  };

  // Function to handle clicking on the "Continue" button
  const handleContinue = () => {
    sessionStorage.setItem("selectedBusinessType", JSON.stringify(entityType));
    navigate("/member-registration");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div> */}

      <div>
        <DropDownSelection />
      </div>

      <div className="flex justify-center items-center mt-5 mb-10">
        <div className="sm:h-[460px] h-72 w-[85%] border-l border-r border-b border-primary rounded-md shadow-xl">
          <div className="h-5 w-full bg-primary rounded-t-md"></div>
          {/* show this in center */}
          <div className="flex justify-center items-center h-[80%]">
            <div className="w-full sm:w-[40%] sm:px-0 px-4">
              <h2
                className={`text-2xl text-secondary font-semibold  py-5 -mt-5`}
              >
                Member Registration
              </h2>
              <div className="flex flex-col gap-1">
                <label
                  className={`text-secondary font-bold `}
                  htmlFor="entityType"
                >
                  Business Type
                  <span className="text-red-600">*</span>
                </label>
                <Autocomplete
                  id="entityType"
                  options={options}
                  value={entityType}
                  getOptionLabel={(option) => option.label}
                  onChange={handleOptionChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className="bg-gray-50 border border-gray-300 text-black text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                      placeholder="Select Business Type"
                      InputProps={{
                        ...params.InputProps,
                        className: "text-black",
                      }}
                      InputLabelProps={{
                        ...params.InputLabelProps,
                        style: {
                          color: "black",
                        },
                      }}
                    />
                  )}
                />
                <button
                  // type='submit'
                  onClick={handleContinue}
                  className="bg-secondary text-white font-medium w-full sm:h-12 h-10 sm:text-base text-sm rounded-sm mt-5 hover:bg-primary"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default SelectBusinessType;
