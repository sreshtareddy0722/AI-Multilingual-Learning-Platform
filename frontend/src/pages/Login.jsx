import "./Login.css";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
    const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>AI Multilingual Learning Platform</h1>
        <p>Select your role to continue</p>

        <input
          type="email"
          placeholder="Enter Email"
          className="input-box"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="input-box"
        />

        <button
  className="login-btn"
  onClick={() => navigate("/dashboard")}
>
  Student Login
</button>

<button
  className="guest-btn"
  onClick={() => navigate("/teacher")}
>
  Teacher Login
</button>

        <button
  className="guest-btn"
  onClick={() => navigate("/dashboard")}
>
  Continue as Guest
</button>
      </div>
    </div>
  );
}

export default Login;