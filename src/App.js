import { useState } from "react";
import "./App.css";
import AddUsers from "./components/Users/addUsers";
import UsersList from "./components/Users/usersList";
function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = ( uName, uAge) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { id: Math.random().toString(), userName: uName, age: uAge }];
    });
  };
  return (
    <div className="App">
      <AddUsers onAddUser={onAddUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
