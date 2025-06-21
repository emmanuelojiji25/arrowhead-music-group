import { PopupButton } from "@typeform/embed-react";
import Button from "./Button";
import "./PageHeader.scss";

const PageHeader = ({ title, button }) => {
  return (
    <>
      <div className="PageHeader">
        <div className="page-width">
          <h1 className="text-l medium">{title}</h1>

          {button && (
            <PopupButton id="zM1KuFzw" className="Button btn-light">
              Apply Now
            </PopupButton>
          )}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
