import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import "../styles/newUser.css";

const NewUser = ({}) => {
  const {
    users,
    setUsers,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    designation,
    setDesignation,
    employed,
    setEmployed,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const handleCheck = () => {
    setEmployed(!employed);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = users.length ? users[users.length - 1].id + 1 : 1;

    const newUser = {
      id,
      firstName,
      designation,
      lastName,
      employed,
    };
    const allUser = [...users, newUser];
    setUsers(allUser);
    localStorage.setItem("userAllDetails", JSON.stringify(allUser));
    setFirstName("");
    setLastName("");
    setDesignation("");
    setEmployed(false);
    navigate("/");
    console.log(allUser);
  };

  return (
    <div className="container">
      <main className="newPost">
        <h1>Add users</h1>
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="usersName">Name</label>
          <input
            id="usersName"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Jhon"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
          />
          <label htmlFor="designation">Designation</label>
          <input
            id="designation"
            type="text"
            required
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Software Engineer"
          />
          <div className="checkbox-container">
            <label htmlFor="employStatus" className="employ-checkbox">
              Employ Status
            </label>
            <input
              type="checkbox"
              name="employed"
              id="employStatus"
              onChange={handleCheck}
            />
            {employed ? (
              <p className="status">Employed</p>
            ) : (
              <p className="status"> Not Employed</p>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};
export default NewUser;
