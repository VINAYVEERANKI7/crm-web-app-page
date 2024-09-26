import React, { useEffect, useState } from "react";
import axios from "axios";
import FaqLayout from "../../components/layouts/faq/faq-layout";
import { useNavigate, useParams } from "react-router-dom";
import leftArrow from "../../assets/icons/faq/left-arrow.svg";
import { titleCharacterHidder } from "../../components/helper/helper";
import loader from "../../assets/icons/loader/loader.svg";

const TopicFaqView = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  console.log(params, "params");

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      const apiUrl = `https://api.comride.com/api/home/topic-under-faq-findone`;
      axios
        .post(apiUrl, {
          topic_id: params.topic_id,
          topic_under_faq_id: params.id,
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
  }, [params.id, params.topic_id]);
  return (
    <div className="pb-md-5 px-3">
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
                <label className="fs_20 fw_500 raleway mx-2">
                  {titleCharacterHidder(categoryData?.question_title, 40, 40)}
                </label>
              </button>
            </div>
            <div className="col-xl-9 col-11 mx-auto">
              <div className="py-4">
                <h1 className="fs_24 fs_lg_22 fs_md_20 fs_sm_18 fw_600 raleway">
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

export default TopicFaqView;
