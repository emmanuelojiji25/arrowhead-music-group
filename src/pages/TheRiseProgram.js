import PillarsCarousel from "../components/PillarsCarousel";
import "./TheRiseProgram.scss";

const TheRiseProgram = () => {
  return (
    <>
      <div className="apply-header">
        <div class="page-width">
          <h1>The Rise Program</h1>
        </div>
      </div>
      <main className="the-rise-program-main">
        <div class="page-width">
          <h2>
            The Rise Program exists to discover, develop, and elevate
            exceptional artists through strategic mentorship, creative
            investment, and industry insight. We provide the structure,
            resources, and real-world experience to transform raw talent into
            unstoppable momentum.
          </h2>
        </div>
        <PillarsCarousel/>
      </main>
    </>
  );
};

export default TheRiseProgram;
