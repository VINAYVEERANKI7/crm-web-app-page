import React, { useEffect } from "react";
import "./test.css";
import logo from "../../assets/images/Comride-logo.svg";
import { useLocation } from "react-router-dom";
import heroImage from "../../assets/images/home/home.png";
import drivingIcon from "../../assets/images/home/driving.svg";
import priceTagIcon from "../../assets/images/home/price-tag.svg";
import shieldIcon from "../../assets/images/home/shield.svg";
import arrowRight from "../../assets/icons/home/arrow-right.svg";
import travelImage from "../../assets/images/home/Home screen -2.png";

const Test = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <section>
      {/* ---------------------------- nav ---------------------------- */}
      <nav className="navbar-main-container">
        <div
          style={{ padding: "0.6vw" }}
          className="navbar-sub-container d-flex justify-content-between align-items-center mx-auto"
        >
          <>
            <img src={logo} alt="logo" className="navbar-logo" />
          </>
          <div className="d-flex aligin-items-center justify-content-between text-nowrap nav-fonts">
            {navbarItems?.map((navItem, index) => (
              <div style={{ marginLeft: "4vw" }} className="" key={index}>
                <label
                  // onClick={() => naviagte(navItem?.route)}
                  className={
                    location.pathname === navItem?.route
                      ? "navbar-active-item cursor_pointer"
                      : "cursor_pointer"
                  }
                >
                  {navItem?.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </nav>
      {/* ---------------------------- nav ---------------------------- */}
      <section className="main-test-contaner d-flex align-items-center">
        <div className="h-100 d-flex align-items-end">
          <img className="test-hero-image" src={heroImage} alt="heroImage" />
        </div>
        <div className="test-hero-sub h-100">
          <h6
            style={{ fontSize: "1vw", marginBottom: "0.8vw" }}
            className="fw_600 primary_color"
          >
            We heard you and we are here for you!
          </h6>
          <h6
            style={{ fontSize: "2.02vw", marginBottom: "0.8vw" }}
            className="fw_800 secondary_color"
          >
            America’s First of its kind{" "}
          </h6>
          <h1
            style={{
              fontSize: "3.25vw",
              marginBottom: "1vw",
              marginTop: "2vw",
            }}
            className="fw_600 roboto"
          >
            0% Booking Commission
          </h1>
          <p
            className="color_07003BBF line-height-12 w-100"
            style={{
              maxWidth: "30vw",
              fontSize: "1vw",
              marginBottom: "2vw",
              marginTop: "3vw",
            }}
          >
            Skip the wait and high fares! Our driver partners enjoy a
            subscription plan, leading to a reliable network and potentially
            lower prices for you. Experience consistent, high-quality service at
            an affordable cost.
          </p>
          <div
            style={{
              maxWidth: "27vw",
            }}
            className="d-flex flex-wrap justify-content-between align-items-center"
          >
            <div style={{ width: "5vw" }} className="d-flex align-items-center">
              <img src={drivingIcon} style={{ width: "2.5vw" }} alt="driving" />
              <p
                style={{ fontSize: "0.8vw", margin: "0.8vw" }}
                className="fw_600 line-height-12"
              >
                Approved Drivers
              </p>
            </div>
            <div style={{ width: "5vw" }} className="d-flex align-items-center">
              <img
                src={priceTagIcon}
                style={{ width: "2.5vw" }}
                alt="driving"
              />
              <p
                style={{ fontSize: "0.8vw", margin: "0.8vw" }}
                className="fw_600 line-height-12"
              >
                Fair Pricing
              </p>
            </div>
            <div style={{ width: "5vw" }} className="d-flex align-items-center">
              <img src={shieldIcon} style={{ width: "2.5vw" }} alt="driving" />
              <p
                style={{ fontSize: "0.8vw", margin: "0.8vw" }}
                className="fw_600 line-height-12"
              >
                Safety Features
              </p>
            </div>
          </div>
          <div
            style={{ marginTop: "12vw", marginRight: "5vw" }}
            className="d-flex justify-content-end"
          >
            <div style={{ width: "20vw" }}>
              <p style={{ fontSize: "1vw", marginBottom: "0.4vw" }}>
                Learn more:
              </p>
              <div className="d-flex   align-items-center justify-content-end">
                <button
                  style={{
                    fontSize: "1.3vw",
                    paddingLeft: "1vw",
                    paddingRight: "1vw",
                  }}
                  // onClick={() => navigate("/rider")}
                  className="rider_test_button d-flex justify-content-between align-items-center primary_bg rounded-4 text-white border-0 text-uppercase fw_600"
                >
                  Rider{" "}
                  <img
                    style={{ width: "1.3vw" }}
                    src={arrowRight}
                    alt="arrow"
                  />
                </button>
                <button
                  style={{
                    fontSize: "1.3vw",
                    marginLeft: "3vw",
                    paddingLeft: "1vw",
                    paddingRight: "1vw",
                  }}
                  // onClick={() => navigate("/driver")}
                  className="rider_test_button d-flex justify-content-between align-items-center secondary_bg rounded-4 text-white border-0 text-uppercase fw_600"
                >
                  Driver{" "}
                  <img
                    style={{ width: "1.3vw" }}
                    src={arrowRight}
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------------------------- */}
      <section
        className="text-center"
        style={{ height: "91vh", marginTop: "3vw" }}
      >
        <h1 style={{ fontSize: "2.02vw", marginBottom: "0.8vw" }}>
          Your Travel Partner for Every Ride
        </h1>
        <p
          className="mx-auto"
          style={{ fontSize: "1.02vw", marginBottom: "0.8vw", width: "60vw" }}
        >
          We're your one-stop shop for reliable and affordable taxi rides. Get
          where you need to be safely and comfortably, with friendly drivers and
          a booking system that's a breeze. Let us handle the stress of finding
          a ride, so you can just enjoy the journey and focus on what matters
          most.
        </p>
        <img src={travelImage} style={{ width: "70vw", marginTop: "3vw" }} />
      </section>
    </section>
  );
};

export default Test;

const navbarItems = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Rider",
    route: "/rider",
  },
  {
    name: "Driver",
    route: "/driver",
  },
  {
    name: "News & Blogs",
    route: "/Blogs-News",
  },
  {
    name: "FAQs",
    route: "/FAQs",
  },
  {
    name: "About Us",
    route: "/about-us",
  },
  {
    name: "Help & Support",
    route: "/help-support",
  },
];
