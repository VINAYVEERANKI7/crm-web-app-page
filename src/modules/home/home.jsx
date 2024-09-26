import React from "react";
import "./home.css";
import heroImage from "../../assets/images/home/home.png";
import drivingIcon from "../../assets/images/home/driving.svg";
import priceTagIcon from "../../assets/images/home/price-tag.svg";
import shieldIcon from "../../assets/images/home/shield.svg";
import arrowRight from "../../assets/icons/home/arrow-right.svg";
import HowItWorks from "../../components/how-it-works/how-it-works";
import { motion } from "framer-motion";
import TravelPartner from "../../components/home/travel-partner";
import MyCarousel from "../../components/home/comments-section";
import { useNavigate } from "react-router-dom";
import HomeBlogSection from "../../components/home/home-blog-section";
import UseMetaTags from "../../components/layouts/meta/meta";

const Home = () => {
  const navigate = useNavigate();
  UseMetaTags("COMRIDE | Home - COMRIDE TECHNOLOGIES PRIVATE LIMITED.");
  return (
    <>
      {/* --------------- HERO SECTION START --------------- */}
      <div className="px-sm-5 px-4 py-sm-5 py-4 w-100">
        <div style={{ maxWidth: "90rem" }} className="w-100 mx-auto d-lg-flex">
          <div className="d-lg-none">
            <motion.h6
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="fs_14 fw_600 primary_color"
            >
              We heard you and we are here for you!
            </motion.h6>
            <motion.label
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="fs_20 mt-1 fw_800 secondary_color"
            >
              America’s First of its kind{" "}
            </motion.label>
            <motion.label
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="hero-text fw_600 mb-3"
            >
              0% Booking Commission
            </motion.label>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <img className="hero-image" src={heroImage} alt="heroImage" />
          </motion.div>

          <div className="d-flex flex-column align-items-center  w-100 ms-xl-5 ms-md-4 home-content-container">
            <div className="text-start w-100 h-100 home-sub-content-container">
              <div className="d-none d-lg-block">
                <motion.h6
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="fs_18 fs_sm_16 fw_600 primary_color"
                >
                  We heard you and we are here for you!
                </motion.h6>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="fs_34 fs_xl_32 fs_lg_28 fs_sm_20 fw_800 secondary_color"
                >
                  America’s First of its kind{" "}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="hero-text fw_600"
                >
                  0% Booking Commission
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="fs_20 fs_xl_18 fs_lg_17 fs_sm_14 mb-xl-5 my-4 color_9e9e9e line-height-12 w-100 text-width"
              >
                Skip the wait and high fares! Our driver partners enjoy a
                subscription plan, leading to a reliable network and potentially
                lower prices for you. Experience consistent, high-quality
                service at an affordable cost.
              </motion.p>
              <div
                className="d-flex flex-wrap justify-content-between align-items-center col-xl-9"
                style={{ maxWidth: "35rem" }}
              >
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { delay: 0.2 },
                  }}
                  className="col-4 col-xl-3 text-center text-xl-start my-2 my-lg-0 d-xl-flex align-items-center"
                >
                  <img
                    className="home-features-icons"
                    src={drivingIcon}
                    alt="driving"
                  />
                  <p className="fw_600 fs_xl_14 fs_lg_13 fs_sm_11 m-sm-2 col-xl-6 col-12 my-1 line-height-12">
                    Approved Drivers
                  </p>
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { delay: 0.3 },
                  }}
                  className="col-4 col-xl-3 my-2 my-lg-0 text-center text-xl-start d-xl-flex align-items-center"
                >
                  <img
                    className="home-features-icons"
                    src={priceTagIcon}
                    alt="driving"
                  />
                  <p className="fw_600 fs_xl_14 fs_lg_13 fs_sm_11 col-xl-6 m-sm-2 my-1 line-height-12 ">
                    Fair Pricing
                  </p>
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  animate="visible"
                  whileInView={{
                    opacity: 1,
                    transition: { delay: 0.4 },
                  }}
                  className="col-4 col-xl-3 my-2 my-lg-0 text-center text-xl-start d-xl-flex align-items-center"
                >
                  <img
                    className="home-features-icons"
                    src={shieldIcon}
                    alt="driving"
                  />
                  <p className="fw_600 fs_xl_14 fs_lg_13 fs_sm_11 col-xl-6 col-12 m-sm-2 my-1 line-height-12">
                    Safety Features
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="d-flex justify-content-sm-end my-3 my-lg-0 w-100 home-sub-content-container">
              <div>
                <p className="fs_18 fs_sm_14 m-0 m-md-1">Learn more:</p>
                <div className="d-flex align-items-center w-100 gap-2">
                  <button
                    onClick={() => navigate("/rider")}
                    className="raleway rider_button d-flex justify-content-between align-items-center primary_bg rounded-md-4 rounded-3 px-4 py-2 text-white border-0 text-uppercase fw_600 fs_24 fs_xl_20 fs_lg_17 "
                  >
                    Rider{" "}
                    <img
                      className="arrow-image ms-2"
                      src={arrowRight}
                      alt="arrow"
                    />
                  </button>
                  <button
                    onClick={() => navigate("/driver")}
                    className="raleway rider_button d-flex justify-content-between align-items-center secondary_bg rounded-md-4 rounded-3 px-4 py-2 text-white border-0 text-uppercase fw_600 fs_24 fs_xl_20 fs_lg_17  my-2 my-lg-0 mx-sm-2 ms-sm-4"
                  >
                    Driver{" "}
                    <img
                      className="mb-1 ms-2 arrow-image"
                      src={arrowRight}
                      alt="arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------- HERO SECTION END --------------- */}
      {/* --------------- TRAVEL PARTNER SECTION START --------------- */}
      <TravelPartner />
      {/* --------------- TRAVEL PARTNER SECTION End --------------- */}
      {/* --------------- HOW TO WORKS SECTION --------------- */}
      <HowItWorks />
      {/* --------------- BLOG SECTION START --------------- */}
      <HomeBlogSection />
      {/* --------------- BLOG SECTION END --------------- */}
      <MyCarousel />
    </>
  );
};

export default Home;
