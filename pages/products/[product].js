import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();
  const { product } = router.query;
  return (
    <div>
      <h1>Esta es la página del producto {product}</h1>
    </div>
  );
};

export default ProductItem;
