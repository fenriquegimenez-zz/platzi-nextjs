import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Avocado app";
  }, []);

  useEffect(() => {
    window
      .fetch("./api/avo/")
      .then(response => response.json())
      .then(({ data }) => {
        console.log("data: ", data);
        setProductList(data);
      })
      .catch(error => console.error("Error: ", error))
      .finally(setLoading(false));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Avocados list</h1>
      {loading ? (
        <p>Loading...</p>
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
