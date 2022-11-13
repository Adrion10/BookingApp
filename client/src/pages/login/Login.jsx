import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = async (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.respons.data });
    }
  };
  return (
    <div className="login">
      <div className="loContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="loInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="loInput"
        />
        <button className="loButon" onClick={handleClick}>
          Login
        </button>
        {error && <span>{error.message} </span>}
      </div>
    </div>
  );
};

export default Login;
