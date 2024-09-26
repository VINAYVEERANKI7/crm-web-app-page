import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./blog.css";
import search from "../../assets/icons/blog/search.svg";
import arrow from "../../assets/icons/blog/arrow-small-right.svg";
import {
  CharacterHidder,
  titleCharacterHidder,
} from "../../components/helper/helper";
import { useNavigate } from "react-router-dom";
import loader from "../../assets/icons/loader/loader.svg";

const BlogNews = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeBtn, setActiveBtn] = useState("Blog");
  const [latestData, setLatestData] = useState({});
  const [blogsListData, setBlogsListData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTitles, setFilteredTitles] = useState([]);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      const apiUrl = `https://api.comride.com/api/home/blog-news-list?category_type=${activeBtn}&page_no=0`;
      axios
        .get(apiUrl)
        .then((response) => {
          console.log(response.data?.data);
          setLatestData(response?.data?.data?.data?.fetchLatestOne);
          setBlogsListData(response?.data?.data?.data?.fetchList);
          setFilteredTitles(response?.data?.data?.data?.fetchList);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error making POST request:", error);
          setLoading(false);
        });
    }
  }, [activeBtn]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = blogsListData.filter((title) =>
      title.title?.toLowerCase().includes(term)
    );
    setFilteredTitles(filtered);
  };
  return (
    <div className="px-md-5 px-4 mx-auto my-sm-5 my-3">
      <div
        className="faq-btn rounded-4 fs_24 fw_600 raleway"
        style={{ width: "fit-content" }}
      >
        <button
          onClick={() => setActiveBtn("Blog")}
          className={
            activeBtn === "Blog"
              ? "secondary_bg border-0 text-white px-5 py-2 rounded-3 fs_24 fs_lg_22 fs_sm_16 fw_600"
              : "border-0 px-5 py-2 rounded-3 fs_24 fs_lg_22 fs_sm_16 fw_600"
          }
        >
          Blogs
        </button>
        <button
          onClick={() => setActiveBtn("News")}
          className={
            activeBtn === "News"
              ? "secondary_bg border-0 text-white px-5 py-2 rounded-3 fs_24 fs_lg_22 fs_sm_16 fw_600"
              : "border-0 px-5 py-2 rounded-3 fs_24 fs_lg_22 fs_sm_16 fw_600"
          }
        >
          News
        </button>
      </div>
      {/* <div className="blog-search-container col-lg-5 col-sm-8 col-12 px-sm-4 px-2 py-2 my-4 rounded-3 d-flex align-items-center">
        <img src={search} alt="search" />
        <input
          value={searchTerm}
          onChange={handleSearch}
          className="mx-3 w-100 blog-input-container fs_18 fs_md_16 fs_sm_14 roboto"
          type="text"
          placeholder="Search news & blogs here"
        />
      </div> */}
      {loading ? (
        <div className="blog-loader-container my-5 d-flex justify-content-center align-items-center">
          <img width={"64px"} src={loader} alt="loading..." />
        </div>
      ) : (
        <>
          <div className="raleway all-blogs-container mx-auto my-5 d-none d-lg-block">
            <h1 className="fs_32 fs_sm_24 fw_700">Latest</h1>
            <div
              onClick={() =>
                navigate(`/Blogs-News-view/${latestData?.id}/${activeBtn}`)
              }
            >
              <h6 className="fs_18 fw_600 raleway mt-sm-4 mt-3 d-block d-md-none">
                {/* mobile view title */}
                {titleCharacterHidder(latestData?.title, 60)}
              </h6>
              <div className="d-sm-flex my-4">
                <img
                  className=" rounded-4 blog-latestimage-container"
                  src={latestData?.image}
                  alt="blog-image"
                />
                <div className="mx-xl-5 mx-sm-3 my-4">
                  <label className="blog-date-container roboto px-2 pe-3 py-1 fs_14">
                    {moment(latestData?.created_at).format("DD, MMM YYYY")}
                  </label>
                  <>
                    {/*----------------- Title ----------- */}
                    <h6 className="fs_24 fs_lg_20 fw_600 raleway mt-3 d-none d-xxl-block">
                      {titleCharacterHidder(latestData?.title, 105)}
                    </h6>
                    <h6 className="fs_24 fw_600 raleway mt-3 d-none d-xl-block d-xxl-none">
                      {titleCharacterHidder(latestData?.title, 70)}
                    </h6>
                    <h6 className="fs_22 fw_600 raleway mt-3 d-none d-lg-block d-xl-none">
                      {titleCharacterHidder(latestData?.title, 70)}
                    </h6>
                    <h6 className="fs_20 fw_600 raleway mt-3 d-none d-md-block d-lg-none">
                      {titleCharacterHidder(latestData?.title, 40)}
                    </h6>
                  </>
                  <>
                    <p className="roboto color_727272 mt-3 d-none d-xxl-block">
                      {CharacterHidder(latestData?.summary, 340)}
                    </p>
                    <p className="roboto color_727272 mt-3 d-none d-xl-block d-xxl-none">
                      {CharacterHidder(latestData?.summary, 280)}
                    </p>
                    <p className="roboto color_727272 mt-3 d-none d-lg-block d-xl-none">
                      {CharacterHidder(latestData?.summary, 230)}
                    </p>
                    <p className="roboto color_727272 mt-3 d-none d-md-block d-lg-none">
                      {CharacterHidder(latestData?.summary, 150)}
                    </p>
                    <p className="roboto color_727272 mt-3 d-md-none">
                      {CharacterHidder(latestData?.summary, 100)}
                    </p>
                  </>

                  <button
                    onClick={() =>
                      navigate(
                        `/Blogs-News-view/${latestData?.id}/${activeBtn}`
                      )
                    }
                    className="border-0 primary_bg fs_20 fs_md_16 fs_sm_014 px-4 py-2 rounded-3 fw_600 roboto text-white mt-xxl-4"
                  >
                    Learn More{" "}
                    <img className="mb-1 ms-1" src={arrow} alt="->" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="raleway all-blogs-container w-100 mx-auto my-5">
            <h1 className="fs_32 fs_sm_24 fw_700  d-none d-lg-block">
              All Blogs
            </h1>
            <div className="d-xl-flex flex-wrap">
              {filteredTitles?.map((item, index) => (
                <div
                  onClick={() =>
                    navigate(`/Blogs-News-view/${item?.id}/${activeBtn}`)
                  }
                  key={index}
                  className="col-xl-6 d-sm-flex my-4 blog-card-container p-1 px-3 rounded-4"
                >
                  <h6 className="fs_20 fs_lg_18 fw_600 raleway mt-3 col-lg-11 d-sm-none">
                    {titleCharacterHidder(item?.title, 50, 40)}
                  </h6>
                  <label className="roboto fs_12 pb-2 d-sm-none">
                    {moment(item?.created_at).format("DD, MMM YYYY")}
                  </label>
                  <img
                    className=" rounded-4 blog-list-image-container"
                    src={item?.image}
                    alt="blog-image"
                  />
                  <div className="mx-lg-4 mx-sm-3  my-sm-4 my-3">
                    <div className="d-none d-sm-block">
                      <label className="blog-date-container roboto px-2 pe-3 py-1 fs_12 ">
                        {moment(item?.created_at).format("DD, MMM YYYY")}
                      </label>
                    </div>

                    <h6 className="fs_20 fs_lg_18 fw_600 raleway mt-3 col-lg-11 d-none d-sm-block">
                      {titleCharacterHidder(item?.title, 52, 40)}
                    </h6>
                    <p className="roboto fs_lg_14 color_727272 d-none d-lg-block col-lg-11">
                      {CharacterHidder(item?.summary, 65, 40)}
                    </p>
                    <p className="roboto fs_lg_14 color_727272 col-lg-11 d-lg-none">
                      {CharacterHidder(item?.summary, 50, 40)}
                    </p>
                    <button
                      onClick={() =>
                        navigate(`/Blogs-News-view/${item?.id}/${activeBtn}`)
                      }
                      className="border-0 primary_bg fs_18 fs_md_16 px-4 py-2 rounded-3 fw_500 roboto text-white mt-2"
                    >
                      Learn More{" "}
                      <img className="mb-1 ms-1" src={arrow} alt="->" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogNews;
