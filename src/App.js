import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Header from "./components/Header";
import TheRiseProgram from "./pages/TheRiseProgram";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theriseprogram" element={<TheRiseProgram />} />
      </Routes>
    </>
  );
}

export default App;
