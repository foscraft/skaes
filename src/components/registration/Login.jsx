import { useState } from "react";

function Login() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <h2> <link rel="apple-touch-icon" href="%PUBLIC_URL%/css/logo192.svg" />Hello Skaer!</h2>
    <form>
      <label>Enter username or email:
        <input
          type="text" 
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Enter password:
        <input
          type="text" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Login;
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<MyForm />);