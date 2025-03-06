"use client";
import { useEffect } from "react";
import gsap from "gsap";

const AnimatedBox = () => {
  useEffect(() => {
    gsap.to(".box", {
      duration: 2,
      rotationY: 360,
      rotationX: 180,
      scale: 1.5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      style={{
        perspective: "800px",
        width: "200px",
        height: "200px",
        margin: "100px auto",
      }}
    >
      <div
        className="box"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "blue",
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
};

export default AnimatedBox;
