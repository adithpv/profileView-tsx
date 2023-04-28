import User from "./User";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import "../styles/home.css";

const Home = () => {
  const { users, searchResults } = useContext(UserContext);
  console.log(users);
  return (
    <div className="container">
      <main className="home">
        {searchResults.length ? (
          searchResults.map((data) => (
            <User
              key={data.id}
              firstName={data.firstName}
              lastName={data.lastName}
              designation={data.designation}
              employed={data.employed}
              id={data.id}
            />
          ))
        ) : (
          <p style={{ marginTop: "2rem" }}>No Users to display</p>
        )}
      </main>
    </div>
  );
};
export default Home;
