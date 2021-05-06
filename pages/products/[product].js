import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductItem = () => {
  const router = useRouter();
  const [item, setItem] = useState({});
  const { product } = router.query;

  useEffect(() => {
    window
      .fetch(`/api/avo/${product}`)
      .then(response => response.json())
      .then(data => setItem(data));
  }, []);

  return (
    <div className="container">
      <Navbar />
      <p>Esta es la página del producto {item.name}</p>
    </div>
  );
};

export default ProductItem;
