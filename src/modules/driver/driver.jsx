import React, { useRef, useState } from "react";
import "./driver.css";
import driverheroImage from "../../assets/images/driver/driverheroimage.png";
import istore from "../../assets/icons/rider/istore.png";
import playstore from "../../assets/icons/rider/playstore.png";
import WhatYouGet from "../../components/driver/what-you-get";
import DriverSafety from "../../components/driver/driver-safety";
import HowToJoin from "../../components/driver/how-to-join";
import { motion, useInView } from "framer-motion";
import UseMetaTags from "../../components/layouts/meta/meta";

const Driver = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const [activeService, setActiveService] = useState("whatYouGet");
  UseMetaTags("COMRIDE | Driver ", "COMRIDE TECHNOLOGIES PRIVATE LIMITED.");
  return (
    <>
      <div className="driver-main-container d-flex flex-column-reverse flex-xl-row align-items-center mx-auto">
        <div className="col-lg-9 col-xl-7 my-5">
          <div className="col-lg-11">
            <motion.h1
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={animationVariants}
              className="fw_900 fw_900 fs_68 fs_xxl_55 fs_xl_40 fs_sm_24"
            >
              Driver Friendly Subscription Plans
            </motion.h1>
            <motion.p
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={animationVariants}
              className="mt-xxl-5 my-4 fs_24 fs_xl_20 fs_lg_18 fs_sm_14 col-sm-11"
            >
              The best solution for anyone who wants to work a flexible schedule
              but still earn a full-time income. Our Driver app is user-friendly
              and reliable, purposefully crafted with drivers in mind. It
              provides you with all the essential tools and information
              necessary to excel as a driver
            </motion.p>
            {/* ----------------------------------------------------------- */}
            <div className="mb-lg-5 pb-md-5 d-none d-lg-block">
              {featuresList?.map((item, index) => (
                <motion.label
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  animate="visible"
                  whileInView={{
                    opacity: 1,
                    transition: { delay: index * 0.2 },
                  }}
                  key={index}
                  className="pe-lg-4 pe-1 fw_600 fs_16 fs_xl_14 fs_sm_10  text-center text-lg-start"
                >
                  {index ? (
                    <label
                      className="ps-lg-4 ps-1"
                      style={{ borderLeft: "2px solid #1699F8" }}
                    >
                      {item?.text}
                    </label>
                  ) : (
                    <label className="">{item?.text}</label>
                  )}
                </motion.label>
              ))}
            </div>
            <div className="mb-lg-5 pb-md-5 d-lg-none">
              {featuresList?.map((item, index) => (
                <motion.label
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  animate="visible"
                  whileInView={{
                    opacity: 1,
                    transition: { delay: index * 0.2 },
                  }}
                  key={index}
                  className=" pe-1 fw_600 fs_16 fs_xl_14 fs_sm_10 col-4 text-center"
                >
                  {index ? (
                    <label
                      className="ps-1"
                      style={{ borderLeft: "2px solid #1699F8" }}
                    >
                      {item?.text}
                    </label>
                  ) : (
                    <label className="">{item?.text}</label>
                  )}
                </motion.label>
              ))}
            </div>
            {/* ----------------------------------------------------------- */}
            <div className="d-flex my-3 mt-5 pt-xxl-5">
              <div>
                <p className="fs_18 fs_sm_14 mx-2">Download at:</p>
                <div className="d-flex">
                  <button className="rounded-4 border-0 bg-white me-2">
                    <img className="w-100" src={istore} alt="istore" />{" "}
                  </button>
                  <button className="rounded-4 border-0 bg-white mx-2">
                    <img className="w-100" src={playstore} alt="playstore" />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 h-100 driver-hero-container text-center">
          <img src={driverheroImage} alt="heroImage" className="driver-image" />
        </div>
      </div>

      <div className="my-md-5 py-md-4 col-11 col-xxl-10 mx-auto">
        <div className="w-100">
          <button
            onClick={() => setActiveService("whatYouGet")}
            className={
              activeService === "whatYouGet"
                ? "driver-active-btn px-md-5 px-sm-4 px-3 py-2 fs_28 fs_lg_24 fs_md_18 fs_sm_14 fw_500"
                : "driver-inactive-btn bg-white px-md-5  px-sm-4 px-3  py-2 fs_28 fs_lg_24 fs_md_18 fs_sm_14 fw_500"
            }
          >
            What you get
          </button>
          <button
            className={
              activeService === "howToJoin"
                ? "driver-active-btn px-md-5  px-sm-4 px-3 py-2 fs_28 fs_lg_24 fs_md_18 fs_sm_14 fw_500"
                : "driver-inactive-btn bg-white px-md-5  px-sm-4 px-3  py-2 fs_28 fs_lg_24 fs_md_18 fs_sm_14 fw_500"
            }
            onClick={() => setActiveService("howToJoin")}
          >
            How to join
          </button>
          <button
            className={
              activeService === "safety"
                ? "driver-active-btn px-md-5 px-sm-4 px-3 py-2 fs_28 fs_lg_24 fs_md_18 fs_sm_14 fw_500"
                : "driver-inactive-btn bg-white px-md-5 px-3  py-2 fs_28 fs_lg_24 fs_md_18 fs_sm_14 fw_500"
            }
            onClick={() => setActiveService("safety")}
          >
            Safety
          </button>
        </div>
        {activeService === "whatYouGet" && <WhatYouGet />}
        {activeService === "howToJoin" && <HowToJoin />}
        {activeService === "safety" && <DriverSafety />}
      </div>
    </>
  );
};

export default Driver;

const featuresList = [
  {
    text: "Lowest commission in USA",
  },
  {
    text: "Upfront Booking Information ",
  },
  {
    text: "Flexibility to Choose your rides",
  },
];
