import React from 'react';
import {BrowserRouter as Router,Route,Routes} from  "react-router-dom";
import Navigation  from "./components/landing/Navigation";
import Footer from "./components/landing/Footer";
import Home  from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

const App = () => {
  return ( 
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
  )
}

export default App