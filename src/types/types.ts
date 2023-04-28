export interface UserTypes {
  firstName: string;
  lastName: string;
  designation: string;
  id: number;
  employed: boolean;
}

export interface UserContextProps {
  users: UserTypes[];
  setUsers: React.Dispatch<React.SetStateAction<UserTypes[]>>;
  search: number | string;
  setSearch: React.Dispatch<React.SetStateAction<number | string>>;
  searchResults: UserTypes[];
  setSearchResults: React.Dispatch<React.SetStateAction<UserTypes[]>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  designation: string;
  setDesignation: React.Dispatch<React.SetStateAction<string>>;
  employed: boolean;
  setEmployed: React.Dispatch<React.SetStateAction<boolean>>;
  // handleCheck: () => void;
  // handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  // handleDelete: (id: number) => void;
}
