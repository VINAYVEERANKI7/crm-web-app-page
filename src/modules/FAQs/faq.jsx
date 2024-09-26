import React, { useEffect, useRef, useState } from "react";
import "./faq.css";
import axios from "axios";
import sideArrow from "../../assets/icons/faq/faq-list-arrow.svg";
import loader from "../../assets/icons/loader/loader.svg";
import { useNavigate, useParams } from "react-router-dom";
import FaqLayout from "../../components/layouts/faq/faq-layout";
import { removeUnderScore } from "../../components/helper/helper";

const Faq = () => {
  const navigate = useNavigate();
  const params = useParams();
  const accordionRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(null);

  const [activeBtn, setActiveBtn] = useState("Rider");
  const [categoryData, setCategoryData] = useState([]);
  console.log(params, "params");

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
    <div className="pb-md-5">
      <FaqLayout>
        <div className="d-none d-lg-block h-100">
          {/* <div className="mx-lg-5">
            <button
              className="border-0 bg-white d-flex align-items-center"
              onClick={() => navigate(-1)}
            >
              <img src={leftArrow} alt="<" />{" "}
              <label className="fs_20 fw_500 raleway mx-3">
                {removeUnderScore(params.category)}
              </label>
            </button>
          </div> */}
          {loading ? (
            <div className="d-flex align-items-center justify-content-center h-50 my-5">
              <img width={28} src={loader} alt="loading..." />
            </div>
          ) : (
            <div className="col-xl-9 col-11 mx-auto">
              {categoryData?.map((faqitem, index) => (
                <>
                  {params?.category === faqitem?.Name && (
                    <>
                      {faqitem?.data?.map((item, index) => (
                        <>
                          {item?.faq_main_type === "Faq" ? (
                            <div
                              onClick={() =>
                                navigate(
                                  `/FAQs/${faqitem?.Name}/${params.type}/${item?.id}`
                                )
                              }
                              className="py-4 faq-containner"
                            >
                              <div className="d-flex justify-content-between align-items-start ms-1 cursor_pointer">
                                <h1 className="fs_24 fs_lg_22 fw_500">
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
                          ) : (
                            <div
                              onClick={() =>
                                navigate(
                                  `/FAQs/${faqitem?.Name}/${params.type}/topic/${item?.id}`
                                )
                              }
                              className="py-4 faq-containner"
                            >
                              <div className="d-flex justify-content-between align-items-start ms-1 cursor_pointer">
                                <h1 className="fs_24 fs_lg_22 fw_500">
                                  {item?.title}
                                </h1>
                                <img
                                  className="mt-1 ms-1"
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
        </div>
        {/* ----------------------------- MOBILE VIEW ----------------------------- */}
        <div className="d-lg-none">
          <div className="col-md-6 col-12 mx-sm-auto px-2">
            <h6 className="fs_28 fw_500">Categories</h6>
            {loading ? (
              <div className="text-center my-5">
                <img width={28} src={loader} alt="loading..." />
              </div>
            ) : (
              <div>
                {categoryData.map((item, index) => (
                  <div
                    onClick={() =>
                      navigate(`/FAQs/${item?.Name}/${params.type}/topic`)
                    }
                    className={
                      "my-3 py-2 px-2 roboto fs_20 fs_lg_18 cursor_pointer d-flex justify-content-between"
                    }
                  >
                    {removeUnderScore(item?.Name)}{" "}
                    <img
                      className="mt-1 ms-1"
                      src={sideArrow}
                      height={"20px"}
                      alt="->"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </FaqLayout>
    </div>
  );
};

export default Faq;
