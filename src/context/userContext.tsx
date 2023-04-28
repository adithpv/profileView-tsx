import React, { useState, createContext } from "react";

import { UserContextProps, UserTypes } from "../types/types";

export const UserContext = createContext<UserContextProps>({
  users: [],
  setUsers: () => {},
  search: "",
  setSearch: () => {},
  searchResults: [],
  setSearchResults: () => {},
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  designation: "",
  setDesignation: () => {},
  employed: false,
  setEmployed: () => {},
});

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const localStorageData = localStorage.getItem("userAllDetails");
  const [users, setUsers] = useState<UserTypes[]>(
    localStorageData ? JSON.parse(localStorageData) : []
  );

  const [search, setSearch] = useState<number | string>("");
  const [searchResults, setSearchResults] = useState<UserTypes[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [employed, setEmployed] = useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        search,
        setSearch,
        searchResults,
        setSearchResults,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        designation,
        setDesignation,
        employed,
        setEmployed,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
