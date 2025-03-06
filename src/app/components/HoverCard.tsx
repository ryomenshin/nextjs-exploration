"use client";
import { useEffect } from "react";
import gsap from "gsap";

const HoverCard = () => {
  useEffect(() => {
    gsap.set(".card", { scale: 1 }); // Initial state

    const card = document.querySelector(".card");
    if (card) {
      card.addEventListener("mouseenter", () => {
        gsap.to(".card", {
          duration: 0.3,
          scale: 1.1,
          backgroundColor: "#ff6f61",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(".card", {
          duration: 0.3,
          scale: 1,
          backgroundColor: "#6c63ff",
        });
      });
    }
  }, []);

  return (
    <div
      className="card"
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "#6c63ff",
        margin: "100px auto",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <div className="text-center">Hover Me</div>
    </div>
  );
};

export default HoverCard;
