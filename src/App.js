import "./App.css";
import Footer from "./screens/Footer/Footer.tsx";
import Header from "./screens/Header/Header.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Content/Home/Home.tsx";
import About from "./screens/Content/About/About.tsx";
import Portafolio from "./screens/Content/Portafolio/Portafolio.tsx";
import Layout from "./screens/Content/Layout.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portafolio" element={<Portafolio />} />
          </Routes>
        </Layout>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
