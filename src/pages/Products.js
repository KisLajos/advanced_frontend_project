import { useEffect, useState } from "react";
import Product from "../components/Product.js";
import Selector from "../components/Selector.js";
import NavIcons from "../components/NavIcons.js";
import { useParams } from "react-router-dom";

export default function Products( props ) {
  let params = useParams();
  let paramId = parseInt(params.categoryId);
  let categories = props.categories;
  const [products, setProducts] = useState([]);
  let current_menu_name = "";

  categories.forEach(category => {
    console.log(category.id, paramId);
      if (category.id === paramId) {
        current_menu_name = category.name;
      }
  });

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
