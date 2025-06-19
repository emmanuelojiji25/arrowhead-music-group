import Button from "./Button";
import "./PageHeader.scss";

const PageHeader = ({ title }) => {
  return (
    <>
      <div className="PageHeader">
        <div className="page-width">
          <h1 className="text-l">{title}</h1>
          <Button text="Apply" style="btn-light" />
        </div>
      </div>
    </>
  );
};

export default PageHeader;
