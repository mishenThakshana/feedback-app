import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
};

export default App;
