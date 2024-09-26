import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import arrow from "../../assets/icons/blog/arrow-small-right.svg";
import loader from "../../assets/icons/loader/loader.svg";
import "./blog.css";

const BlogNewsView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [blogNewsData, setBlogNewsData] = useState({});

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      const apiUrl = `https://api.comride.com/api/home/find-one-news-list?category_type=${params.type}&id=${params.id}`;
      axios
        .get(apiUrl)
        .then((response) => {
          console.log(response.data?.data);
          setBlogNewsData(response?.data?.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error making POST request:", error);
          setLoading(false);
        });
    }
  }, []);
  return (
    <>
      {loading ? (
        <div className="blog-loader-container my-5 d-flex justify-content-center align-items-center">
          <img width={"64px"} src={loader} alt="loading..." />
        </div>
      ) : (
        <div
          className="mb-md-5 pb-sm-5 d-lg-flex align-items-start w-100 mx-auto"
          style={{ maxWidth: "90rem" }}
        >
          <div className="mx-xl-5 mx-sm-4 mx-3 mt-3">
            <button
              onClick={() => navigate(-1)}
              className="px-sm-3 px-2 pe-sm-4 pe-3 py-sm-2 py-1 primary_bg rounded-5 fs_sm_12 text-white text-nowrap fw_500"
            >
              <img className="blog-back-arrow mb-1" src={arrow} alt="<-" /> Back
            </button>
          </div>
          <div>
            <div className="col-11 mx-auto d-flex align-items-center">
              <div className="col-sm-11">
                <h6 className="fs_32 fs_lg_28 fs_sm_18 fw_600 raleway mt-3 text-capitalize">
                  {blogNewsData?.title}
                </h6>
              </div>
            </div>

            <div className="col-11 mx-auto">
              <label className="fs_sm_14 roboto fw_500 py-1">
                {moment(blogNewsData?.createdAt).format("DD, MMM YYYY")}
              </label>
            </div>
            <div className="d-flex justify-content-center my-sm-5 my-3 col-11 mx-auto px-sm-4">
              <img
                src={blogNewsData?.image}
                alt="blog-image"
                className="blog-view-image rounded-3"
              />
            </div>
            <div className="col-11 mx-auto px-md-4 mb-5">
              <p
                style={{ textAlign: "justify", textJustify: "inter-word" }}
                className="roboto color_727272 fs_24 fs_lg_20 fs_sm_16"
              >
                {blogNewsData?.summary}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogNewsView;
