import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../../assets/images/Comride-logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import menuIcon from "../../../assets/icons/home/menu.svg";
import SideBarComponent from "../sidebar/sidebar";
import axios from "axios";

const Navbar = () => {
  const location = useLocation();
  const activePath = "/" + location.pathname.split("/")[1];
  const naviagte = useNavigate();
  const [sidebarShow, setSidebarShow] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.comride.com/api/home/rider-or-driver-topic-or-faq-help-findall?page_no=0&user_type=Rider`;
    axios
      .get(apiUrl)
      .then((response) => {
        setCategoryData(response?.data?.data?.data);
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navbarItems = [
    {
      name: "Home",
      route: "/",
      path: "/",
    },
    {
      name: "Rider",
      route: "/rider",
      path: "/rider",
    },
    {
      name: "Driver",
      route: "/driver",
      path: "/driver",
    },
    {
      name: "News & Blogs",
      route: "/Blogs-News",
      path: "/Blogs-News",
    },
    {
      name: "FAQs",
      route: `/FAQs/${categoryData?.[0]?.Name}/Rider`,
      path: "/FAQs",
    },
    {
      name: "About Us",
      route: "/about-us",
      path: "/about-us",
    },
    {
      name: "Help & Support",
      route: "/help-support",
      path: "/help-support",
    },
  ];

  return (
    <nav className="navbar-main-container d-flex justify-content-center align-items-center w-100">
      <div className="navbar-sub-container d-flex justify-content-between align-items-center p-1">
        <div onClick={() => naviagte("/")} className="col-">
          <img src={logo} alt="logo" className="navbar-logo" />
        </div>

        <div className="d-none d-lg-block col-9">
          <div className="d-flex aligin-items-center justify-content-between text-nowrap fs_20 fs_xl_18">
            {navbarItems?.map((navItem, index) => (
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                animate="visible"
                whileInView={{
                  opacity: 1,
                  transition: { delay: index * 0.1 },
                }}
                className="ms-xxl-5 ms-xl-4 ps-3 ps-xxl-0"
                key={index}
              >
                <label
                  onClick={() => naviagte(navItem?.route)}
                  className={
                    activePath === navItem?.path
                      ? "navbar-active-item px-1 cursor_pointer"
                      : "px-1 cursor_pointer"
                  }
                >
                  {navItem?.name}
                </label>
              </motion.div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setSidebarShow(true)}
          className="navbar-menu p-1 px-2 rounded-2 mx-3 d-lg-none"
        >
          <img src={menuIcon} height={14} alt="menu" />
        </button>
      </div>
      <SideBarComponent
        categoryData={categoryData}
        show={sidebarShow}
        handleClose={() => setSidebarShow(false)}
      />
    </nav>
  );
};

export default Navbar;
