import './App.css'

function App() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>AI Multilingual Learning Platform</h1>
        <p>Learn in Your Native Language</p>

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

        <button className="login-btn">
          Login
        </button>

        <button className="guest-btn">
          Continue as Guest
        </button>
      </div>
    </div>
  )
}

export default App
