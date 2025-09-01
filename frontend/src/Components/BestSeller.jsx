import React, { useContext, useEffect, useState } from "react";
import shopContext from "../context/ShopContext";

const BestSeller = () => {
  const { products } = useContext(shopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => {
      item.bestSeller;
    });

    setBestSeller(bestProduct.slice(0, 5));
  });
  return <div className="my-10"></div>;
};

export default BestSeller;
