import React, { useState } from "react";
import "./driver-component.css";
import { State } from "country-state-city";
import Select, { components } from "react-select";
import listArrow from "../../assets/icons/driver/listArrow.svg";
import drop from "../../assets/icons/driver/dropdownArrow.svg";
import appImg from "../../assets/images/driver/how-to-join/app.png";
import docImg from "../../assets/images/driver/how-to-join/doc.png";
import earnImg from "../../assets/images/driver/how-to-join/earn.png";
import stepArrow from "../../assets/icons/driver/drop.png";

const HowToJoin = () => {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [selectedState, setSelectedState] = useState(null);
  const [selectedStepIndex, setSelectedStepIndex] = useState(null);

  const toggleStepFnc = (value) => {
    if (value === selectedStepIndex) {
      setSelectedStepIndex(null);
    } else {
      setSelectedStepIndex(value);
    }
  };

  return (
    <div className="mt-lg-5 pt-4">
      <p className="fs_32 fs_md_28 fs_sm_14 color_464646 pe-md-5 pb-4">
        Experience the Ease and Reliability of our Driver App. Join us today to
        start your journey towards safe and rewarding driving experiences. Check
        the requirements for your city which include minimum age, driver's
        license validity, and experience.
      </p>
      <div className="country-state-container w-100 rounded-5 p-md-4 p-3 px-md-5 px-4 my-lg-5 d-lg-flex align-items-center justify-content-between mx-auto">
        <div className="text-white fs_32 fs_md_24 fs_sm_20 fw_600">
          Select the country & state where you want to drive
        </div>
        <div className="d-sm-flex align-items-center gap-5">
          <div className="my-3 text-center text-sm-start">
            <label className="secondary_color w-100 fs_20 fs_md_18 fs_sm_16 fw_500 mb-1">
              Country
            </label>
            <Select
              className="select-fields"
              value={countriesList.find(
                (country) => country.value === selectedCountry
              )}
              options={countriesList}
              onChange={(selectedOption) => {
                if (selectedOption.value != selectedCountry) {
                  setSelectedState(null);
                }
                setSelectedCountry(selectedOption.value);
              }}
              placeholder="Select country"
              styles={customStyles}
              components={{
                DropdownIndicator,
              }}
            />
          </div>
          <div className="text-center text-sm-start">
            <label className="secondary_color fs_20 fw_500 mb-1">State</label>
            <Select
              options={State.getStatesOfCountry(selectedCountry).map(
                (state) => ({
                  label: state.name,
                  value: `${state.name}`,
                })
              )}
              value={selectedState ?? ""}
              onChange={(selectedOption) => {
                setSelectedState(selectedOption);
              }}
              placeholder="Select state"
              styles={customStyles}
              components={{
                DropdownIndicator,
              }}
            />
          </div>
        </div>
      </div>
      <div className="py-5">
        <p className="fs_24 fs_lg_22 fs_sm_18 mx-xl-5 px-xl-5 mb-4 mb-xl-0">
          So, here’s what you'll need to get started behind the wheel :)
        </p>
        <div className="d-none d-xl-block">
          <div className="d-flex align-items-start py-5 mx-auto list-section-container">
            <div className="small-conatiner w-100 h-100">
              <h6 className="fs_24 fs_xl_20 fw_600 text-center raleway">
                <span className="fs_28 fs_xl_24 fw_700 me-3">Step-1:</span> Meet
                Eligibility
              </h6>{" "}
              <div className="py-5 join-line h-100">
                <div className="text-center">
                  <img src={appImg} alt="appImg" className="w-50" />
                </div>
                <div className="py-5 my-3">
                  <h6 className="fs_22 fw_700">Driver</h6>
                  <div className="fs_20 color_464646 roboto col-11">
                    {driverData?.map((item, index) => (
                      <div key={index} className="d-flex align-items-start">
                        <img className="me-4 mt-2" src={listArrow} alt="->" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <h6 className="fs_22 fw_700 mt-3">Vehicle</h6>
                  <div className="fs_20 color_464646 roboto col-11">
                    {vehicleData?.map((item, index) => (
                      <div key={index} className="d-flex align-items-start">
                        <img className="me-4 mt-2" src={listArrow} alt="->" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5 h-100">
              <h6 className="fs_24 fs_xl_20 fw_600 text-center raleway">
                <span className="fs_28 fs_xl_24  fw_700 me-3">Step-2:</span>
                Download the App & Submit Documents
              </h6>
              <div className="py-5 join-line h-100">
                <div className="text-center">
                  <img src={docImg} alt="docImg" style={{ width: "35%" }} />
                </div>
                <p className="fs_20 color_464646 col-7 pt-5 my-3 mx-auto text-start roboto">
                  Download the Comride driver mobile app from Google ‘Playstore’
                  or Apple ‘App Store’. Create a new account and submit the
                  following documents.
                </p>
                <div className="fs_20 color_464646 col-7 mx-auto roboto">
                  {selectedCountry === "IN" && (
                    <>
                      {IndiaDocumentDetails?.map((item, index) => (
                        <div key={index} className="d-flex align-items-start">
                          <img className="me-4 mt-2" src={listArrow} alt="->" />
                          {item}
                        </div>
                      ))}
                    </>
                  )}
                  {selectedCountry === "US" && (
                    <>
                      {usaDocumentDetails?.map((item, index) => (
                        <div key={index} className="d-flex align-items-center">
                          <img className="me-4" src={listArrow} alt="->" />
                          {item}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="small-conatiner w-100">
              <h6 className="fs_24 fs_xl_20 fw_600 text-center raleway">
                <span className="fs_28 fs_xl_24  fw_700 me-3">Step-3:</span>{" "}
                Start Driving & Earning
              </h6>
              <div className="py-5 text-center">
                <div className="">
                  <img src={earnImg} alt="earnImg" className="w-50" />
                </div>
                <p className="fs_20 color_464646 px-4 col-11 py-5 my-3 mx-auto text-start roboto">
                  Once application is approved, you'll be notified and can
                  activate driver mode in the Comride app. The app will show you
                  rider requests and allow you to accept rides and begin earning
                  money.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-xl-none">
          <div className="">
            <div
              onClick={() => toggleStepFnc(1)}
              className="d-flex justify-content-between align-items-center"
            >
              <h6 className="fs_16 fs_md_18 fs_lg_20 fw_600 text-start raleway">
                <span className="fs_sm_18 fs_md_20 fs_lg_22 fw_700 me-2">
                  Step-1:
                </span>
                Meet Eligibility
              </h6>
              <img
                height={18}
                className={
                  selectedStepIndex === 1 ? "arrow-rotate mb-1" : "mb-1"
                }
                src={stepArrow}
                alt="v"
              />
            </div>

            {selectedStepIndex === 1 && (
              <div className="py-md-5 py-3">
                <div className="text-center">
                  <img
                    src={appImg}
                    className="steps-image mb-3 w-50"
                    alt="appImg"
                  />
                </div>
                <div className="my-3">
                  <h6 className="fs_18 fw_700">Driver</h6>
                  <div className="fs_18 fs_sm_16 color_464646 roboto col-11">
                    {driverData?.map((item, index) => (
                      <div key={index} className="d-flex align-items-start">
                        <img
                          className="me-4 mt-2"
                          src={listArrow}
                          height={12}
                          alt="->"
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                  <h6 className="fs_18 fw_700 mt-3">Vehicle</h6>
                  <div className="fs_18 fs_sm_16 color_464646 roboto col-11">
                    {vehicleData?.map((item, index) => (
                      <div key={index} className="d-flex align-items-start">
                        <img
                          className="me-4 mt-1"
                          height={12}
                          src={listArrow}
                          alt="->"
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="h-100 my-4">
            <div
              onClick={() => toggleStepFnc(2)}
              className="d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                {" "}
                <h6 className="fs_sm_18 fs_md_20 fs_lg_22 fw_700 text-nowrap me-2">
                  Step-2:
                </h6>
                <h6 className="fs_16 fs_md_18 fs_lg_20 fw_600 text-start">
                  Start Download the App & Submit Documents
                </h6>
              </div>

              <img
                height={18}
                className={selectedStepIndex === 2 ? "arrow-rotate" : ""}
                src={stepArrow}
                alt="v"
              />
            </div>

            {selectedStepIndex === 2 && (
              <div className="py-md-5 py-3">
                <div className="text-center">
                  <img
                    className="steps-image mb-3 w-50"
                    src={docImg}
                    alt="docImg"
                  />
                </div>
                <p className="fs_20 fs_sm_16 color_464646 col-sm-7 pt-md-5 my-3 mx-auto text-start roboto">
                  Download the Comride driver mobile app from Google ‘Playstore’
                  or Apple ‘App Store’. Create a new account and submit the
                  following documents.
                </p>
                <div className="fs_18 fs_sm_16 color_464646 mx-auto roboto">
                  {selectedCountry === "IN" && (
                    <>
                      {IndiaDocumentDetails?.map((item, index) => (
                        <div key={index} className="d-flex align-items-start">
                          <img
                            className="me-4 mt-1"
                            height={12}
                            src={listArrow}
                            alt="->"
                          />
                          {item}
                        </div>
                      ))}
                    </>
                  )}
                  {selectedCountry === "US" && (
                    <>
                      {usaDocumentDetails?.map((item, index) => (
                        <div key={index} className="d-flex align-items-center">
                          <img className="me-4" src={listArrow} alt="->" />
                          {item}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="w-100">
            <div
              onClick={() => toggleStepFnc(3)}
              className="d-flex justify-content-between align-items-center"
            >
              <h6 className="fs_16 fs_md_18 fs_lg_20 fw_600 text-start">
                <span className="fs_sm_18 fs_md_20 fs_lg_22 fw_700 me-2">
                  Step-3:
                </span>{" "}
                Start Driving & Earning
              </h6>
              <img
                height={18}
                className={
                  selectedStepIndex === 3 ? "arrow-rotate mb-1" : "mb-1"
                }
                src={stepArrow}
                alt="v"
              />
            </div>

            {selectedStepIndex === 3 && (
              <div className="py-md-5 py-3 text-center">
                <div className="">
                  <img
                    className="steps-image mb-3 w-50"
                    src={earnImg}
                    alt="earnImg"
                  />
                </div>
                <p className="fs_20 fs_sm_16 color_464646 px-4 col-lg-11 my-3 mx-auto text-start roboto">
                  Once application is approved, you'll be notified and can
                  activate driver mode in the Comride app. The app will show you
                  rider requests and allow you to accept rides and begin earning
                  money.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToJoin;

const countriesList = [
  { label: "India", value: "IN" },
  { label: "USA", value: "US" },
];

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={drop} alt="downArrow" width={20} height={20} />
    </components.DropdownIndicator>
  );
};
const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "rgb(255, 255, 255, 0.2)",
    color: "white",
    border: "none",
    width: "200px",
    fontWeight: "500",
    borderRadius: "8px",
    height: "3rem",
    margin: "auto",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "white",
    };
  },
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#1699F8" : "#B9D4FF",
    color: state.isSelected ? "white" : "#0f203c",
    fontWeight: "500",
    borderRadius: state.isSelected ? "5px" : null,
    marginBottom: "2px",
    // fontFamily: "Nunito",
    "&:hover": {
      backgroundColor: state.isFocused ? "#1699F8" : "#B9D4FF",
      borderRadius: state.isFocused ? "5px" : null,
      color: "white",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white",
    fontWeight: "700",
    paddingLeft: "5px",
    paddingRight: "2px",
  }),
};
const driverData = [
  "21 years or older",
  "A minimum of one year of driving experience.",
];
const vehicleData = [
  "2008 or newer car.",
  "4 doors and 5-8 seats, including the driver’s.",
  "License issued by the state in which you want drive.",
  "Vehicle Insurance.",
  "Vehicle Inspection document.",
];
const IndiaDocumentDetails = [
  "PAN Card",
  "Driver's License",
  "Aadhaar Card (Alternatively, provide a Bank Document, Electricity Bill, Telephone Bill, or Passport.)",
  "Vehicle Registration Certificate (RC)",
  "Vehicle Permit",
  "Vehicle Insurance",
  "Bank Account details.",
  "UPI",
];
const usaDocumentDetails = [
  "Valid driver's license.",
  "Proof of residency within your city, state, or province.",
  "Insurance documentation if you intend to use your own vehicle.",
  "Consent to a background check focusing on criminal and driving history (not a credit check).",
];
