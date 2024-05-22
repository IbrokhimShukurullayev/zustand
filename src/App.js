import React from "react";
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';

import Single from "./pages/single/Single"
import Favourite from './pages/favouriteProduct/Favourite';
import {Routes , Route} from "react-router-dom"
import Karzinka from './pages/karzinka/Karzinka';
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/karzinka" element={<Karzinka />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
