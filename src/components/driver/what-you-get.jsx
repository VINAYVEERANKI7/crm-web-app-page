import React from "react";
import bookingInfo from "../../assets/images/driver/bookingInfo.png";
import maxYorEarn from "../../assets/images/driver/maxYourEarn.png";
import workLife from "../../assets/images/driver/worklife.png";

const WhatYouGet = () => {
  return (
    <div className="py-5">
      {whatYouGetData?.map((item, index) => (
        <div key={index}>
          {index % 2 == 0 ? (
            <div className="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between text-center text-lg-start  my-lg-5 py-md-5 py-3">
              <div>
                <img
                  className="what-you-get-image mt-5 d-none d-lg-block"
                  src={item?.image}
                  alt={"images"}
                />
              </div>
              <div className="px-xl-5 pt-md-4 col-lg-7 col-12">
                <h6 className="fs_48 fs_xl_34 fs_sm_21 fw_700">
                  {item?.title}
                </h6>
                <img
                  className="what-you-get-image my-sm-5 my-3 d-lg-none"
                  src={item?.image}
                  alt={"images"}
                />
                <p className="fs_34 fs_xl_24 fs_lg_24 fs_sm_14 roboto color_464646 col-lg-11">
                  {item.description}
                </p>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between text-center text-lg-start my-lg-5 py-md-5 py-3">
              <div className="pt-md-4  col-lg-7 col-12">
                <h6 className="fs_48 fs_xl_34 fs_sm_21 fw_700">
                  {item?.title}
                </h6>
                <img
                  className="what-you-get-image my-sm-5 my-3 d-lg-none"
                  src={item?.image}
                  alt={"images"}
                />
                <p className="fs_34 fs_xl_24 fs_lg_24 fs_sm_14 roboto color_464646 col-lg-10">
                  {item.description}
                </p>
              </div>
              <div>
                <img
                  className="what-you-get-image mt-5 mt-0 d-none d-lg-block"
                  src={item?.image}
                  alt={"images"}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WhatYouGet;

const whatYouGetData = [
  {
    image: workLife,
    title: "Upfront Booking Information",
    description:
      "Every booking details, including pickup location, destination, estimated fare, and passenger requests, are presented clearly and upfront. Make informed decisions about each ride you accept.",
  },
  {
    image: workLife,
    title: "Maximize Your Earnings",
    description:
      "At Comride, we prioritize your income by maintaining low and transparent commissions, ensuring you receive a larger portion of the fare. Our advanced technology intelligently analyzes ride requests, ensuring a continuous flow of bookings and minimizing downtime between rides. Say goodbye to waiting for your next passenger.",
  },
  {
    image: workLife,
    title: "Balance Your Work and Life",
    description:
      "Balance Your Work and Life: Enjoy the flexibility to create your own schedule and work the hours that suit your lifestyle. Whether you're a full-time driver or seeking a side hustle, we make it simple to incorporate driving into your routine.",
  },
];
