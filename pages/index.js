import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Loader from "../components/Loader/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Avocado app";
  }, []);

  useEffect(() => {
    const timerID = setTimeout(() => {
      window
        .fetch("./api/avo/")
        .then(response => response.json())
        .then(({ data }) => {
          console.log("data: ", data);
          setProductList(data);
        })
        .catch(error => console.error("Error: ", error))
        .finally(setLoading(false));
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Avocados list</h1>
      <div className="card-group text-center">
        {loading ? (
          <Loader />
        ) : (
          productList.map(product => {
            return (
              <Link href={`products/${product.id}`}>
                <a className="text-decoration-none">
                  <div className="card m-2">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Home;
