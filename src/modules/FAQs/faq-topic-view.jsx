import React, { useEffect, useState } from "react";
import axios from "axios";
import FaqLayout from "../../components/layouts/faq/faq-layout";
import { useNavigate, useParams } from "react-router-dom";
import sideArrow from "../../assets/icons/faq/faq-list-arrow.svg";
import leftArrow from "../../assets/icons/faq/left-arrow.svg";
import loader from "../../assets/icons/loader/loader.svg";

const FaqTopicView = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      const apiUrl = `https://api.comride.com/api/home/rider-or-driver-topic-under-faq-findall?page_no=0`;
      axios
        .post(apiUrl, {
          topic_id: params.id,
          user_type: params?.type,
        })
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
  }, [params?.type, params.id]);
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
                <label className="fs_20 fs_sm_16 fw_500 raleway mx-2">
                  {categoryData?.title}
                </label>
              </button>
            </div>
            <div className="col-xl-9 col-11 mx-auto">
              {categoryData?.faq_issues?.map((item, index) => (
                <div
                  onClick={() =>
                    navigate(
                      `/FAQs/${categoryData?.faq_help_inner_type}/${params?.type}/${categoryData?.id}/${item?.id}`
                    )
                  }
                  className="py-4 faq-containner"
                >
                  <div className="d-flex justify-content-between align-items-start ms-1 cursor_pointer">
                    <h1 className="fs_24 fs_lg_22 fs_md_20 fs_sm_18 fw_500">
                      {item?.question_title}
                    </h1>
                    <img
                      className="mt-1 ms-1"
                      src={sideArrow}
                      height={"20px"}
                      alt="->"
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </FaqLayout>
    </div>
  );
};

export default FaqTopicView;
