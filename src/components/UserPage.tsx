import "../styles/userPage.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { BsTwitter, BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";

const UserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const post = users.find((post) => post.id.toString() === id);
  console.log(post);

  const handleDelete = (id: string | number) => {
    const usersList = users.filter((post) => post.id !== id);
    console.log(users);
    setUsers(usersList);
    localStorage.setItem("userAllDetails", JSON.stringify(usersList));
    navigate("/");
  };
  return (
    <div className="container">
      <main className="userPage">
        <article className="userContent">
          {post && (
            <>
              <img
                src="https://i.pinimg.com/originals/d7/25/1e/d7251e692ccbbcdad3a8a9d3afeaf8e1.jpg"
                alt=""
                width="190px"
                height="180px"
                className="user-details-img"
              />
              <div className="userName">
                <h2>
                  {post.firstName} {post.lastName}
                </h2>
                <p>{post.designation}</p>
              </div>
              <div className="projectDetails">
                <div className="userProject">
                  <div className="projects">
                    <h3>Projects</h3>
                    <p>11</p>
                  </div>
                  <div className="following">
                    <h3>Following</h3>
                    <p>250</p>
                  </div>
                  <div className="followers">
                    <h3>Followers</h3>
                    <p>185</p>
                  </div>
                </div>
                <p className="aboutUser">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, quis. Eveniet commodi soluta sunt consequuntur.
                </p>
              </div>
              <div className="socials">
                <BsWhatsapp className="socials-whatsapp" />
                <BsFacebook className="socials-facebook" />
                <BsInstagram className="socials-instagram" />
                <BsTwitter className="socials-twitter" />
              </div>
              <div className="deltBtn">
                <button onClick={() => handleDelete(post.id)}>Delete</button>
                <button onClick={() => handleDelete(post.id)}>Edit</button>
              </div>
            </>
          )}
          {!post && (
            <>
              <h2>Post Not Found</h2>
              <p>Well, Thats disappointing.</p>
              <p>
                <Link to="/">Visit Home Page</Link>
              </p>
            </>
          )}
        </article>
      </main>
    </div>
  );
};
export default UserPage;
