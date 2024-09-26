import React from "react";
import "./footer.css";
import locationIcon from "../../../assets/icons/footer/loaction.svg";
import mailIcon from "../../../assets/icons/footer/mail.svg";
import phoneIcon from "../../../assets/icons/footer/phone.svg";
import fbIcon from "../../../assets/icons/footer/fb.svg";
import xIcon from "../../../assets/icons/footer/x.svg";
import linkedinIcon from "../../../assets/icons/footer/linkedin.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const termsPoliciesData = [
    {
      name: "Terms & Conditions",
      route: "/terms-conditions/Rider",
    },
    {
      name: "Privacy Policy",
      route: "/privacy-policies",
    },
    {
      name: "Cancellation & Refund Policy",
      route: "/cancellation-refund/Rider",
    },
  ];
  return (
    <>
      <footer className="footer-main-container d-flex flex-column justify-content-end align-items-center py-4">
        <div className="footer-sub-container d-flex flex-wrap align-items-start justify-content-between">
          <div className="col-xl-4 col-md-6 col-12">
            <h4 className="footer-headline my-md-4 my-2 fs_32 fs_xl_28 fs_lg_24 fs_md_22 fs_sm_18">
              Terms & Policies
            </h4>
            {termsPoliciesData?.map((item, index) => (
              <p
                key={index}
                onClick={() => navigate(item?.route)}
                className="text-white footer-labels fs_24 fs_xl_22 fs_lg_18 fs_md_16 fs_sm_14 ms-2 ms-xl-0 cursor_pointer"
              >
                {item?.name}
              </p>
            ))}
          </div>
          {/* --------------------------------------- */}
          <div className="col-xl-4 col-md-6 col-12 footer-column-container">
            <h4 className="footer-headline fs_32 fs_xl_28 fs_lg_24 fs_md_22 fs_sm_18 my-md-4 my-2">
              Contact Information
            </h4>
            <div className="d-flex align-items-start">
              <img className="me-2" src={locationIcon} alt="loc" />
              <p className="text-white contact-label fs_23 fs_xl_22 fs_lg_18 fs_md_16 fs_sm_14">
                Door No.54-20/10-1A, Srinagar Colony, Vijayawada, Andhra
                Pradesh, India - 520008
              </p>
            </div>

            <p className="text-white contact-label fs_23 fs_xl_22 fs_lg_18 fs_md_16 fs_sm_14">
              <img className="me-2" src={phoneIcon} alt="phone" />{" "}
              +91-9121855829
            </p>
            <p className="text-white contact-label fs_23 fs_xl_22 fs_lg_18 fs_md_16 fs_sm_14">
              <img className="me-2" src={mailIcon} alt="mail" /> dev@comride.com
            </p>
          </div>
          <div
            className="col-lg-3 col-12 d-flex justify-content-xl-end"
            style={{ maxWidth: "300px" }}
          >
            <div>
              <h4 className="footer-headline fs_32 fs_xl_28 fs_lg_24 fs_md_22 fs_sm_18 my-md-4 my-2">
                Social Links
              </h4>
              <div className="ms-2 ms-xl-0">
                <img className="me-5 footer-icons" src={fbIcon} alt="loc" />
                <img className="me-5 footer-icons-2" src={xIcon} alt="loc" />
                <img className="footer-icons-2" src={linkedinIcon} alt="loc" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-rights-container d-flex justify-content-center align-items-center">
        <label>© 2021 All Rights Reserved</label>
      </div>
    </>
  );
};

export default Footer;
