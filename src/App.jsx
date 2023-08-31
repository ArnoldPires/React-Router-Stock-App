import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import About from "./pages/About";
import Stock from "./pages/Stock";
import Data from "./components/Data";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard stocks={Data} />} />
        <Route path="/stocks/:symbol" element={<Stock stocks={Data} />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
