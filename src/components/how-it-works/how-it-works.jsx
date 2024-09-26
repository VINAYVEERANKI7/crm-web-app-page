import React, { useRef, useState } from "react";
import "./how-it-works.css";
import create from "../../assets/icons/how-it-works/create.png";
import loaction from "../../assets/icons/how-it-works/location.png";
import route from "../../assets/icons/how-it-works/route.png";
import mobile from "../../assets/icons/how-it-works/mobile.png";
import map from "../../assets/icons/how-it-works/map.png";
import fee from "../../assets/icons/how-it-works/fee.png";
import cars from "../../assets/icons/how-it-works/bike.png";
import { motion, useInView } from "framer-motion";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeButton, setActiveButton] = useState("rider");
  return (
    <div className="how-it-works-main-container rounded-4 m-md-5 m-3 p-md-5 p-3">
      <h1 className="fw_600 fs_32 fs_sm_22">How it works</h1>
      <p className="how-it-works-sub-text fs_sm_14">
        Experience the Ease and Reliability of our mobiles app. Join us today to
        start your journey towards safe and rewarding driving experiences.
      </p>
      <div className="d-flex justify-content-center align-items-center gap-4 my-lg-5 my-3">
        <button
          onClick={() => setActiveButton("rider")}
          className={
            activeButton === "rider"
              ? "primary_bg text-white border-0 px-3 py-2 rounded-2 fw_600 fs_20 fs_sm_16"
              : "border-0 px-3 py-2 fw_600 fs_20 fs_sm_16"
          }
        >
          Rider
        </button>
        <button
          onClick={() => setActiveButton("driver")}
          className={
            activeButton === "driver"
              ? "primary_bg text-white border-0 px-3 py-2 rounded-2 fw_600 fs_20 fs_sm_16"
              : "border-0 px-3 py-2 fw_600 fs_20 fs_sm_16"
          }
        >
          Driver
        </button>
      </div>
      <div className="py-md-4">
        {activeButton === "rider" && (
          <div
            style={{ overflowX: "auto" }}
            className="d-flex flex-column flex-md-row gap-3 justify-content-between align-items-stretch w-100"
          >
            {riderData?.map((item, index) => (
              <>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  animate="visible"
                  whileInView={{
                    opacity: 1,
                    transition: { delay: index * 0.1 },
                  }}
                  style={{ width: "400px" }}
                  className="bg-white rounded-4 p-4 d-none d-md-block text-center w-100"
                >
                  <img width={160} src={item?.logo} alt={item?.logo} />

                  <p className="mt-5 mb-4 fs_22 fs_xl_20 fw_600">
                    {item?.title}
                  </p>
                  <p className="how-it-works-card-text fs_16">
                    {item?.description}
                  </p>
                </motion.div>

                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  animate="visible"
                  whileInView={{
                    opacity: 1,
                    transition: { delay: index * 0.1 },
                  }}
                  className="col-12 bg-white rounded-4 p-4 my-3  text-start d-md-none text-center"
                >
                  <p className="my-2 fs_18 fw_600">{item?.title}</p>
                  <div className="d-sm-flex align-items-center text-center">
                    <img
                      src={item?.logo}
                      alt={item?.logo}
                      width={100}
                      height={100}
                      className="card-image mb-3"
                    />
                    <p className="how-it-works-card-text fs_14 px-sm-2">
                      {item?.description}
                    </p>
                  </div>
                </motion.div>
              </>
            ))}
          </div>
        )}
        {activeButton === "driver" && (
          <div
            style={{ overflowX: "scroll" }}
            className="d-flex flex-column flex-md-row  justify-content-between justify-content-xl-center gap-3 align-items-stretch"
          >
            {driverData?.map((item, index) => (
              <>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  animate="visible"
                  whileInView={{
                    opacity: 1,
                    transition: { delay: index * 0.1 },
                  }}
                  style={{ width: "400px" }}
                  className="bg-white rounded-4 p-4 text-center d-none d-md-block"
                >
                  <img width={160} src={item?.logo} alt={item?.logo} />

                  <p className="mt-5 mb-4 fs_22 fs_xl_20 fw_600">
                    {item?.title}
                  </p>
                  <p className="how-it-works-card-text fs_16">
                    {item?.description}
                  </p>
                </motion.div>

                <motion.div
                  // viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  animate="visible"
                  whileInView={{
                    opacity: 1,
                    transition: { delay: index * 0.1 },
                  }}
                  className="col-12 bg-white rounded-4 p-4 my-3 rounded-4 text-start d-md-none text-center text-sm-start"
                >
                  <p className="my-2 fs_18 fw_600">{item?.title}</p>
                  <div className="d-sm-flex align-items-center">
                    <img
                      src={item?.logo}
                      alt={item?.logo}
                      width={100}
                      height={100}
                      className="card-image mb-3"
                    />
                    <p className="how-it-works-card-text fs_14 px-sm-2">
                      {item?.description}
                    </p>
                  </div>
                </motion.div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HowItWorks;

const riderData = [
  {
    logo: create,
    title: "Create Your Account",
    description:
      "New to Comride? No problem!  Open the app and quickly create an account using your email address or phone number.",
  },
  {
    logo: loaction,
    title: "Set pickup & drop off",
    description:
      "Open the app and allow it to access your location, or manually set your pick-up point. Then, simply type in your desired destination or choose it from a map.",
  },
  {
    logo: cars,
    title: "Select Ride Type & Payment Method ",
    description:
      "Select a ride type which meet your needs and select your preferred payment method (credit card, debit card) during this step.",
  },
  {
    logo: route,
    title: "Track Your Driver & Pay Securely",
    description:
      "Relax and track your driver's progress on the map in real-time.  Once you reach your destination, payment is a breeze! your chosen payment method is automatically processed through the app.",
  },
];
const driverData = [
  {
    logo: mobile,
    title: "Review Booking Information",
    description:
      "Before heading out, take a moment to review the details of your upcoming trip. This includes the rider's name, pick-up location, chosen ride type (motorbike, auto rickshaw, hatchback, sedan, or SUV), and their final destination.",
  },
  {
    logo: map,
    title: "Safe Pick-Up",
    description:
      "Head to the designated pick-up location provided in the app. Look for the rider and ensure they are comfortable getting into the vehicle in a well-lit and safe area.",
  },
  {
    logo: fee,
    title: "Pleasant Journey & Drop-Off",
    description:
      "Maintain a safe and comfortable ride for your passenger.  Use your knowledge of the city to navigate efficiently and offer a smooth journey. Upon arrival at the destination, ensure they disembark safely.",
  },
];
