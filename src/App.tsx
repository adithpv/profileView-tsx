import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/userContext";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Missing from "./components/Missing";
import Navbar from "./components/Navbar";
import NewUser from "./components/NewUser";
import UserPage from "./components/UserPage";

const App = () => {
  const { users, setSearchResults, search, setSearch } =
    useContext(UserContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filteredResults = users.filter(
      (user) =>
        user.firstName
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase()) ||
        user.designation
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase()) ||
        user.lastName
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [users, search]);

  return (
    <div className="App">
      <Header title="PROFILE VIEW" />
      <Navbar handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addusers" element={<NewUser />} />
        <Route path="/addusers/:id" element={<UserPage />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
