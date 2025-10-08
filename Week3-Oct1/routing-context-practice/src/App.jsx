/**
 * Add Routing into your projects and practice Context API - due Wednesday
 * - Routing: Individual pages pre-loaded so you can switch between them  (eg: just reload the main content and keep the header and sidebar)
 * - context: Storage of variables that are used more globally in the site (Eg: Theme / user info)
 */

import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from './components/header'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App