import React, { useRef } from "react";
import travelImage from "../../assets/images/home/Home screen -2.png";
import { motion, useInView } from "framer-motion";

const TravelPartner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="d-flex align-items-center justify-content-center travel-main-container pb-5 px-4">
      <div className="text-center">
        <div className="my-lg-5">
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={animationVariants}
            className="travel-heading"
          >
            Your Travel Partner for Every Ride
          </motion.h1>
          <motion.p
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={animationVariants}
            className="mx-auto travel-sub-text fs_20 fs_sm_14 px-sm-2"
          >
            We're your one-stop shop for reliable and affordable taxi rides. Get
            where you need to be safely and comfortably, with friendly drivers
            and a booking system that's a breeze. Let us handle the stress of
            finding a ride, so you can just enjoy the journey and focus on what
            matters most.
          </motion.p>
        </div>
        <img src={travelImage} className="travel-image my-3" />
      </div>
    </div>
  );
};

export default TravelPartner;
