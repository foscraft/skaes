import { useState } from "react";
import ReactDOM from 'react-dom/client';

function Login() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
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
  )
}
export default Login;
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<MyForm />);