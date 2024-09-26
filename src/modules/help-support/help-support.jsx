import React, { useState } from "react";
import "./help-support.css";
import mailbox from "../../assets/images/help/mailbox.png";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Select, { components } from "react-select";
import drop from "../../assets/icons/driver/dropdownArrow.svg";
import SuccessMessagemodal from "../../components/help-support/success-modal";

const HelpSupport = () => {
  const phoneRegex = /^([+]\d{2})?\d{10}$/;
  const [selectedCountryCode, setSelectedCountryCode] = useState({
    label: "+91",
    value: "+91",
  });
  const [successModal, setSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phone_number: "",
    country_code: "+91",
    message: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required("Required"),
    email: Yup.string().email("Not a proper email").trim().required("Required"),
    phone_number: Yup.string()
      .trim()
      .matches(phoneRegex, "Not a valid Number")
      .required("Required"),
    message: Yup.string().trim().required("Required"),
  });
  const onSubmit = (values) => {
    setLoading(true);
    const apiUrl = "https://api.comride.com/api/home/help-and-support-create";
    axios
      .post(apiUrl, values)
      .then((response) => {
        setSuccessModal(true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error making POST request:", error);
      });
  };
  return (
    <div className="help-main-container d-flex align-items-center">
      <div className="help-support-container mx-auto d-lg-flex align-items-start px-md-5 px-4">
        <div className="col-xl-7 col-lg-6 pe-lg-5 my-4 my-lg-0">
          <h1 className="fs_48 fs_xl_34 fs_sm_28 primary_color">
            We love to hear from our customers
          </h1>
          <p
            className="fs_24 fs_xl_22 fs_sm_18 primary_color"
            style={{ maxWidth: "35rem" }}
          >
            Help us create an even better experience! Please let us know your
            thoughts on how we can improve our services.
          </p>
          <img
            className="support-image d-none d-md-block"
            src={mailbox}
            alt="mailbox"
          />
        </div>
        <div className="col-xl-5 col-lg-6 my-5 my-lg-0">
          <h1 className="fs_48 fs_xl_34 fs_sm_28 primary_color">
            Help & Support
          </h1>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              enableReinitialize={true}
            >
              {({ values }) => (
                <Form>
                  <div className="my-4">
                    <label
                      htmlFor="name"
                      className="fs_24 fs_xl_22 fs_sm_18 fw_600 primary_color w-100"
                    >
                      Name
                    </label>
                    <Field
                      className="input-field w-100  rounded-3 px-3 py-2 roboto"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="my-4">
                    <label
                      htmlFor="email"
                      className="fs_24 fs_xl_22 fs_sm_18 fw_600 primary_color w-100"
                    >
                      Email Address
                    </label>
                    <Field
                      className="input-field w-100 rounded-3 px-3 py-2 roboto"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="my-4 mobile-container">
                    <label
                      htmlFor="phone_number"
                      className="fs_24 fs_xl_22 fs_sm_18 fw_600 primary_color w-100"
                    >
                      Mobile Number
                    </label>
                    <div className="d-flex gap-sm-3 gap-1">
                      <div className="country-code-container roboto rounded-3">
                        <Select
                          name="country_code"
                          value={selectedCountryCode}
                          options={countryCode}
                          onChange={(selectedOption) => {
                            setSelectedCountryCode(selectedOption);
                          }}
                          placeholder="Select"
                          styles={customStyles}
                          components={{
                            DropdownIndicator,
                          }}
                        />
                      </div>
                      <Field
                        className="input-field w-100 rounded-3 px-3 py-2 roboto"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Enter your mobile number"
                      />
                    </div>
                  </div>
                  <div className="my-4">
                    <label
                      htmlFor="message"
                      className="fs_24 fs_xl_22 fs_sm_18 fw_600 primary_color w-100"
                    >
                      Message
                    </label>
                    <Field name="message">
                      {({ field }) => (
                        <textarea
                          {...field}
                          style={{ resize: "none" }}
                          rows={5}
                          className="input-field w-100 rounded-3 px-3 py-2 roboto"
                          id="message"
                          name="message"
                          placeholder="Write your message"
                        ></textarea>
                      )}
                    </Field>
                  </div>
                  <div className="my-4 text-end mobile-container">
                    <button
                      disabled={loading}
                      className="fs_18 fs_sm_16 fw_600 border-0 px-5 py-2 secondary_bg rounded-2 text-white roboto text-uppercase submit-btn"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <SuccessMessagemodal
        successMessageShow={successModal}
        handleSuccessMessageClose={() => setSuccessModal(false)}
      />
    </div>
  );
};

export default HelpSupport;

const countryCode = [
  {
    label: "+91",
    value: "+91",
  },
  {
    label: "+1",
    value: "+1",
  },
];

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={drop} alt="downArrow" width={20} height={20} />
    </components.DropdownIndicator>
  );
};
const customStyles = {
  control: (base, styles) => ({
    ...base,
    backgroundColor: "rgb(255, 255, 255, 0.2)",
    border: 0,
    width: "200px",
    maxWidth: "95px",
    fontWeight: "500",
    borderRadius: "8px",
    height: "3rem",
    focus: "none",
    boxShadow: "none",
    "@media only screen and (max-width: 576px)": {
      ...styles["@media only screen and (max-width: 576px)"],
      width: "150px",
      maxWidth: "87px",
    },
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
    backgroundColor: state.isSelected ? "#0f203c" : "#B9D4FF",
    color: state.isSelected ? "white" : "#0f203c",
    fontWeight: "500",
    borderRadius: state.isSelected ? "5px" : null,
    marginBottom: "2px",
    // fontFamily: "Nunito",
    "&:hover": {
      backgroundColor: state.isFocused ? "#0f203c" : "#B9D4FF",
      borderRadius: state.isFocused ? "5px" : null,
      color: "white",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontWeight: "700",
    paddingLeft: "5px",
    paddingRight: "2px",
  }),
};
