import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import * as serviceWorker from "./serviceWorker"
import {BrowserRouter as Router,Route,Routes} from  "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Profile,
  Contact,
} from "./components";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
  <Navigation />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer />
</Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals