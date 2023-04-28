import { Link } from "react-router-dom";

import "../styles/user.css";
import { UserTypes } from "../types/types";

const User = ({
  firstName,
  lastName,
  designation,
  id,
  employed,
}: UserTypes) => {
  return (
    <>
      <article className="card">
        {/* <div className="card-wrapper"> */}
        <Link to={`/addusers/${id}`} className="details">
          <img
            src="https://i.pinimg.com/originals/d7/25/1e/d7251e692ccbbcdad3a8a9d3afeaf8e1.jpg"
            alt=""
            width="150px"
            height="230px"
            className="no-image"
          />

          <h3>First name: {firstName}</h3>
          <h3>Last Name: {lastName}</h3>
          <h3>Designation: {designation}</h3>
          <h3>Employee Status: {employed ? "Employed" : "Not Employed"}</h3>
        </Link>
        {/* </div> */}
      </article>
    </>
  );
};
export default User;
