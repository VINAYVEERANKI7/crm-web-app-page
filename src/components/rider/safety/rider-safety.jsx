import React from "react";
import "./rider-safety.css";
import drive from "../../../assets/icons/rider/safety/drive.png";
import call from "../../../assets/icons/rider/safety/call.png";
import location from "../../../assets/icons/rider/safety/locationMap.png";
import doc from "../../../assets/icons/rider/safety/folder.png";
import check from "../../../assets/icons/rider/safety/check.png";
import hand from "../../../assets/icons/rider/safety/hand.png";

const RiderSafety = () => {
  return (
    <div className="p-lg-5 p-4 rider-safety-main-container">
      <p className="fs_22 fs_sm_14 col-lg-9 text-start text-md-center mx-auto color_464646">
        At Comride, your safety is our top priority. We continuously strive to
        raise the bar in providing protection and peace of mind throughout your
        journey.{" "}
        <span className="d-none d-md-block">
          Inclusivity and safety are at the core of our community. Whether
          you're driving or riding in the back seat, we prioritize your safety
          and treat you with respect. Our commitment to safety begins before
          your very first ride, with stringent standards in place.
        </span>
      </p>
      <p className="d-md-none fs_sm_14 text-start mx-auto color_464646">
        Inclusivity and safety are at the core of our community. Whether you're
        driving or riding in the back seat, we prioritize your safety and treat
        you with respect. Our commitment to safety begins before your very first
        ride, with stringent standards in place.
      </p>
      <div className="mx-auto p-md-5 safety-component-container">
        {safetyData?.map((item, index) => (
          <div key={index} className="py-2">
            {index % 2 == 0 ? (
              <div className="d-md-flex align-items-center my-md-5 my-3">
                <h6 className="fs_24 fs_sm_20 d-lg-none fw_600 text-center">
                  {item?.title}
                </h6>
                <div className="text-center text-lg-start">
                  <img
                    className="safety-logo mt-2 mt-lg-0"
                    src={item?.image}
                    alt={"images"}
                  />
                </div>
                <div className="px-md-5 pt-4">
                  <h6 className="fs_24 fs_sm_20 d-none d-lg-block fw_600">
                    {item?.title}
                  </h6>
                  <ul className="mx-1 ps-3">
                    {item.description.map((subitem, i) => (
                      <li key={i} className="fs_20 fs_sm_16">
                        {subitem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-start align-items-md-center my-md-5">
                <div className="pt-4">
                  <h6 className="fs_24 fs_sm_18 d-none d-lg-block fw_600">
                    {item?.title}
                  </h6>
                  <ul className="mx-1 ps-3">
                    {item.description.map((subitem, i) => (
                      <li key={i} className="fs_20 fs_sm_16">
                        {subitem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="d-none d-lg-block">
                  <img
                    className="safety-logo mt-2 mt-lg-0"
                    src={item?.image}
                    alt={"images"}
                  />
                </div>
                <div className="text-center w-100 d-lg-none">
                  <img
                    className="safety-logo mt-2 mt-lg-0"
                    src={item?.image}
                    alt={"images"}
                  />
                </div>
                <h6 className="fs_24 fs_sm_20 d-lg-none fw_600 text-center w-100">
                  {item?.title}
                </h6>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiderSafety;

const safetyData = [
  {
    image: drive,
    title: "Ensuring Driver Integrity:",
    description: [
      "Every driver undergoes a rigorous background check upon joining Comride, followed by annual screenings.",
      "We continuously monitor for criminal convictions and take immediate action to deactivate drivers as needed.",
    ],
  },
  {
    image: call,
    title: "Emergency Assistance:",
    description: [
      "In the event of an emergency, our Emergency Button feature instantly connects you to 911.",
      "Additionally, the app displays trip details, facilitating swift communication with authorities when needed.",
    ],
  },
  {
    image: location,
    title: "Smart Trip Check-In:",
    description: [
      "We actively monitor rides for unusual activity, such as long stops or route deviations. If anything seems off during your ride, we'll reach out to see if you need assistance.",
    ],
  },
  {
    image: doc,
    title: "Protection at Every Turn: ",
    description: [
      "With our Driver app, you can rest assured knowing that auto insurance coverage is maintained on your behalf during each trip, safeguarding both you and your rider.",
    ],
  },
  {
    image: check,
    title: "Share Your Location:",
    description: [
      "Add your trusted contacts to your safety settings to let loved ones track your real-time location for added peace of mind.",
    ],
  },
  {
    image: hand,
    title: "Our Commitment to Respectful Ridesharing: ",
    description: [
      "At Comride, we uphold a culture of mutual respect and zero tolerance for discrimination. Any violation of our policies may result in permanent removal from our platform.",
      "You have the right to cancel any ride that compromises your safety. Refer to our Ride Safety Guidelines for more details.",
    ],
  },
];
