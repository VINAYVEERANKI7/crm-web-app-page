// src/Carousel.js
import React, { useEffect, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import "./home-component.css";
import axios from "axios";
import arrow from "../../assets/icons/slider/slide-arrow.svg";
import rightArrow from "../../assets/icons/slider/right-arrow.svg";
import star from "../../assets/icons/slider/star 5.svg";
import icon from "../../assets/icons/slider/“.svg";
import { motion } from "framer-motion";
import loader from "../../assets/icons/loader/loader.svg";

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activeBtn, setActiveBtn] = useState("Rider");
  const [commenstData, setCommenstData] = useState([]);
  console.log(commenstData, "commenstData");

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      const apiUrl = `https://api.comride.com/api/home/site-review-rating-list?user_type=${activeBtn}`;
      axios
        .get(apiUrl)
        .then((response) => {
          console.log(response);
          setCommenstData(response?.data?.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error making POST request:", error);
          setLoading(false);
        });
    }
  }, [activeBtn]);

  const slides = commenstData.map((item, index) => ({
    key: index,
    content: (
      <div
        onClick={() => setCurrentIndex(index)}
        style={{
          transform: currentIndex === index ? "scale(1.1)" : "scale(1)", // Scale active slide
          zIndex: currentIndex === index ? 1 : 0,
        }}
        className={`rounded-4 ${currentIndex === index ? "active" : ""}`}
      >
        <img
          className="imaggggggg h-100"
          src={item.image}
          alt={`Slide ${index + 1}`}
        />
        {currentIndex === index && (
          <div className="carousel-caption text-dark roboto d-flex justify-content-center my-2">
            <div className="text-center">
              <label className="fs_18 fs_sm_17 fw_600 w-100">{item.name}</label>
              <div className="secondary_color fw_500 d-flex justify-content-center">
                <img src={star} alt="star" className="mb-1 me-1" />
                <label>{item.ratings} Ratings</label>
              </div>
              <div className="comment-container p-3 my-4 rounded-2 d-flex align-items-start">
                <div>
                  <img src={icon} alt="''" className="coutes" />
                </div>
                <div className="raleway text-start px-3 fs_md_12">
                  {item?.summary}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    ),
  }));

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const offsetFn = (index, total) => {
    const offset = index - currentIndex;
    return {
      offsetX: offset * 250, // Adjust the offset based on your carousel's dimensions
      opacity: Math.abs(offset) === 0 ? 1 : 1, // Full opacity for current slide, 0.5 opacity for others
    };
  };

  return (
    <div className="comments-section-main-container mb-5 py-md-5 position-relative">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-2 raleway fw_600"
        >
          What our customers say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto color_9e9e9e fs_16 p-0"
        >
          Thousands of happy customers who like our service
        </motion.p>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div
          className="faq-btn rounded-3 fs_24 fw_600 raleway"
          style={{ width: "fit-content" }}
        >
          <button
            onClick={() => {
              setActiveBtn("Rider");
              setCurrentIndex(0);
            }}
            className={
              activeBtn === "Rider"
                ? "secondary_bg border-0 text-white px-5 py-2 rounded-3 fs_24 fs_sm_16 fw_600"
                : "border-0 px-5 py-2 rounded-3 fs_24 fs_sm_16 fw_600"
            }
          >
            Rider
          </button>
          <button
            onClick={() => {
              setActiveBtn("Driver");
              setCurrentIndex(0);
            }}
            className={
              activeBtn === "Driver"
                ? "secondary_bg border-0 text-white px-5 py-2 rounded-3 fs_24 fs_sm_16 fw_600 cursor_pointer"
                : "border-0 px-5 py-2 rounded-3 fs_24 fs_sm_16 fw_600 cursor_pointer"
            }
          >
            Driver
          </button>
        </div>
      </div>
      {loading ? (
        <div
          style={{ height: "50vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <img width={"50px"} src={loader} alt="loading..." />
        </div>
      ) : (
        <div className="carousel-container">
          <button
            className="carousel__arrow carousel__arrow--left"
            onClick={prevSlide}
          >
            <img className="slider-arrow-image" src={arrow} alt="<-" />
          </button>
          <div className="carousel-slide-container">
            <Carousel
              slides={slides}
              goToSlide={currentIndex}
              offsetRadius={4}
              showNavigation={false} // Disable default navigation
              animationConfig={config.gentle}
              onChange={(index) => setCurrentIndex(index)}
              offsetFn={offsetFn}
            />
          </div>
          <button
            className="carousel__arrow carousel__arrow--right"
            onClick={nextSlide}
          >
            <img className="slider-arrow-image" src={rightArrow} alt="->" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MyCarousel;
