import { useEffect, useState } from "react";
import Product from "../components/Product.js";
import Selector from "../components/Selector.js";
import NavIcons from "../components/NavIcons.js";
import { useParams } from "react-router-dom";

export default function Products(props) {
  let params = useParams();
  let paramId = parseInt(params.categoryId);
  let categories = props.categories;
  const [products, setProducts] = useState([]);
  let current_menu_name = "";
  let possiblepageIdsforcocktails = [];
  let possiblepageIdsforotherdrinks = [];
  let product_type = "";

  categories.forEach((category) => {
    //console.log(category, paramId);
    if (category.id === paramId) {
      product_type = category.slug.split("-")[0];
      console.log(product_type);
      current_menu_name = category.name;
    }

    if (product_type === "cocktails") {
      possiblepageIdsforcocktails.push(category.id);
    }

    if (product_type === "otherdrinks") {
      possiblepageIdsforotherdrinks.push(category.id);
    }
  });

  console.log(possiblepageIdsforcocktails);
  console.log(possiblepageIdsforotherdrinks);

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
      <NavIcons selectedIconId={paramId} />
      {paramId === 18 || paramId === 19 ? (
        ""
      ) : (
        <Selector
          current_menu={current_menu_name}
          prevpageId={11}
          nextpageId={13}
        />
      )}

      {products?.length > 0
        ? products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        : "Loading..."}
    </section>
  );
}
