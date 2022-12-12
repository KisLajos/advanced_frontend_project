import './App.css';
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Info from "./pages/Info.js";
import CocktailWorkshops from "./pages/CocktailWorkshops.js";
import GedulgtPrivate from "./pages/GedulgtPrivate.js";
import GedulgtDining from "./pages/GedulgtDining.js";
import NavBar from "./components/NavBar.js";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="info" element={<Info />} />
          <Route path="cocktailworkshops" element={<CocktailWorkshops />} />
          <Route path="gedulgtprivate" element={<GedulgtPrivate />} />
          <Route path="gedulgtdining" element={<GedulgtDining />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
