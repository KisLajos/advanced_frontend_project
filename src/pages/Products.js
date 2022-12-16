import { useEffect, useState } from "react";
import Product from "../components/Product.js";
import Selector from "../components/Selector.js";
import NavIcons from "../components/NavIcons.js";

export default function Products() {
  const [products, setProducts] = useState([]);
  //const current_menu_name = "CHRISTMAS MENU";
  const current_menu_name = "THE BEGINNING OF THE WORLD";

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(
        "https://wordpress.lajoskis.dk/wp-json/wp/v2/products?_embed"
      );
      const data = await response.json();
      console.log(data);
      if (data.data?.status !== 404) {
        setProducts(data);
      }
    }
    getProducts();
  }, []);

  return (
    <section className="page">
      <NavIcons/>
      <Selector current_menu={ current_menu_name }/>
      {products?.length > 0 ? products.map((product) => (
            <Product key={product.id} product={product} />
          )) : "Loading..."}
    </section>
  );
}
