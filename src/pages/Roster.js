import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import "./Roster.scss";

const Roster = () => {
  return (
    <div className="Roster">
      <PageHeader title="Roster" />
      <main>
        <div className="page-width">
          <h1 className="light text-xl">Coming Soon</h1>
          <p className="text-s">
            If you’d like to join Arrowhead Music Group as an artist, please
            apply for <Link to="/theriseprogram">The Rise Program</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Roster;
