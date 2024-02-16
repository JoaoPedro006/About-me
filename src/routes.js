import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Projetos from "../src/pages/Home/Projetos";
import Habilidades from "../src/pages/Home/Habilidades";
import Certificacoes from "../src/pages/Home/Certificacoes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Habilidades" element={<Habilidades />} />
        <Route path="/Certificacoes" element={<Certificacoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;