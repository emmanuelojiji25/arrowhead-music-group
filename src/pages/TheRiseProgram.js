import { Popover, PopupButton, Widget } from "@typeform/embed-react";
import PageHeader from "../components/PageHeader";
import PillarsCarousel from "../components/PillarsCarousel";
import "./TheRiseProgram.scss";

const TheRiseProgram = () => {
  return (
    <>
      <PageHeader title="The Rise Program" button={true} />
      <main className="the-rise-program-main">
        <div class="page-width">
          <p className="text-l light">
            The Rise Program exists to discover, develop, and elevate
            exceptional artists through strategic mentorship, creative
            investment, and industry insight. We provide the structure,
            resources, and real-world experience to transform raw talent into
            unstoppable momentum.
          </p>
          <ul className="medium text-l">
            <li>Up to £1500 artist grant</li>
            <li>Artist Management</li>
            <li>Artist Development</li>
            <li>Brand Building</li>
            <li>Personal Development</li>
          </ul>
          <PopupButton
            id="zM1KuFzw"
            style={{ fontSize: 20 }}
            className="my-button"
          >
            click to open form in popup
          </PopupButton>

        </div>
        <PillarsCarousel />
        
      </main>
    </>
  );
};

export default TheRiseProgram;
