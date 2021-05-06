import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "@components/Loader/Loader";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductItem = () => {
  const router = useRouter();
  const [item, setItem] = useState({ attributes: {} });
  const [loading, setLoading] = useState(true);
  const { avo } = router.query;

  useEffect(() => {
    window
      .fetch(`/api/avo/${avo}`)
      .then(response => response.json())
      .then(data => {
        setItem(data);
      })
      .catch(error => console.log("error: ", error))
      .finally(() => setLoading(false));
  }, []);

  const {
    attributes: { taste, description },
  } = item;

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h3 className="text-center my-5">{item.name}</h3>
          <br />
          <div className="text-center">
            <img
              alt={item.name}
              className="img-thumbnail rounded"
              src={item.image}
            />
          </div>
          <br />
          <p>
            <span className="fw-bold">Price:</span> {item.price} USD
          </p>
          <br />
          <h3>About this avocado:</h3>
          <p>{description}</p>
        </>
      )}
    </div>
  );
};

export default ProductItem;
