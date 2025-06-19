import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import "./About.scss";
import PillarsCarousel from "../components/PillarsCarousel";

const About = ({ title }) => {
  const [view, setView] = useState(0);

  const nextSlide = () => {
    if (view < 2) {
      setView(view + 1);
      console.log(view);
    }
  };

  const previousSlide = () => {
    if (view > 0) {
      setView(view - 1);
      console.log(view);
    }
  };

  return (
    <div className="About">
      <PageHeader title="About" />

      <div className="about-carousel">
        <div
          className="about-carousel-inner text-l"
          style={{ transform: `translateX(-${view * 100}%)` }}
        >
          <div className="slide-1 slide">
            <div className="content page-width">
              The Rise Program exists to discover, develop, and elevate
              exceptional artists through strategic mentorship, creative
              investment, and industry insight. We provide the structure,
              resources, and real-world experience to transform raw talent into
              unstoppable momentum.
            </div>
          </div>
          <div className="slide-2 slide">
            <div className="content page-width">second slide</div>
          </div>
          <div className="slide-3 slide">
            <div className="content page-width">third slide</div>
          </div>
        </div>
        <div className="arrows page-width">
          <h1 onClick={() => previousSlide()}>{`<<<<<<<<`}</h1>
          <h1 onClick={() => nextSlide()}>{`>>>>>>>>`}</h1>
        </div>
      </div>
      <PillarsCarousel />
    </div>
  );
};

export default About;
