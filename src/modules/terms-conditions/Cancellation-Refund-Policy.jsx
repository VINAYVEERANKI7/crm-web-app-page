import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import RiderCancellationRefund from "../../components/terms-policies/rider-cancellation-refund";
import DriverCancellationRefund from "../../components/terms-policies/driver-cancellation-refund";

const CancellationRefundPolicy = () => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      <div className="px-sm-5 px-4 py-sm-5 py-4 w-100">
        <p className="fs_32 fw_600 raleway text-center">
          Cancellation & Refund Policy
        </p>
        <div className="d-flex justify-content-center my-lg-3 my-2">
          <div
            className="faq-btn rounded-3 fs_20 fs_sm_18 fw_600 raleway"
            style={{ width: "fit-content" }}
          >
            <button
              onClick={() => navigate(`/cancellation-refund/Rider`)}
              className={
                params.type === "Rider"
                  ? "secondary_bg border-0 text-white px-5 py-2 rounded-3 fs_22 fs_sm_16 fw_600"
                  : "border-0 px-5 py-2 rounded-3 fs_22 fs_sm_16 fw_600"
              }
            >
              Rider
            </button>
            <button
              onClick={() => navigate(`/cancellation-refund/Driver`)}
              className={
                params.type === "Driver"
                  ? "secondary_bg border-0 text-white px-5 py-2 rounded-3  fs_22 fs_sm_16 fw_600"
                  : "border-0 px-5 py-2 rounded-3  f_22 fs_sm_16 fw_600"
              }
            >
              Driver
            </button>
          </div>
        </div>
        {params.type === "Rider" && <RiderCancellationRefund />}
        {params.type === "Driver" && <DriverCancellationRefund />}
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
