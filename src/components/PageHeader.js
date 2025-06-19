import "./PageHeader.scss";

const PageHeader = ({ title }) => {
  return (
    <>
      <div className="PageHeader">
        <div className="page-width">
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
