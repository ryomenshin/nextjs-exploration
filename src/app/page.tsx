"use client";
// import { useEffect, useState } from "react";
import AnimatedBox from "./components/AnimatedBox";
import HoverCard from "./components/HoverCard";
import ScrollAnimation from "./components/ScrollAnimation";
// import SpinnerLoader from "./components/SpinnerLoader";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // // Simulate loading like waiting for a 3D model or 4K image
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // simulate 3 seconds load time

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <SpinnerLoader />;
  // }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Cool Animations
      </h1>

      <section>
        <h2 className="mt-[50px] text-amber-200 text-center">
          3D Rotation Animation
        </h2>
        <AnimatedBox />
      </section>

      <section>
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>Hover Effect</h2>
        <HoverCard />
      </section>

      <section>
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Scroll-Triggered Animation
        </h2>
        <ScrollAnimation />
      </section>
    </div>
  );
}
