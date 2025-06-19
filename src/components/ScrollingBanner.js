import { useEffect, useState } from "react";
import "./ScrollingBanner.scss";

const ScrollingBanner = ({ text, direction, even }) => {
  const [words, setWords] = useState(new Array(50).fill(`${text}`));

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div
      className="ScrollingBanner"
      onClick={() => setIsAccordionOpen(!isAccordionOpen)}
    >
      <div
        className="carousel"
        style={{
          animationDirection: direction,
          background: even && "#30CD99",
        }}
      >
        <div className="words-set text-l">
          {words.map((word, index) => (
            <h1 key={`1-${index}`}>{text}</h1>
          ))}
        </div>
      </div>

      <div className="accordion">
        {isAccordionOpen && <h1>Info here hey</h1>}
      </div>
    </div>
  );
};

export default ScrollingBanner;
