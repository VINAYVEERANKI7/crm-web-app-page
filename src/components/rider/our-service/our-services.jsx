import React, { useRef } from "react";
import "./our-service.css";
import HowItWorks from "../../how-it-works/how-it-works";
import mini from "../../../assets/images/rider/mini.png";
import sedan from "../../../assets/images/rider/sedan.png";
import suv from "../../../assets/images/rider/suv.png";
import vehicle from "../../../assets/icons/rider/vehicle.svg";
import licensePlate from "../../../assets/icons/rider/licensePlate.svg";
import driver from "../../../assets/icons/rider/driver.svg";
import info from "../../../assets/icons/rider/info.svg";
import { motion, useInView } from "framer-motion";

const OurServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <div>
      {/* --------------- OUR SERVICES SECTION --------------- */}
      <div className="mx-auto p-sm-5 p-4 our-service-component-container">
        {ourServiceData?.map((item, index) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={animationVariants}
            whileInView={{
              opacity: 1,
              transition: { delay: index * 0.2 },
            }}
            key={index}
          >
            {index % 2 == 0 ? (
              <div className="d-md-flex align-items-center my-5 text-center text-md-start">
                <h6 className="fs_30 fs_xs_24 d-lg-none">{item?.title}</h6>
                <div>
                  <img
                    className="service-logo my-3 my-lg-0"
                    src={item?.logo}
                    alt={item?.title}
                  />
                </div>
                <div className="px-md-5 px-lg-4 pt-lg-4">
                  <h6 className="fs_30 fs_xs_24 d-none d-lg-block">
                    {item?.title}
                  </h6>
                  <p className="fs_22 fs_xs_16 roboto">{item?.description}</p>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-column-reverse flex-md-row align-items-center my-5 ">
                <div className="px-md-5 px-lg-4 pt-lg-4 text-center text-md-end">
                  <h6 className="fs_30 fs_xs_24 d-none d-lg-block">
                    {item?.title}
                  </h6>
                  <p className="fs_22 fs_xs_16 service-text-descrition roboto ">
                    {item?.description}
                  </p>
                </div>
                <div>
                  <img
                    className="service-logo"
                    src={item?.logo}
                    alt={item?.title}
                  />
                </div>
                <h6 className="fs_30 fs_xs_24 d-lg-none">{item?.title}</h6>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      {/* --------------- HOW TO WORKS SECTION --------------- */}
      <HowItWorks />
      {/* --------------- TRIPS SECTION --------------- */}
      <div className="col-xxl-9 col-11 px-4 mx-auto d-xxl-flex align-items-center py-md-5 pt-5 pt-md-0">
        <div className="col-xxl-5 col-12 text-start">
          <h1 className="secondary_color fs_48 fs_lg_34 fs_sm_22 fw_600">
            Tips During your Ride
          </h1>
          <p className="roboto fs_24 fs_lg_18 fs_sm_14 color_9e9e9e col-11">
            Ensure your safety with a 4-point check before entering the vehicle:
          </p>
        </div>
        <div className="col-xxl-7 col-12 d-flex flex-wrap align-items-center gap-xl-5 gap-2 my-5 py-sm-5">
          {tripData?.map((item, index) => (
            <div
              key={index}
              className="col-md-5 col-12 d-flex align-items-center trip-card rounded-4 px-4 py-sm-3 py-2"
            >
              <div>
                <img className="trip-image" src={item?.image} alt="img" />
              </div>
              <p className="m-3 fs_sm_14">{item?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;

const ourServiceData = [
  {
    logo: mini,
    title: "Mini",
    description:
      "Skip the city stress!  Our taxi service pairs you with a friendly driver and a fuel-efficient hatchback. This zippy combo lets us weave through traffic, and get you to your destination fast. Plus, you'll save money on gas thanks to the hatchback's impressive mileage. So sit back, relax, and let us take the wheel!",
  },
  {
    logo: sedan,
    title: "Sedan",
    description:
      "Need a ride in style and comfort? Our sedan taxi service is for you! Spacious enough for luggage and legroom to spare, our sedans offer a smooth ride that's perfect for business trips, nights out, or simply getting across town relaxed. Plus, experienced drivers ensure a safe and efficient journey. Book your sedan taxi today and experience the difference!",
  },
  {
    logo: suv,
    title: "Suv",
    description:
      "Craving some extra legroom and space for your next ride? Our SUV taxi service is the answer! Perfect for groups, families with luggage, or anyone who wants a comfortable and roomy journey. With ample cargo space and cars that handles any road condition, our SUVs get you there relaxed and on time.",
  },
];

const tripData = [
  {
    image: vehicle,
    text: "Confirm the vehicle make and model.",
  },
  {
    image: licensePlate,
    text: "Verify the license plate.",
  },
  {
    image: driver,
    text: "Confirm the vehicle make and model.",
  },
  {
    image: info,
    text: "Verify the license plate.",
  },
];
