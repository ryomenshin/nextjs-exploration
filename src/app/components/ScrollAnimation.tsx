"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  useEffect(() => {
    gsap.to(".scroll-box", {
      scrollTrigger: {
        trigger: ".scroll-box",
        start: "top center", // Start animation when the element hits the center of the viewport
        end: "bottom top",
        scrub: true, // Smoothly animate based on scroll position
      },
      rotationY: 360,
      scale: 0.5,
      opacity: 0,
    });
  }, []);

  return (
    <div
      className="scroll-box"
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "red",
        margin: "200px auto",
        borderRadius: "10px",
      }}
    >
      Scroll Me!
    </div>
  );
};

export default ScrollAnimation;
