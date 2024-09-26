import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./preloader.css";

const Preloader = () => {
  const preloaderRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const content = contentRef.current;
    const body = document.body;

    const animate = () => {
      const timing = 2;
      const tl = gsap.timeline();
      const spans = content.querySelectorAll("span");

      tl.set(body, { overflow: "hidden" });
      tl.set([...spans], { opacity: 0, transform: "translateY(-25px)" });

      spans.forEach((span, index) => {
        let duration = Math.max(0.5, span.innerText.length * 0.16);
        let overlap = index > 0 ? 0.5 : 0;

        tl.to(
          span,
          {
            opacity: 1,
            transform: "translateY(0)",
            duration: duration,
            ease: "circ.out",
          },
          `-=${overlap}`
        );
        tl.to(span, {
          opacity: 0,
          duration: 0.5,
          delay: 0.25,
          ease: "circ.out",
        });
      });

      tl.set(".preloader-inner", {
        borderWidth: "200vw",
        transform: "translate(0) scale(0.5)",
      });
      tl.set(".preloader-circle", { borderWidth: 0 });
      tl.to(".preloader-inner", {
        duration: timing,
        transform: "scale(1)",
        borderWidth: "50vw",
        ease: "circ.out",
      });
      tl.to(
        ".preloader-circle",
        {
          duration: timing,
          borderWidth: "50vw",
          ease: "circ.out",
        },
        `-=${timing}`
      );
      tl.set(".preloader", { display: "none" });
      tl.set(body, { overflow: "auto" });
    };

    animate();

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-inner">
        <span className="preloader-circle"></span>
        <div className="preloader-content" ref={contentRef}></div>
      </div>
    </div>
  );
};

export default Preloader;
