import AnimatedBox from "./components/AnimatedBox";
import HoverCard from "./components/HoverCard";
import ScrollAnimation from "./components/ScrollAnimation";

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Cool Animations
      </h1>

      <section>
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
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
