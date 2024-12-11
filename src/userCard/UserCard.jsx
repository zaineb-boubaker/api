import React from "react";

function UserCard({name,email}) {
    return <div id="user">
        <h1> {name} </h1>
        <h3> {email} </h3>
  </div>;
}

export default UserCard;
