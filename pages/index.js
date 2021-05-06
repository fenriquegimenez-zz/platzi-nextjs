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
      <Navbar />
      <h1 className="text-center">Avocados list</h1>
      {loading ? (
        <Loader />
      ) : (
        productList.map(product => {
          return (
            <ul>
              <Link href={`/products/${product.id}`}>
                <a>
                  <li key={product.id}>{product.name}</li>
                </a>
              </Link>
            </ul>
          );
        })
      )}
    </div>
  );
};
export default Home;
