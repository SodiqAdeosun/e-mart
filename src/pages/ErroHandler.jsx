import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div
    style={{
      backgroundColor: "#f3f3f3",
      margin: 0,
      padding: 0,
      overflow:'hidden'
    }}>
      <div className="row header"
              style={{ margin: 0 }}>
        <Header />
      </div>
      <div
        className="row"
        style={{ textAlign: "center", paddingTop: 14, paddingBottom: 30 }}
      >
        <span style={{ fontSize: 198, fontWeight: "bold", color: "#217bc4" }}>
          404
        </span>
        <p style={{ fontSize: 19, marginTop: "-20px", marginBottom: 30 }}>
          We are sorry, the page you've requested is not available.
        </p>

        <div
          className="row"
          style={{
            width: 470,
            height: 47,
            display: "inline-flex",
            flexDirection: "column",
            marginLeft: "30%",
            border: "1px solid #e0e0e0",
            borderRadius: 5,
            padding: 0,
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              height: 46,
              border: 0,
              borderRadius: "5px 0px 0px 5px",
            }}
          />
          <div
            style={{
              backgroundColor: "#fdd922",
              width: "13%",
              height: 47,
              fontSize: 20,
              fontWeight: "bold",
              padding: 7,
              borderRadius: "0px 5px 5px 0px",
            }}
          >
            Go
          </div>
        </div>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#217bc4", margin: 30 }}
        >
          <FaHome /> Go To Homepage
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
