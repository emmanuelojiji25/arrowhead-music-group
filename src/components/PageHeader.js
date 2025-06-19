import Button from "./Button";
import "./PageHeader.scss";

const PageHeader = ({ title, button }) => {
  return (
    <>
      <div className="PageHeader">
        <div className="page-width">
          <h1 className="text-l medium">{title}</h1>
          {button && <Button text="Apply" style="btn-light" />}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
