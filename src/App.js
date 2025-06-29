import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Header from "./components/Header";
import TheRiseProgram from "./pages/TheRiseProgram";
import About from "./pages/About";
import Roster from "./pages/Roster";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theriseprogram" element={<TheRiseProgram />} />
        <Route path="/about" element={<About />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
