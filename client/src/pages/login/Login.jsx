import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const {user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
        const res = await axios.post("/auth/login",credentials)
        dispatch({ type: "LOGIN_SUCCESS", payload:res.data });
        navigate("/")
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
        <button className="loButton" disabled={loading} onClick={handleClick}>
          Login
        </button>
        {error && <span>{error.message} </span>}
      </div>
    </div>
  );
};

export default Login;
