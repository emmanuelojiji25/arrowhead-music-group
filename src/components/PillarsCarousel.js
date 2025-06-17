import "./PillarsCarousel.scss";
import ScrollingBanner from "./ScrollingBanner";

const PillarsCarousel = () => {
  return (
    <>
      <ScrollingBanner text="Quality" />
      <ScrollingBanner text="Direction" direction="reverse" even={true} />
      <ScrollingBanner text="Innovation" />
      <ScrollingBanner text="Power" direction="reverse" even={true} />
    </>
  );
};

export default PillarsCarousel;
