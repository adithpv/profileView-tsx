import { Link } from "react-router-dom";
import "../styles/missing.css";

const Missing = () => {
  return (
    <div className="container">
      <main className="missing">
        <img src="" alt="" />
        <h2>Page Not Found</h2>
        <p>Well, that's disappointing</p>
        <p>
          <Link to="/">Visit Our page</Link>
        </p>
      </main>
    </div>
  );
};
export default Missing;
