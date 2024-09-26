import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import RiderTermsCondition from "../../components/terms-policies/rider-terms-condition";
import DriverTermsCondition from "../../components/terms-policies/driver-terms-condition";

const TermsConditions = () => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div className="px-sm-5 p-3 py-sm-5  w-100">
      <p className="fs_32 fw_600 raleway text-center">Terms & Conditions </p>
      <div className="d-flex justify-content-center my-lg-3 my-2">
        <div
          className="faq-btn rounded-3 fs_22 fs_sm_18 fw_600 raleway"
          style={{ width: "fit-content" }}
        >
          <button
            onClick={() => navigate(`/terms-conditions/Rider`)}
            className={
              params.type === "Rider"
                ? "secondary_bg border-0 text-white px-5 py-2 rounded-3 fs_22  fs_sm_16 fw_600"
                : "border-0 px-5 py-2 rounded-3 fs_22  fs_sm_16 fw_600"
            }
          >
            Rider
          </button>
          <button
            onClick={() => navigate(`/terms-conditions/Driver`)}
            className={
              params.type === "Driver"
                ? "secondary_bg border-0 text-white px-5 py-2 rounded-3 fs_22 fs_sm_16 fw_600"
                : "border-0 px-5 py-2 rounded-3 fs_22 fs_sm_16 fw_600"
            }
          >
            Driver
          </button>
        </div>
      </div>
      <div>
        {params.type === "Rider" && <RiderTermsCondition />}
        {params.type === "Driver" && <DriverTermsCondition />}
      </div>
    </div>
  );
};

export default TermsConditions;
