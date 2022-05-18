// import { useState, useEffect } from "react";

// function Login() {
//   // const [username, setUsername] = useState("");
//   // const [password, setPassword] = useState("");

//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (event) => {
//     setValues({...values, [event.target.name]: event.target.value});
//   }


//   const handleSubmit = (event) => {
//     event.preventDefault();
//    console.log(values);
//   }

//   // useEffect(() => {
//   //   console.log(values);

//   // }, [values]);


//   return (
//     <div className="login">
//       <div className="container">
//         <div className="row align-items-center my-5">
//           <div className="col-lg-7">
//             <h2> <link rel="apple-touch-icon" href="%PUBLIC_URL%/css/logo192.svg" />Hello Skaer!</h2>
//     <form onSubmit={handleSubmit}>
//       <label>Enter username or email:</label>
//         <input
//         name="username"
//           type="text" 
//           value={values.username}
//           onChange={handleChange}
//         />
     
//       <label>Enter password: </label>
//         <input
//         name="password"
//           type="password" 
//           value={values.password}
//           onChange={handleChange}
//         />
     
//       <button type="submit">Login</button>
//     </form>
//     </div>
//     </div>
//     </div>
//     </div>
//   )
// }
// export default Login;
