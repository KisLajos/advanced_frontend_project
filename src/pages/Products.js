import { useEffect, useState } from "react";
import Product from "../components/Product.js";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://wordpress.lajoskis.dk/wp-json/wp/v2/products?_embed"
      );
      const data = await response.json();
      console.log(data);
      if (data.data?.status !== 404) {
        setProducts(data);
      }
    }
    getData();
  }, []);

  return (
    <section className="page">
      {products?.length > 0 ? products.map((product) => (
            <Product key={product.id} product={product} />
          )) : "Loading..."}
    </section>
  );
}
