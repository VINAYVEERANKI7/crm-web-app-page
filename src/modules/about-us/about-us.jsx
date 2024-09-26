import React from "react";
import "./about-us.css";
import chatImage from "../../assets/images/about-us/chat.png";
import handsImage from "../../assets/images/about-us/hands.png";
import dash from "../../assets/images/about-us/dash.svg";
import harsha from "../../assets/images/about-us/harsha.png";
import ajay from "../../assets/images/about-us/ajay.png";
import UseMetaTags from "../../components/layouts/meta/meta";

const AboutUs = () => {
  UseMetaTags("COMRIDE | About Us ", "COMRIDE TECHNOLOGIES PRIVATE LIMITED.");
  return (
    <div>
      <div className="aboutus-main-container d-flex justify-content-center align-items-center">
        <div className="aboutus-hero-section w-100 mx-sm-5 mx-3 my-sm-5 my-3 my-md-0 ">
          <h1 className="fs_46 fs_xl_38 fs_lg_34 fs_md_28 fs_sm_22 fw_700">
            Building a Safer Ride: Why We Created This App?
          </h1>
          <p className="fs_28 fs_xl_24 fs_lg_20 fs_md_18 fs_sm_16 mt-sm-4 mt-2">
            The inspiration for our app stemmed from a personal need. My
            sister's discomfort with nighttime travel and my best friend's
            firsthand encounters as a part-time driver, struggling to support
            his education and livelihood due to low pay, illuminated the
            pressing challenges within the transportation landscape. Witnessing
            these difficulties fueled our daily motivation to develop an
            economical and secure app for both riders and drivers, also ensuring
            that the drivers earn more money from the bookings. Thankfully, our
            endeavor gained momentum when another friend resonated with our
            vision and came aboard as a co-founder, solidifying our commitment
            to app development.
          </p>
        </div>
      </div>
      <div className="aboutus-second-container d-flex justify-content-center align-items-center my-md-5 py-xl-5">
        <div style={{ maxWidth: "98rem" }} className="w-100 d-xl-flex">
          <div className="text-center col-xl-6">
            <img className="about-icon" src={chatImage} alt="chat" />
            <div style={{ lineHeight: 0.4 }}>
              <h5 className="fs_32 fs_xl_28 fs_md_24 fs_sm_20 fw_700">
                Our Commitment
              </h5>
              <img src={dash} alt="dash" />
            </div>
            <div className="col-xl-11 col-lg-8 col-md-10 col-12 text-start mx-auto my-sm-5 my-3 px-sm-5 px-3">
              <ul>
                {OurCommitmentDetails?.map((item, index) => (
                  <li
                    key={index}
                    className="fs_28 fs_xl_24 fs_md_22 fs_sm_18 color_464646"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center col-xl-6">
            <img src={handsImage} alt="chat" className="my-4 py-1 about-icon" />
            <div style={{ lineHeight: 0.4 }}>
              <h5 className="fs_32 fs_xl_28 fs_md_24 fs_sm_20  fw_700">
                Uncompromising Customer Experience
              </h5>
              <img src={dash} alt="dash" />
            </div>
            <div className="col-xl-11 col-lg-8 col-md-10 col-12 text-start mx-auto my-sm-5 my-3 px-sm-5 px-3">
              <ul>
                {UncompromisingDetails?.map((item, index) => (
                  <li
                    key={index}
                    className="fs_28 fs_xl_24 fs_md_22 fs_sm_18 color_464646"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ maxWidth: "110rem" }}
        className="aboutus-ourTeam-section w-100 px-sm-5 px-4 py-xl-5 my-5 mx-auto d-xl-flex justify-content-center align-items-start pb-5"
      >
        <div className="col-xl-5 col-12 mx-md-5 py-xl-5">
          <h5 className="fs_32 fs_xl_30 fs_md_26 fs_sm_22 fw_600 secondary_color">
            Our Team
          </h5>
          <h1 className="fs_46 fs_xl_40 fs_md_34 fs_sm_20 fw_800">
            Behind the Wheels of Your Seamless Journey
          </h1>
          <p className="fs_23 fs_xl_20 fs_md_18 fs_sm_16 color_464646 py-sm-4 py-2">
            Our dedicated team of professionals fuels the engine of our cab
            booking application, ensuring every aspect of your journey is
            meticulously crafted for a seamless experience. From skilled
            developers to customer support experts, we're committed to driving
            your satisfaction at every turn.
          </p>
        </div>
        <div className="col-xl-7 col-12 d-flex justify-content-center py-xl-5">
          <div className="d-flex justify-content-between gap-md-5 gap-4">
            <img className="founder-image" src={harsha} alt="founder" />
            <img className="founder-image" src={ajay} alt="co-founder" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const OurCommitmentDetails = [
  "Meticulously selecting drivers and vehicles",
  "Ensuring safety, comfort, and professionalism",
  "Understanding diverse needs of passengers and drivers",
  "Engaging with communities to address challenges and create opportunities",
  "Investing in technology and innovation",
  "Enhancing efficiency and sustainability within the transportation ecosystem",
];
const UncompromisingDetails = [
  "Collaborate closely with driver partners",
  "Implement robust quality assurance system",
  " Continually monitor performance",
  " Maintain consistency and reliability",
  "Track and monitor every ride in real-time",
  "Provide transparent feedback mechanisms",
  "Address concerns promptly",
  " Aim to provide seamless and enjoyable cab experience",
];
