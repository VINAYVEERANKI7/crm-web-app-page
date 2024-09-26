import React, { useRef, useState } from "react";
import "./rider.css";
import listMarker from "../../assets/icons/rider/list-marker.svg";
import istore from "../../assets/icons/rider/istore.png";
import playstore from "../../assets/icons/rider/playstore.png";
import OurServices from "../../components/rider/our-service/our-services";
import RiderSafety from "../../components/rider/safety/rider-safety";
import riderheroImage from "../../assets/images/rider/rider-hero.png";
import { motion, useInView } from "framer-motion";
import UseMetaTags from "../../components/layouts/meta/meta";

const Rider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [activeService, setActiveService] = useState("ourService");
  UseMetaTags("COMRIDE | Rider ", "COMRIDE TECHNOLOGIES PRIVATE LIMITED.");
  return (
    <>
      <div className="rider-main-container d-xl-flex align-items-center m-sm-5 mb-5">
        <div className="col-md-6 text-center mx-auto">
          <img src={riderheroImage} alt="heroImage" className="rider-image" />
        </div>

        <div className="col-xl-6 col-sm-9 mx-4 mx-sm-auto">
          <div className="col-lg-10 mx-auto mx-xxl-0">
            <motion.h1
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={animationVariants}
              className="fw_900 fs_68 fs_xxl_55 fs_xl_40 fs_sm_24"
            >
              Your Travel Partner for Every Ride
            </motion.h1>
            <div className="my-3">
              {featuresList?.map((item, index) => (
                <motion.label
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  animate="visible"
                  whileInView={{
                    opacity: 1,
                    transition: { delay: index * 0.1 },
                  }}
                  key={index}
                  className="pe-sm-4 pe-2 rider-feature-text fw_600 fs_18 fs_sm_14 fs_xs_11"
                >
                  {index ? (
                    <label
                      className="ps-sm-4 ps-2"
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
            <div className="my-5 col-sm-11">
              {riderListData?.map((item, index) => (
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  animate="visible"
                  whileInView={{
                    opacity: 1,
                    transition: { delay: index * 0.3 },
                  }}
                  key={index}
                  className="d-flex align-items-start mb-xxl-4 pb-2"
                >
                  <img
                    className="me-2 mt-1 list-marker"
                    src={listMarker}
                    alt="->"
                  />
                  <p className="rider-list fs_24 fs_xxl_20 fs_xl_18 fs_sm_16 ps-2">
                    {item?.text}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="d-flex justify-content-end m--sm-3  pt-sm-3">
              <div>
                <p className="fs_18 fs_sm_14 mx-2">Download at:</p>
                <div className="d-flex">
                  <button className="rounded-4 border-0 bg-white me-2">
                    <img className="download-btn" src={istore} alt="istore" />{" "}
                  </button>
                  <button className="rounded-4 border-0 bg-white mx-2">
                    <img
                      className="download-btn"
                      src={playstore}
                      alt="playstore"
                    />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-md-5 py-md-4 pb-5">
        <div className="text-center our-service-container w-100 ">
          <button
            onClick={() => setActiveService("ourService")}
            className={
              activeService === "ourService"
                ? "rider-active-btn px-5 py-2 fs_24 fs_xs_14 fw_500"
                : "rider-inactive-btn bg-white px-5 py-2 fs_24 fs_xs_14 fw_500"
            }
          >
            Our Services
          </button>
          <button
            className={
              activeService === "safety"
                ? "rider-active-btn px-5 py-2 fs_24 fs_xs_14 fw_500"
                : "rider-inactive-btn bg-white px-5  py-2 fs_24 fs_xs_14 fw_500"
            }
            onClick={() => setActiveService("safety")}
          >
            Safety
          </button>
        </div>
        {activeService === "ourService" && <OurServices />}
        {activeService === "safety" && <RiderSafety />}
      </div>
    </>
  );
};

export default Rider;

const riderListData = [
  {
    text: "Comride offers flexible earning opportunities, serving as an alternative to full-time, part-time, or seasonal driving jobs.",
  },
  {
    text: "Drivers can set their own schedules to fit work into their lives.",
  },
  {
    text: "It provides a supplementary income option for existing rideshare drivers.",
  },
];

const featuresList = [
  {
    text: "Affordable Pricing",
  },
  {
    text: "Reliable Drivers",
  },
  {
    text: "Reliable Drivers",
  },
];
