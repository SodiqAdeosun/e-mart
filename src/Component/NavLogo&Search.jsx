import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

class LogoSearchBar extends React.Component {
  constructor(porps) {
    super(porps);
  }

  render() {
    return (
      <div>
        <div className="row mt-3" style={{ Content: "space-around" }}>
          <div className="col-md-3" style={{ paddingLeft: 50 }}>
            <img src="/assets/images/logo.png" alt="" />
          </div>
          <div
            className="col-md-6 d-flex bg-white"
            style={{ height: 45, fontSize: "small", padding: 0 }}
          >
            <div className="col-md-2" style={{ backgroundColor: "#f6f6f6" }}>
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{ border: 0, color: "grey", fontSize: 14, padding: 10 }}
              >
                Categories
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href='*'>
                  - Computer
                </a>
                <a className="dropdown-item" href='*'>
                  - Clothing
                </a>
                <a className="dropdown-item" href='*'>
                  - Electronics
                </a>
                <a className="dropdown-item" href='*'>
                  - Shoes
                </a>
                <a className="dropdown-item" href='*'>
                  - Watches
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                placeholder="Search here..."
                style={{
                  width: "100%",
                  height: "100%",
                  border: 0,
                  borderLeft: "1px solid grey",
                  padding: 10,
                }}
              />
            </div>
            <div className="col-md-1" style={{ backgroundColor: "#fdd922" }}>
              <FaSearch style={{ padding: 15, width: "100%", height: 45}} />
            </div>
          </div>
          <div
            className="col-md-2 d-flex"
            style={{
              backgroundColor: "#006cb4",
              border: "1px solid #08619c",
              width: "14%",
              height: 45,
              fontSize: "small",
              marginLeft: 25,
              borderRadius: 5,
            }}
          >
            <div
              className="col-md-3 d-flex"
              style={{
                boxSizing: "border-box",
                borderRight: "1px solid #488ac0",
                position: "relative",
                paddingTop: 14,
                paddingRight: 20,
              }}
            >
              <FaShoppingCart
                className="flipped-icon"
                style={{ color: "white", fontSize: 14 }}
              />
              <div
                style={{
                  width: 20,
                  height: 20,
                  textAlign: "center",
                  borderRadius: "50%",
                  backgroundColor: "#fdd922",
                  position: "absolute",
                  right: "-10px",
                  top: 10,
                }}
              >
                2
              </div>
            </div>
            <div
              className="col-md-9"
              style={{
                fontSize: 14,
                textAlign: "center",
                padding: 10,
                boxSizing: "border-box",
                color: "white",
              }}
            >
              <p>CART-$600.00</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoSearchBar;
