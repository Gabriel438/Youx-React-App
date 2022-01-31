import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Helmet } from "react-helmet";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Paciente from "./pages/Paciente";
import Medico from "./pages/Medico";
import Enfermeiro from "./pages/Enfermeiro";
import EditUser from "./pages/EditUser";
export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Youx Group</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Navbar />

      {/* Rotas */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/paciente" element={<Paciente />} />
          <Route path="/medico" element={<Medico />} />
          <Route path="/enfermeiro" element={<Enfermeiro />} />
          <Route path="/EditUser/:id/:perfil" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
