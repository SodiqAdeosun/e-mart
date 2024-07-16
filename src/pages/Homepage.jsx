import React from "react";
import Header from "../Component/Header";
import HotDeals from "../Component/HotDeals";
import NewProduct from "../Component/NewProducts";
import Brand from "../Component/Brands";
import Footer from "../Component/Footer";
import "../App.css";

function Homepage() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#f3f3f3",
        margin: 0,
        padding: 0,
        overflow:'hidden'
      }}
    >
      {/* <div className="row" style={{ backgroundColor: "#217bc4"}}>
        <NavBar />
      </div> */}
      <section className="header" >
        <Header />
      </section>
      <section className="container" id="hero ">
        
      <div className="row" style={{ marginTop: 20}}>
        <HotDeals />

          <NewProduct />
          {/* <div className="col-1"></div> */}
      </div>

      <Brand />
</section>

      <Footer />
    </div>
  );
}

export default Homepage;
