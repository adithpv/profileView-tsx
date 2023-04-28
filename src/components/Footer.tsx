import "../styles/footer.css";
import { SlUser } from "react-icons/sl";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="footer">
      <div className="container">
        <section className="footer-section-1">
          <div className="footer-logo">
            <span>
              <SlUser />
            </span>
            <h2>PROFILE VIEW</h2>
          </div>

          <div className="footer-links">
            <ul className="footer-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </section>
        <div className="copyright-section">
          <p>PROFILEVIEW &copy; 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
