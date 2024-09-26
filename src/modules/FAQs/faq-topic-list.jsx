import React, { useEffect, useState } from "react";
import axios from "axios";
import sideArrow from "../../assets/icons/faq/faq-list-arrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import FaqLayout from "../../components/layouts/faq/faq-layout";
import leftArrow from "../../assets/icons/faq/left-arrow.svg";
import { removeUnderScore } from "../../components/helper/helper";
import loader from "../../assets/icons/loader/loader.svg";

const FaqTopicList = () => {
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
    <FaqLayout>
      <div className="mx-lg-5 px-3">
        <button
          className="border-0 bg-white d-flex align-items-center"
          onClick={() => navigate(-1)}
        >
          <img src={leftArrow} alt="<" />{" "}
          <label className="fs_20 fw_500 raleway mx-3">
            {removeUnderScore(params.category)}
          </label>
        </button>
      </div>
      {loading ? (
        <div className="text-center my-5">
          <img width={28} src={loader} alt="loading..." />
        </div>
      ) : (
        <div className="col-12 col-lg-8 mx-auto my-4 px-3">
          {categoryData?.map((faqitem, index) => (
            <>
              {params?.category === faqitem?.Name && (
                <>
                  {faqitem?.data?.map((item, index) => (
                    <>
                      {item?.faq_main_type === "Faq" ? (
                        <div
                          onClick={() =>
                            navigate(`/FAQs/${faqitem?.Name}/${item?.id}`)
                          }
                          className="py-3 faq-containner"
                        >
                          <div className="d-flex justify-content-between align-items-start ms-1 cursor_pointer">
                            <h1 className="fs_18 fw_500">
                              {item?.question_title}
                            </h1>
                            <img
                              className="ms-1"
                              src={sideArrow}
                              height={"20px"}
                              alt="->"
                            />
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={() =>
                            navigate(
                              `/FAQs/${faqitem?.Name}/${params.type}/topic/${item?.id}`
                            )
                          }
                          className="py-3 faq-containner"
                        >
                          <div className="d-flex justify-content-between align-items-start ms-1 cursor_pointer">
                            <h1 className="fs_18 fw_500">{item?.title}</h1>
                            <img
                              className="ms-1"
                              src={sideArrow}
                              height={"20px"}
                              alt="->"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </>
              )}
            </>
          ))}
        </div>
      )}
    </FaqLayout>
  );
};

export default FaqTopicList;
