import "./App.css";
import Footer from "./screens/Footer/Footer.tsx";
import Header from "./screens/Header/Header.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Content/Home/Home.tsx";
import About from "./screens/Content/About/About.tsx";
import Portafolio from "./screens/Content/Portafolio/Portafolio.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Portafolio" element={<Portafolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
