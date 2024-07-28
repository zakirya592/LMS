// static Data Slider
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
// import Button from "@mui/material/Button";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
// import { CircularProgress } from "@mui/material";
import newRequest from "../../../utils/userRequest";
import silderimage from "../../../assets/image/sliderfirstimage.webp"
const NewHeaderSlider = () => {

  const {
    isLoading,
    error,
    data: slidersData,
  } = useQuery("fetchAllSliders", fetchFeaturesData);

  async function fetchFeaturesData() {
    const response = await newRequest.get("/getAllsliders");
    return response?.data.filter((item) => item.status === 1) || [];
  }

  return (
    <div className="relative h-auto w-full bg-white border-b mt-4 mb-20">
      <div className="relative h-[420px] w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* {data.map((item) => ( */}
          {/* {isLoading ? (
            <div className="flex justify-center items-center h-[420px]">
              <CircularProgress />
              <p>Loagin...</p>
            </div>
          ) : error ? (
            ""
          // ) : ( */}
          {/* // slidersData.map((item) => ( */}
          <SwiperSlide>
            <div className="relative w-full h-[420px]">
              <img
                src={silderimage}
                className="w-full h-full object-cover"
                alt="  1"
              />
              <div
                className={`absolute sm:top-1/4 top-2.5 sm:left-10 left-3 text-white`}
              >
                <h2 className="sm:text-5xl text-3xl font-sans font-bold mb-4">
                  Title
                </h2>
                <p
                  className={`sm:text-2xl text-xl font-thin sm:max-w-3xl w-full text-left`}
                >
                  Description
                </p>

                <Link // to={`/${item?.link}`}
                >
                  <button
                    // variant="contained"
                    // type="submit"
                    style={{
                      backgroundColor: "#531716",
                      color: "#ffffff",
                      marginTop: "2rem",
                    }}
                    className="bg-[#B6BAD6] px-5 py-2 rounded"
                    // endIcon={<ArrowRightAltIcon />}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[420px]">
              <img
                src={silderimage}
                className="w-full h-full object-cover"
                alt="  1"
              />
              <div
                className={`absolute sm:top-1/4 top-2.5 sm:left-10 left-3 text-white`}
              >
                <h2 className="sm:text-5xl text-3xl font-sans font-bold mb-4">
                  Title
                </h2>
                <p
                  className={`sm:text-2xl text-xl font-thin sm:max-w-3xl w-full text-left`}
                >
                  Description
                </p>

                <Link // to={`/${item?.link}`}
                >
                  <button
                    // variant="contained"
                    // type="submit"
                    style={{
                      backgroundColor: "#531716",
                      color: "#ffffff",
                      marginTop: "2rem",
                    }}
                    className="bg-[#B6BAD6] px-5 py-2 rounded"
                    // endIcon={<ArrowRightAltIcon />}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          {/* // )) */}
          {/* // )} */}
        </Swiper>
        <div
          id="swiper-button-prev"
          className="absolute bottom-0 z-20 -translate-y-1/2 transform right-20"
        >
          <IoIosArrowDropleftCircle className="cursor-pointer rounded-full text-5xl text-white opacity-80 hover:opacity-100" />
        </div>
        <div
          id="swiper-button-next"
          className="absolute bottom-0 z-20 -translate-y-1/2 transform right-6"
        >
          <IoIosArrowDroprightCircle className="cursor-pointer rounded-full text-5xl text-white opacity-80 hover:opacity-100" />
        </div>
      </div>
    </div>
  );
};

export default NewHeaderSlider;
