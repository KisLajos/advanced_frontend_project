// The product itself, i.e. cocktail, snack, merch item
// Elements:
// icon
// name
// ingredients
// price
// description (warm & zingy)
// comments (raffle, slushy, hot serving)
// shown?

import React from "react";
import parse from "html-react-parser";
import "./Product.css";

export default function Product({ product }) {
  return (
    <article className="product">
      <div className="product-icon">
        <img src={require(`../assets/cocktails/${product.acf.iconname}.svg`)} />
      </div>
      <div className="product-text">
        <h3 className="product-name">{parse(product.title.rendered)}</h3>

        <h5 className="product-ingredients">{product.acf.ingredients}</h5>
        <p className="product-price">{product.acf.price},-</p>
        <p className="product-description">{product.acf.description}</p>
        <p>{product.acf.comments}</p>
        <p>{product.acf.shown}</p>
      </div>
    </article>
  );
}
