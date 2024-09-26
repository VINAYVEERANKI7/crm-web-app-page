import React, { useEffect } from "react";
import "./sidebar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import closeIcon from "../../../assets/icons/home/close.svg";
import { useLocation, useNavigate } from "react-router-dom";

const SideBarComponent = ({ show, handleClose, categoryData }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const sidebarList = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Rider",
      route: "/rider",
    },
    {
      name: "Driver",
      route: "/driver",
    },
    {
      name: "News & Blogs",
      route: "/Blogs-News",
    },
    {
      name: "FAQs",
      route: `/FAQs/${categoryData?.[0]?.Name}/Rider`,
    },
    {
      name: "About Us",
      route: "/about-us",
    },
    {
      name: "Help & Support",
      route: "/help-support",
    },
  ];

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      className="sidebar-layout p-1 d-md-none"
      responsive="xl"
      placement="end"
      closeButton={true}
    >
      <Offcanvas.Header closeButton> </Offcanvas.Header>
      {/* <button
        onClick={handleClose}
        className="position-absolute close-btn m-1 p-1 rounded-2"
      >
        <img src={closeIcon} height={28} alt="close" />
      </button> */}
      <section className="sidebar-main-container h-100 p-4">
        <div className="text-center d-flex flex-column">
          {sidebarList?.map((item, index) => (
            <button
              onClick={() => {
                navigate(item?.route);
                handleClose();
              }}
              key={index}
              className={
                location.pathname === item?.route
                  ? "primary_bg text-white hero-button fw_600 raleway rounded-2 text-center w-100 mx-auto p-2 my-2"
                  : "hero-button raleway rounded-2 text-center w-100 mx-auto p-2 my-2"
              }
            >
              {item?.name}
            </button>
          ))}
        </div>
      </section>
    </Offcanvas>
  );
};

export default SideBarComponent;
