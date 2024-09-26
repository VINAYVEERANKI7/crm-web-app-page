import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import RightArrowIcon from "../../assets/icons/home/right-arrow-icon";
import { CharacterHidder, titleCharacterHidder } from "../helper/helper";
import arrowRight from "../../assets/icons/home/arrow-right.svg";
import loader from "../../assets/icons/loader/loader.svg";
import "./home-component.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const HomeBlogSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [latestData, setLatestData] = useState({});
  const [blogsListData, setBlogsListData] = useState([]);
  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      const apiUrl = `https://api.comride.com/api/home/blog-news-list?category_type=Blog&page_no=0`;
      axios
        .get(apiUrl)
        .then((response) => {
          console.log(response.data?.data);
          setLatestData(response?.data?.data?.data?.fetchLatestOne);
          setBlogsListData(response?.data?.data?.data?.fetchList);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error making POST request:", error);
          setLoading(false);
        });
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home-blog-main-container my-5">
      <div className="text-center">
        <div className="">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="travel-heading py-2"
          >
            Blogs & News
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-lg-auto fs_16 fs_sm_14 col-lg-7 mx-3 color_9e9e9e"
          >
            Stay in the loop! Explore our blog and news section for the latest
            updates on our taxi service. Get insights on safety initiatives,
            special offers, and helpful tips for a smooth ride with us. Visit
            our website or follow us on social media to stay connected!
          </motion.p>
        </div>
      </div>

      {loading ? (
        <div className="blog-loader-container my-5 d-flex justify-content-center align-items-center">
          <img width={"64px"} src={loader} alt="loading..." />
        </div>
      ) : (
        <>
          <div className="d-none d-md-block mx-auto home-blog-sub-container">
            <div className="d-lg-flex align-items-center gap-5 mt-5 pt-md-4">
              <div className="home-blog-main-card rounded-4 p-2 d-none d-xxl-block">
                <img
                  className="w-100 rounded-4 blog-main-image"
                  src={latestData?.image}
                  alt="blog"
                />
                <div
                  className="d-flex flex-column justify-content-between"
                  style={{ height: "14rem" }}
                >
                  <div className="my-4">
                    <h6 className="fw_600 fs_22">
                      {titleCharacterHidder(latestData?.title, 95)}
                    </h6>
                    <p className="travel-sub-text">
                      {CharacterHidder(latestData?.summary, 145)}
                    </p>
                  </div>
                  <div className="text-end mx-3">
                    <button className="blog-read-btn rounded-4 px-4 pt-1 bg-white fs_20">
                      Read{" "}
                      <label className="mb-1">
                        {" "}
                        <RightArrowIcon fill="black" height="18" />
                      </label>
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gap-5">
                <div className="d-none d-md-block d-xxl-none">
                  <div
                    onClick={() =>
                      navigate(`/Blogs-News-view/${latestData?.id}/Blog`)
                    }
                    className="home-blog-card rounded-4 p-2 d-flex align-items-start mx-auto mx-xxl-0"
                  >
                    <div>
                      <img
                        className="blog-small-image rounded-4"
                        src={latestData?.image}
                        alt="blog"
                      />
                    </div>
                    <div className="px-3 d-flex flex-column justify-content-between h-100">
                      <div>
                        <h6 className="fw_600 fs_22">
                          {titleCharacterHidder(latestData?.title, 65, 65)}
                        </h6>
                        <p className="travel-sub-text">
                          {CharacterHidder(latestData?.summary, 160)}
                        </p>
                      </div>
                      <div className="text-end py-2">
                        <button className="blog-read-btn rounded-4 px-4 pt-1 bg-white fs_20">
                          Read{" "}
                          <label className="mb-1">
                            {" "}
                            <RightArrowIcon fill="black" height="18" />
                          </label>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() =>
                    navigate(`/Blogs-News-view/${blogsListData?.[1]?.id}/Blog`)
                  }
                  className="home-blog-card  rounded-4 p-2 d-flex align-items-start  mx-auto  mx-xxl-0"
                >
                  <div>
                    <img
                      className="blog-small-image rounded-4"
                      src={blogsListData?.[1]?.image}
                      alt="blog"
                    />
                  </div>
                  <div className="px-3 d-flex flex-column justify-content-between h-100  mx-xl-0">
                    <div>
                      <h6 className="fw_600 fs_22">
                        {titleCharacterHidder(
                          blogsListData?.[1]?.title,
                          65,
                          65
                        )}
                      </h6>
                      <p className="travel-sub-text">
                        {CharacterHidder(blogsListData?.[1]?.summary, 160)}
                      </p>
                    </div>
                    <div className="text-end py-2">
                      <button className="blog-read-btn rounded-4 px-4 pt-1 bg-white fs_20">
                        Read{" "}
                        <label className="mb-1">
                          {" "}
                          <RightArrowIcon fill="black" height="18" />
                        </label>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() =>
                    navigate(`/Blogs-News-view/${blogsListData?.[2]?.id}/Blog`)
                  }
                  className="home-blog-card rounded-4 p-2 d-flex align-items-start  mx-auto"
                >
                  <div>
                    <img
                      className="blog-small-image"
                      src={blogsListData?.[2]?.image}
                      alt="blog"
                    />
                  </div>
                  <div className="px-3 d-flex flex-column justify-content-between h-100">
                    <div>
                      <h6 className="fw_600 fs_22">
                        {titleCharacterHidder(
                          blogsListData?.[2]?.title,
                          65,
                          65
                        )}
                      </h6>
                      <p className="travel-sub-text">
                        {CharacterHidder(blogsListData?.[2]?.summary, 160)}
                      </p>
                    </div>
                    <div className="text-end py-2">
                      <button className="blog-read-btn rounded-4 px-4 pt-1 bg-white fs_20">
                        Read{" "}
                        <label className="mb-1">
                          {" "}
                          <RightArrowIcon fill="black" height="18" />
                        </label>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end mx-5 my-5 mx-xxl-0">
              <button
                onClick={() => navigate("/Blogs-News")}
                className="blog-viewmore-btn px-4 py-3 rounded-4 border-0 text-white fw_600 fs_22"
              >
                View More Articles{" "}
                <img className="mb-1 ms-2" src={arrowRight} alt="arrow" />
              </button>
            </div>
          </div>
          <div
            style={{ width: "86%" }}
            className="mx-auto h-100 my-5 d-md-none"
          >
            <Slider {...settings}>
              {blogsListData?.map((item, index) => (
                <div
                  onClick={() => navigate(`/Blogs-News-view/${item?.id}/Blog`)}
                  key={index}
                  className="home-blog-card-res mx-auto my-3 rounded-4 p-2 d-flex flex-column align-items-start"
                >
                  <div className="w-100">
                    <img
                      className="blog-small-image-slider rounded-3"
                      src={item?.image}
                      alt="blog"
                    />
                  </div>
                  <div className="py-2 d-flex flex-column justify-content-between h-100">
                    <div className="mt-3">
                      <h6 className="fw_600 fs_16">
                        {titleCharacterHidder(item?.title, 55, 60)}
                      </h6>
                      <p className="travel-sub-text fs_14">
                        {CharacterHidder(item?.summary, 125, 130)}
                      </p>
                    </div>
                    <div className="text-end py-2">
                      <button className="blog-read-btn rounded-4 px-4 pt-1 bg-white fs_16">
                        Read{" "}
                        <label className="mb-1">
                          {" "}
                          <RightArrowIcon fill="black" height="18" />
                        </label>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="text-end my-5 mx-xxl-0">
              <button
                onClick={() => navigate("/Blogs-News")}
                className="blog-viewmore-btn px-3 py-2 rounded-3 border-0 text-white fw_600 fs_14"
              >
                View More Articles{" "}
                <img
                  className=" ms-2"
                  height={14}
                  src={arrowRight}
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeBlogSection;
