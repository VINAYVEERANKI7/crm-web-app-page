import React, { useEffect, useState } from "react";
import axios from "axios";
import FaqLayout from "../../components/layouts/faq/faq-layout";
import { useNavigate, useParams } from "react-router-dom";
import { titleCharacterHidder } from "../../components/helper/helper";
import leftArrow from "../../assets/icons/faq/left-arrow.svg";
import loader from "../../assets/icons/loader/loader.svg";

const FaqView = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  console.log(categoryData, "categoryData");

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      const apiUrl = `https://api.comride.com/api/home/topic-or-faq-findone`;
      axios
        .post(apiUrl, {
          topicOrfaq_id: params.id,
        })
        .then((response) => {
          console.log(response?.data, "response");
          setCategoryData(response?.data?.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error making POST request:", error);
          setLoading(false);
        });
    }
  }, [params.id]);

  return (
    <div className="pb-md-5">
      <FaqLayout>
        {loading ? (
          <div className="d-flex align-items-center justify-content-center h-50 my-5">
            <img width={28} src={loader} alt="loading..." />
          </div>
        ) : (
          <>
            <div className="mx-lg-5">
              <button
                className="border-0 bg-white d-flex align-items-center"
                onClick={() => navigate(-1)}
              >
                <img src={leftArrow} alt="<" />{" "}
                <label className="fs_20 fs_sm_16 fw_500 raleway mx-3">
                  {titleCharacterHidder(categoryData?.question_title, 40, 40)}
                </label>
              </button>
            </div>
            <div className="col-xl-9 col-11 mx-auto">
              <div className="py-4 faq-containner">
                <h1 className="fs_24 fs_lg_22 fs_md_20 fs_sm_18 fw_500">
                  {categoryData?.question_title}
                </h1>
                <p className="roboto fs_sm_14 color_9e9e9e">
                  {categoryData?.question_answer}
                </p>
              </div>
            </div>
          </>
        )}
      </FaqLayout>
    </div>
  );
};

export default FaqView;
