import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { signin, userDelete } from "./actions/auth";

function App() {
  const dispatch = useDispatch()
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);


  const userSignin = useSelector(state => state.userSignin)
  const { userInfo, success, loading, error } = userSignin

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signin(username, password))
  };

  const handleDelete = async (id) => {

    dispatch(userDelete(id))

    // try {
    //   await axios.delete("http://localhost:5000/api//users/" + id, {
    //     headers: { authorization: "Bearer " + userInfo.accessToken },
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="container">
      {userInfo ? (
        <div className="home">
          <span>
            Welcome to the <b>{userInfo.isAdmin ? "admin" : "user"}</b> dashboard{" "}
            <b>{userInfo.username}</b>.
          </span>
          <span>Delete Users:</span>
          <button className="deleteButton" onClick={() => handleDelete(1)}>
            Delete John
          </button>
          <button className="deleteButton" onClick={() => handleDelete(2)}>
            Delete Jane
          </button>
          {error && (
            <span className="error">
              You are not allowed to delete this user!
            </span>
          )}
          {success && (
            <span className="success">
              User has been deleted successfully...
            </span>
          )}
        </div>
      ) : (
        <div className="login">
          <form onSubmit={handleSubmit}>
            <span className="formTitle">Lama Login</span>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submitButton">
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
