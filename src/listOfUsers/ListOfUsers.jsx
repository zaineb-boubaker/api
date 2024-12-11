import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import UserCard from "../userCard/UserCard";

function ListOfUsers() {
  const [ListOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 id="title">List Of Users</h1>
      <div id="list">
        {ListOfUsers.map((user, i) => (
          <UserCard key={i} name={user.name} email={user.email} />
        ))}
      </div>

      {/* {ListOfUsers.map((user) => (
        <div id="user" key={user.id}>
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
        </div>
      ))} */}
    </div>
  );
}

export default ListOfUsers;
