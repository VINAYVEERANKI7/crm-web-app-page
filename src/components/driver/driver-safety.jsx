import React from "react";
import call from "../../assets/icons/rider/safety/call.png";
import location from "../../assets/icons/rider/safety/locationMap.png";
import doc from "../../assets/icons/rider/safety/folder.png";
import check from "../../assets/icons/rider/safety/check.png";
import hand from "../../assets/icons/rider/safety/hand.png";
import man from "../../assets/icons/rider/safety/man.svg";

const DriverSafety = () => {
  return (
    <div className="my-lg-5 py-5">
      <h1 className="fs_48 fs_lg_32 fs_sm_22 fw_600 text-center text-lg-start">
        Safety is Paramount
      </h1>
      <p className="fs_32 fs_lg_22 fs_sm_14 text-center text-lg-start raleway color_464646">
        At Comride, your safety is our top priority. We continuously strive to
        raise the bar in providing protection and peace of mind throughout your
        journey. Inclusivity and safety are at the core of our community.
        Whether you're driving or riding in the back seat, we prioritize your
        safety and treat you with respect. Our commitment to safety begins
        before your very first ride, with stringent standards in place.
      </p>
      <div className="d-md-flex flex-wrap">
        {safetyData?.map((item, index) => (
          <div
            key={index}
            className="d-md-flex align-items-center my-5 col-md-6 text-center text-md-start"
          >
            <h6 className="fs_24 fs_sm_20 d-lg-none text-center text-md-start fw_600">
              {item?.title}
            </h6>
            <img
              src={item?.image}
              alt={"images"}
              className="safety-logo mt-2 mt-lg-0"
            />
            <div className="pt-4 px-md-5">
              <h6 className="fs_24 fs_sm_20 d-none d-lg-block fw_600">
                {item?.title}
              </h6>
              <ul className="mx-1 px-3 text-start">
                {item.description.map((subitem, i) => (
                  <li key={i} className="fs_20 fs_sm_16">
                    {subitem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverSafety;

const safetyData = [
  {
    image: call,
    title: "Emergency Assistance:",
    description: [
      "Every driver undergoes a rigorous background check upon joining Comride, followed by annual screenings. ",
      "We continuously monitor for criminal convictions and take immediate action to deactivate drivers as needed.",
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
  {
    image: man,
    title: "See Your Ride Partner",
    description: [
      "Once matched, you'll see your rider's name, profile photo, and ratings to ensure a secure ride experience.",
    ],
  },
];
