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
      <main>
        <div className="page-width">
          <h1 className="text-l light">
            Arrowhead Music Group is a multidiscplinary entertainment company
            founded with the intent to produce high quality musical projects.
          </h1>
        </div>
      </main>

      {/* <div className="about-carousel">
        <div
          className="about-carousel-inner text-l light"
          style={{ transform: `translateX(-${view * 100}%)` }}
        >
          <div className="slide-1 slide">
            <div className="content page-width">
              Arrowhead Music Group is a multidiscplinary entertainment company
              founded with the intent to produce high quality musical projects.
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
      </div>*/}
      <PillarsCarousel />
    </div>
  );
};

export default About;
