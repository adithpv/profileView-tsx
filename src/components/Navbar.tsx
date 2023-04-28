import { ChangeEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { HiOutlinePlus } from "react-icons/hi";
import "../styles/navbar.css";

interface NavbarProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Navbar = ({ handleSearch }: NavbarProps) => {
  const { search } = useContext(UserContext);

  return (
    <nav className="nav">
      <div className="container">
        <section className="nav-wrapper">
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search Users</label>
            <input
              type="text"
              id="search"
              placeholder="Search Users"
              value={search}
              onChange={handleSearch}
            />
          </form>
          <ul className="nav-links">
            <li>
              <Link to="/addusers">
                <button className="addBtn">
                  Add users <HiOutlinePlus />
                </button>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};
export default Navbar;
