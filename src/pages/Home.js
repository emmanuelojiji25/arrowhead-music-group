import Button from "../components/Components";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="home-billboard">
        <div className="page-width">
          <h1>
            Welcome to Arrowhead Music Group. We’re shaping the future of
            performance and sound.
          </h1>
        </div>
      </div>

      <div className="the-rise-program">
        <div className="page-width">
          <h2>The Rise Program</h2>
          <p>
            The Ascend Program exists to discover, develop, and elevate
            exceptional artists through strategic mentorship, creative
            investment, and industry insight. We provide the structure,
            resources, and real-world experience to transform raw talent into
            unstoppable momentum.
          </p>

          <Button text="testtttt" />
        </div>
      </div>
    </div>
  );
};

export default Home;
