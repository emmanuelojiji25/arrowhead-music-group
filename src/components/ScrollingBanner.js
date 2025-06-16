import { useEffect, useState } from "react";
import "./ScrollingBanner.scss";

const ScrollingBanner = ({ text, direction }) => {
  const [words, setWords] = useState(new Array(50).fill(`${text}`));

  return (
    <div className="ScrollingBanner" style={{ animationDirection: direction }}>
      <div className="words-set">
        {words.map((word, index) => (
          <h1 key={`1-${index}`}>{text}</h1>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
