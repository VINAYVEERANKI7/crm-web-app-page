import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { removeUnderScore } from "../../helper/helper";
import loader from "../../../assets/icons/loader/loader.svg";

const FaqLayout = ({ children }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      const apiUrl = `https://api.comride.com/api/home/rider-or-driver-topic-or-faq-help-findall?page_no=0&user_type=${params.type}`;
      axios
        .get(apiUrl)
        .then((response) => {
          console.log(response?.data.data.data, "response");
          setCategoryData(response?.data?.data?.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error making POST request:", error);
          setLoading(false);
        });
    }
  }, [params.type]);
  return (
    <div>
      <div className="faq-hero-container text-center p-md-5 py-sm-5 pt-4 pt-sm-0 pb-2 pb-sm-0">
        <h1 className="fs_48 fs_lg_38 fs_sm_20 fw_600">
          Frequently Asked Questions
        </h1>
        <p className="fs_22 fs_lg_20 fs_sm_14 color_727272 roboto col-md-10 px-sm-5 px-2 mx-auto">
          Whether you're a rider looking for a safe and reliable ride, or a
          driver interested in joining our team, we have information to help
          you. Explore the categories below to find answers on topics like
          booking rides, payment options, driver requirements, and more.
        </p>
      </div>
      <div className="d-flex justify-content-center my-5">
        <div
          className="faq-btn rounded-3 fs_24 fs_sm_18 fw_600 raleway"
          style={{ width: "fit-content" }}
        >
          <button
            onClick={() => navigate(`/FAQs/${categoryData?.[0]?.Name}/Rider`)}
            className={
              params.type === "Rider"
                ? "secondary_bg border-0 text-white px-5 py-2 rounded-3 fs_24 fs_lg_22 fs_sm_16 fw_600"
                : "border-0 px-5 py-2 rounded-3 fs_24 fs_lg_22 fs_sm_16 fw_600"
            }
          >
            Rider
          </button>
          <button
            onClick={() => navigate(`/FAQs/${categoryData?.[0]?.Name}/Driver`)}
            className={
              params.type === "Driver"
                ? "secondary_bg border-0 text-white px-5 py-2 rounded-3 fs_24 fs_lg_22 fs_sm_16 fw_600"
                : "border-0 px-5 py-2 rounded-3 fs_24 fs_lg_22 fs_sm_16 fw_600"
            }
          >
            Driver
          </button>
        </div>
      </div>

      <div
        style={{ maxWidth: "100rem" }}
        className="d-flex my-5  mx-auto px-xl-5"
      >
        <div className="category-main-contaier d-none d-lg-block col-3">
          <h6 className="fs_28 fw_500">Categories</h6>
          {loading ? (
            <div className="d-flex align-items-center justify-content-center h-50 my-5">
              <img width={28} src={loader} className="me-5" alt="loading..." />
            </div>
          ) : (
            <div className="pe-5">
              {categoryData.map((item, index) => (
                <div
                  onClick={() => navigate(`/FAQs/${item?.Name}/${params.type}`)}
                  className={
                    params?.category === item?.Name
                      ? "active-category rounded-2 fw_500 py-2 px-2 my-3 roboto fs_20 fs_lg_18"
                      : "my-3 py-2 px-2 roboto fs_20 fs_lg_18 cursor_pointer"
                  }
                >
                  {removeUnderScore(item?.Name)}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-lg-9 col-12">{children}</div>
      </div>
    </div>
  );
};

export default FaqLayout;
