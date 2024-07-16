import React from "react";
import NavBar from "../Component/NavBar";
import HotDeals from "../Component/HotDeals";
import NewProduct from "../Component/NewProducts";
import Brand from "../Component/Brands";
import Footer from "../Component/Footer";
import "../App.css";


function Details() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#f3f3f3",
        width: "inherit",
        // margin: 0,
        padding: 0,
        // boxSizing:'inherit'
      }}
    >
      <div className="row" style={{ backgroundColor: "#217bc4", margin: 0 }}>
        <NavBar />
      </div>


      <div className="row" style={{ marginTop: 20 }}>
        <HotDeals />

        <NewProduct />
      </div>

      <Brand />

      <Footer />


    </div> 
  
  );
}

export default Details;
 