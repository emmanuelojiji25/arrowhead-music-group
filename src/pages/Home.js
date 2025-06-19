import { Link } from "react-router-dom";
import Button from "../components/Components";
import PillarsCarousel from "../components/PillarsCarousel";
import ScrollingBanner from "../components/ScrollingBanner";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="home-billboard">
        <div className="page-width">
          <h1 className="text-xl">
            Welcome to Arrowhead Music Group. We’re shaping the future of
            performance and sound.
          </h1>
        </div>
      </div>

      <div className="the-rise-program">
        <div className="page-width">
          <h2 className="text-l">The Rise Program</h2>
          <p>
            The Ascend Program exists to discover, develop, and elevate
            exceptional artists through strategic mentorship, creative
            investment, and industry insight. We provide the structure,
            resources, and real-world experience to transform raw talent into
            unstoppable momentum.
          </p>

          <Link to="/theriseprogram">
            <Button text="Apply Now" />
          </Link>
        </div>
      </div>

      <div className="scrolling-banner-container">
        <PillarsCarousel />
      </div>
    </div>
  );
};

export default Home;
