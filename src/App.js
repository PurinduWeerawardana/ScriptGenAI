import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Generate from "./pages/Generate";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndPolicy from "./pages/TermsAndPolicy";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/upload" element={<Upload />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/generate" element={<Generate />}></Route>
      <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
      <Route path="/termsPolicy" element={<TermsAndPolicy />}></Route>
      <Route path="/*" element={<h1>404 not found Squadrons</h1>}></Route>
    </Routes>
  );
}

export default App;
