import './App.css';
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Info from "./pages/Info.js";
import CocktailWorkshops from "./pages/CocktailWorkshops.js";
import GedulgtPrivate from "./pages/GedulgtPrivate.js";
import GedulgtDining from "./pages/GedulgtDining.js";
import Products from "./pages/Products.js";
import NavBar from "./components/NavBar.js";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(
        "https://wordpress.lajoskis.dk/wp-json/wp/v2/categories"
      );
      const data = await response.json();
      if (data.data?.status !== 404) {
        console.log(data);
        setCategories(data);
      }
    }
    getCategories();
  }, []);

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
          <Route path="products" element={<Products />} />
          <Route path="products/:categoryId" element={<Products categories={categories}/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
