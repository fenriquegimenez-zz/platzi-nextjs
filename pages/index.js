import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "../components/Loader/Loader";

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
        <Loading />
      ) : (
        productList.map(product => {
          return (
            <ul>
              <li key={product.id}>{product.name}</li>
            </ul>
          );
        })
      )}
    </div>
  );
};
export default Home;
