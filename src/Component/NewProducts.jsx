import React, { useState } from "react";
import Product from "./Product";
import CarouselComponent from "./CarouselComponent";
import { Link } from "react-router-dom";

class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartShow: false,
      cartShow2: false,
      cartShow3: false,
      cartShow4: false,
      cartShow5: false,
      cartShow6: false,
      cartShow7: false,
      cartShow8: false,
      cartShow9: false,
      cartShow10: false,
      cartShow11: false,
      cartShow12: false,
    };
  }

  onCartMouseOver = () => {
    this.setState({ cartShow: true });
  };
  onCartMouseOut = () => {
    this.setState({ cartShow: false });
  };

  onCartMouseOver2 = () => {
    this.setState({ cartShow2: true });
  };
  onCartMouseOut2 = () => {
    this.setState({ cartShow2: false });
  };

  onCartMouseOver3 = () => {
    this.setState({ cartShow3: true });
  };
  onCartMouseOut3 = () => {
    this.setState({ cartShow3: false });
  };

  onCartMouseOver4 = () => {
    this.setState({ cartShow4: true });
  };
  onCartMouseOut4 = () => {
    this.setState({ cartShow4: false });
  };

  onCartMouseOver5 = () => {
    this.setState({ cartShow5: true });
  };
  onCartMouseOut5 = () => {
    this.setState({ cartShow5: false });
  };

  onCartMouseOver6 = () => {
    this.setState({ cartShow6: true });
  };
  onCartMouseOut6 = () => {
    this.setState({ cartShow6: false });
  };

  onCartMouseOver7 = () => {
    this.setState({ cartShow7: true });
  };
  onCartMouseOut7 = () => {
    this.setState({ cartShow7: false });
  };

  onCartMouseOver8 = () => {
    this.setState({ cartShow8: true });
  };
  onCartMouseOut8 = () => {
    this.setState({ cartShow8: false });
  };

  onCartMouseOver9 = () => {
    this.setState({ cartShow9: true });
  };
  onCartMouseOut9 = () => {
    this.setState({ cartShow9: false });
  };

  onCartMouseOver10 = () => {
    this.setState({ cartShow10: true });
  };
  onCartMouseOut10 = () => {
    this.setState({ cartShow10: false });
  };

  onCartMouseOver11 = () => {
    this.setState({ cartShow11: true });
  };
  onCartMouseOut11 = () => {
    this.setState({ cartShow11: false });
  };

  onCartMouseOver12 = () => {
    this.setState({ cartShow12: true });
  };
  onCartMouseOut12 = () => {
    this.setState({ cartShow12: false });
  };

  render() {
    return (
      <div
        className="col-11 col-md-8 me-auto ms-auto newProducts"
        style={
          {
            // minWidth:848
            // padding: 0,
            // marginRight: 60,
          }
        }
      >
        <CarouselComponent />
        <div
          className="row newProducts scrollAnimation"
          style={{
            // width: 843,
            height: "auto",
            fontSize: 13,
            backgroundColor: "white",
            padding: 0,
            margin: 0,
            boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
            marginTop: 20,
          }}
        >
          <div
            className="row"
            style={{
              padding: 10,
              margin: 0,
              borderBottom: "1px solid #e3e3e3",
              // marginBottom: 10,
            }}
          >
            <div className="col-9 col-md" style={{ margin: 0, padding: 0 }}>
              {" "}
              <h5 style={{ margin: 0, padding: 0 }}>NEW PRODUCTS</h5>
            </div>
            <div className="col col-md-auto" style={{ margin: 0, padding: 0 }}>
              {" "}
              <ul
                style={{
                  display: "flex",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                <li style={{ margin: 5 }}>
                  {" "}
                  <a href="*" style={{ textDecoration: "none", color: "grey" }}>
                    All
                  </a>
                </li>
                <li style={{ margin: 5 }}>
                  {" "}
                  <a href="*" style={{ textDecoration: "none", color: "grey" }}>
                    Clothing
                  </a>
                </li>
                <li style={{ margin: 5 }}>
                  {" "}
                  <a href="*" style={{ textDecoration: "none", color: "grey" }}>
                    Electronics
                  </a>
                </li>
                <li style={{ margin: 5 }}>
                  {" "}
                  <a href="*" style={{ textDecoration: "none", color: "grey" }}>
                    Shoes
                  </a>
                </li>

                {/* <li style={{ margin: 5 }}>
                  {" "}
                  <a href='*'style={{ textDecoration: "none", color: "grey" }}>
                    <button className="left" onclick="leftScroll()">
                      Left
                    </button>
                  </a>
                </li>

                <li style={{ margin: 5 }}>
                  {" "}
                  <a href='*'style={{ textDecoration: "none", color: "grey" }}>
                    <button className="right" onclick="rightScroll()">
                      right
                    </button>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          <div
            className="row scrollbar"
            style={{
              width: "auto",
              height: "auto",
              padding: 10,
              margin: 0,
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "nowrap",
              overflowY: "hidden",
              overflowX: "visible",
              scrollBehavior: "mdooth",
            }}
          >
            <Product />
            {/* <div
              className="col-md-2"
              onMouseOver={this.onCartMouseOver}
              onMouseOut={this.onCartMouseOut}
              style={{ position: "relative", width: 200, overflow: "hidden" }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    position: "absolute",
                    left: "80%",
                    top: 15,
                    backgroundColor: " #46aad7",
                    color: "white",
                  }}
                >
                  <b>NEW</b>
                </div>
                <img
                  className="img-responsive"
                  src="\assets\images\products\p1.jpg"
                  alt=""
                  style={{
                    width: 200,
                    height: 240,
                    padding: 20,
                    paddingLeft: 0,
                  }}
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    {" "}
                    <b>$450.99</b>
                  </span>{" "}
                  <hr
                    style={{
                      width: 29,
                      position: "absolute",
                      bottom: 11,
                      left: 68,
                    }}
                  />
                  <span style={{ color: "grey", margin: 5 }}>$800</span>{" "}
                </p>
                <div
                  className={`row ${this.state.cartShow ? "show" : ""}`}
                  id="cartOver"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div> */}

            {/* <div
              className="col-md-2"
              onMouseOver={this.onCartMouseOver2}
              onMouseOut={this.onCartMouseOut2}
              style={{ position: "relative", width: 200 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    position: "absolute",
                    left: "80%",
                    top: 15,
                    backgroundColor: " #ff7878",
                    color: "white",
                  }}
                >
                  <b>HOT</b>
                </div>
                <img
                  className="img-responsive"
                  src="\assets\images\products\p2.jpg"
                  alt=""
                  style={{ width: 220, height: 240, padding: 20 }}
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    {" "}
                    <b>$450.99</b>
                  </span>{" "}
                  <hr
                    style={{
                      width: 29,
                      position: "absolute",
                      bottom: 11,
                      left: 68,
                    }}
                  />
                  <span style={{ color: "grey", margin: 5 }}>$800</span>
                </p>
                <div
                  className={`row ${this.state.cartShow2 ? "show" : ""}`}
                  id="cartOver2"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow2 ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div> */}

            {/* <div
              className="col-md-2"
              onMouseOver={this.onCartMouseOver3}
              onMouseOut={this.onCartMouseOut3}
              style={{ position: "relative", width: 200 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    backgroundColor: " #fdd922",
                    position: "absolute",
                    left: "80%",
                    top: 15,
                  }}
                >
                  <b>SALE</b>
                </div>
                <img
                  className="img-responsive"
                  src="\assets\images\products\p3.jpg"
                  alt=""
                  style={{ width: 200, height: 240, padding: 20 }}
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    <b>$450.99</b>
                  </span>{" "}
                  <hr
                    style={{
                      width: 29,
                      position: "absolute",
                      bottom: 11,
                      left: 68,
                    }}
                  />
                  <span style={{ color: "grey", margin: 5 }}>$800</span>{" "}
                </p>
                <div
                  className={`row ${this.state.cartShow3 ? "show" : ""}`}
                  id="cartOver3"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow3 ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div> */}

            {/* <div
              className="col-md-2"
              onMouseOver={this.onCartMouseOver4}
              onMouseOut={this.onCartMouseOut4}
              style={{ position: "relative", width: 200 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    backgroundColor: " #fdd922",
                    position: "absolute",
                    left: "80%",
                    top: 15,
                  }}
                >
                  <b>SALE</b>
                </div>
                <img
                  className="img-responsive"
                  src="\assets\images\products\p4.jpg"
                  alt=""
                  style={{
                    width: 200,
                    height: 240,
                    padding: 20,
                    paddingLeft: 0,
                  }}
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    <b>$450.99</b>
                  </span>{" "}
                  <hr
                    style={{
                      width: 29,
                      position: "absolute",
                      bottom: 11,
                      left: 68,
                    }}
                  />
                  <span style={{ color: "grey", margin: 5 }}>$800</span>
                </p>

                <div
                  className={`row ${this.state.cartShow4 ? "show" : ""}`}
                  id="cartOver4"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow4 ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div
              className="col-md-2"
              onMouseOver={this.onCartMouseOver4}
              onMouseOut={this.onCartMouseOut4}
              style={{ position: "relative", width: 200 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    backgroundColor: " #fdd922",
                    position: "absolute",
                    left: "80%",
                    top: 15,
                  }}
                >
                  <b>SALE</b>
                </div>
                <img
                  className="img-responsive"
                  src="\assets\images\products\p5.jpg"
                  alt=""
                  style={{
                    width: 200,
                    height: 240,
                    padding: 20,
                    paddingLeft: 0,
                  }}
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    <b>$450.99</b>
                  </span>{" "}
                  <hr
                    style={{
                      width: 29,
                      position: "absolute",
                      bottom: 11,
                      left: 68,
                    }}
                  />
                  <span style={{ color: "grey", margin: 5 }}>$800</span>
                </p>

                <div
                  className={`row ${this.state.cartShow4 ? "show" : ""}`}
                  id="cartOver4"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow4 ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div
              className="col-md-2"
              onMouseOver={this.onCartMouseOver4}
              onMouseOut={this.onCartMouseOut4}
              style={{ position: "relative", width: 200 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    backgroundColor: " #fdd922",
                    position: "absolute",
                    left: "80%",
                    top: 15,
                  }}
                >
                  <b>SALE</b>
                </div>
                <img
                  className="img-responsive"
                  src="\assets\images\products\p6.jpg"
                  alt=""
                  style={{
                    width: 200,
                    height: 240,
                    padding: 20,
                    paddingLeft: 0,
                  }}
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    <b>$450.99</b>
                  </span>{" "}
                  <hr
                    style={{
                      width: 29,
                      position: "absolute",
                      bottom: 11,
                      left: 68,
                    }}
                  />
                  <span style={{ color: "grey", margin: 5 }}>$800</span>
                </p>

                <div
                  className={`row ${this.state.cartShow4 ? "show" : ""}`}
                  id="cartOver4"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow4 ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div
          className="row justify-content-between newProducts scrollAnimation"
          style={{
            // width: 843,
            // height: 180,
            padding: 0,
            margin: 0,
            marginTop: 20,
            boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
          }}
        >
          <div
            className="col-7 col-md-7"
            style={{
              // width: 481,
              padding: 0,
            }}
          >
            <img
              src="\assets\images\banners\home-banner1.jpg"
              className="img-fluid"
              alt=""
              // style={{ padding: 0, margin: 0 }}
            />
          </div>
          {/* <div className="col-md-1"></div> */}
          <div
            className="col-5 col-md-5"
            style={{
              // width: 336,
              backgroundColor: "#fe8a8a",
              // padding: 0,
              // margin: 0,
            }}
          >
            <img
              src="\assets\images\banners\home-banner2.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>

        <div
          className="row newProducts scrollAnimation"
          style={{
            // width: 843,
            // height: 'auto',
            fontSize: 13,
            boxSizing: "border-box",
            backgroundColor: "white",
            padding: 0,
            margin: 0,
            marginTop: 20,
            boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
          }}
        >
          <div
            className="row"
            style={{
              padding: 10,
              margin: 0,
              borderBottom: "1px solid #e3e3e3",
              marginBottom: 10,
            }}
          >
            <div className="col-md" style={{ margin: 0, padding: 0 }}>
              {" "}
              <h5 style={{ margin: 0, padding: 0 }}>NEW PRODUCTS</h5>
            </div>
            <div className="col-md-4" style={{ margin: 0, padding: 0 }}>
              {" "}
              <ul
                style={{
                  display: "flex",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                <li style={{ margin: 5 }}>
                  {" "}
                  <a href="*" style={{ textDecoration: "none", color: "grey" }}>
                    All
                  </a>
                </li>
                <li style={{ margin: 5 }}>
                  {" "}
                  <a href="*" style={{ textDecoration: "none", color: "grey" }}>
                    Clothing
                  </a>
                </li>
                <li style={{ margin: 5 }}>
                  {" "}
                  <a href="*" style={{ textDecoration: "none", color: "grey" }}>
                    Electronics
                  </a>
                </li>
                <li style={{ margin: 5 }}>
                  {" "}
                  <a href="*" style={{ textDecoration: "none", color: "grey" }}>
                    Shoes
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row" style={{ justifyContent: "space-evenly" }}>
            <div
              className="col-md-2"
              onMouseOver={this.onCartMouseOver5}
              onMouseOut={this.onCartMouseOut5}
              style={{ position: "relative", width: 200 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    position: "absolute",
                    left: "90%",
                    top: 15,
                    backgroundColor: " #46aad7",
                    color: "white",
                  }}
                >
                  <b>NEW</b>
                </div>
                <img
                  className="img-responsive"
                  src="\assets\images\products\p5.jpg"
                  alt=""
                  style={{
                    width: 200,
                    height: 240,
                    padding: 20,
                    paddingLeft: 0,
                  }}
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    {" "}
                    <b>$450.99</b>
                  </span>{" "}
                  <hr
                    style={{
                      width: 29,
                      position: "absolute",
                      bottom: 11,
                      left: 68,
                    }}
                  />
                  <span style={{ color: "grey", margin: 5 }}>$800</span>{" "}
                </p>
                <div
                  className={`row ${this.state.cartShow5 ? "show" : ""}`}
                  id="cartOver"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow5 ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>

            <div
              className="col-md-2"
              onMouseOver={this.onCartMouseOver6}
              onMouseOut={this.onCartMouseOut6}
              style={{ position: "relative", width: 200 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    position: "absolute",
                    left: "90%",
                    top: 15,
                    backgroundColor: " #ff7878",
                    color: "white",
                  }}
                >
                  <b>HOT</b>
                </div>
                <img
                  className="img-responsive"
                  src="\assets\images\products\p6.jpg"
                  alt=""
                  style={{ width: 220, height: 240, padding: 20 }}
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    {" "}
                    <b>$450.99</b>
                  </span>{" "}
                  <hr
                    style={{
                      width: 29,
                      position: "absolute",
                      bottom: 11,
                      left: 68,
                    }}
                  />
                  <span style={{ color: "grey", margin: 5 }}>$800</span>
                </p>
                <div
                  className={`row ${this.state.cartShow6 ? "show" : ""}`}
                  id="cartOver2"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow6 ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>

            <div
              className="col-md-2"
              onMouseOver={this.onCartMouseOver7}
              onMouseOut={this.onCartMouseOut7}
              style={{ position: "relative", width: 200 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    backgroundColor: " #fdd922",
                    position: "absolute",
                    left: "88%",
                    top: 15,
                  }}
                >
                  <b>SALE</b>
                </div>
                <img
                  className="img-responsive"
                  src="\assets\images\products\p7.jpg"
                  alt=""
                  style={{ width: 200, height: 240, padding: 20 }}
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    <b>$450.99</b>
                  </span>{" "}
                  <hr
                    style={{
                      width: 29,
                      position: "absolute",
                      bottom: 11,
                      left: 68,
                    }}
                  />
                  <span style={{ color: "grey", margin: 5 }}>$800</span>{" "}
                </p>
                <div
                  className={`row ${this.state.cartShow7 ? "show" : ""}`}
                  id="cartOver3"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow7 ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>

            <div
              className="col-md-2"
              onMouseOver={this.onCartMouseOver8}
              onMouseOut={this.onCartMouseOut8}
              style={{ position: "relative", width: 200 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    backgroundColor: " #fdd922",
                    position: "absolute",
                    left: "90%",
                    top: 15,
                  }}
                >
                  <b>SALE</b>
                </div>
                <img
                  className="img-responsive"
                  src="\assets\images\products\p8.jpg"
                  alt=""
                  style={{
                    width: 200,
                    height: 240,
                    padding: 20,
                    paddingLeft: 0,
                  }}
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    <b>$450.99</b>
                  </span>{" "}
                  <hr
                    style={{
                      width: 29,
                      position: "absolute",
                      bottom: 11,
                      left: 68,
                    }}
                  />
                  <span style={{ color: "grey", margin: 5 }}>$800</span>
                </p>

                <div
                  className={`row ${this.state.cartShow8 ? "show" : ""}`}
                  id="cartOver4"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow8 ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row newProducts scrollAnimation"
          style={{
            // width: 843,
            height:'auto',
            margin: 0,
            marginTop: 20,
            padding: 0,
            position: "relative",
            boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
          }}
        >
          <img
            className="img-fluid p-0"
            src="\assets\images\banners\home-banner.jpg"
            alt=""
          />
          <img
            className="img-fluid"
            src="\assets\images\label.png"
            alt=""
            style={{ width: 100, height: 100, position: "absolute", left: -12 }}
          />
          <div
            style={{
              width: 100,
              height: 100,
              position: "absolute",
              color: "white",
              transform: "rotate(-55deg)",
              left: 21,
            }}
          >
            <h6>NEW</h6>
          </div>
          <div className="row"
            style={{
              // width: 'auto',
              color: "white",
              position: "absolute",
              left: '45%',
              bottom: 50,
            }}
          >
            <div className="col-10 fs-1 fw-bold" style={{ color: "#fdd91d" }}>
              
              NEW MENS FASHION
            </div>
            <div className="row">
<div className="col-2"></div>
              <div
                className="col-auto fs-3">
              SAVE UPTO 70% OFF
            </div>
            </div>
          </div>
        </div>

        <div
          className="row newProducts scrollAnimation"
          style={{
            // width: 843,
            height: 'auto',
            fontSize: 13,
            boxSizing: "border-box",
            backgroundColor: "white",
            padding: 0,
            margin: 0,
            marginTop: 20,
            boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
          }}
        >
          <div
            className="row"
            style={{
              padding: 10,
              margin: 0,
              borderBottom: "1px solid #e3e3e3",
              marginBottom: 10,
            }}
          >
            <div className="col-md" style={{ margin: 0, padding: 0 }}>
              {" "}
              <h5 style={{ margin: 0, padding: 0 }}>BEST SELLERS</h5>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {" "}
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="\assets\images\products\p20.jpg"
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                </div>
                <div className="col-md-6">
                  <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                  <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                  <p>
                    <span>
                      {" "}
                      <b>$450.99</b>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="\assets\images\products\p22.jpg"
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                </div>
                <div className="col-md-6">
                  <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                  <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                  <p>
                    <span>
                      {" "}
                      <b>$450.99</b>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="\assets\images\products\p24.jpg"
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                </div>
                <div className="col-md-6">
                  <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                  <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                  <p>
                    <span>
                      {" "}
                      <b>$450.99</b>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {" "}
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="\assets\images\products\p21.jpg"
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                </div>
                <div className="col-md-6">
                  <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                  <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                  <p>
                    <span>
                      {" "}
                      <b>$450.99</b>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="\assets\images\products\p23.jpg"
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                </div>
                <div className="col-md-6">
                  <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                  <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                  <p>
                    <span>
                      {" "}
                      <b>$450.99</b>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="\assets\images\products\p25.jpg"
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                </div>
                <div className="col-md-6">
                  <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                  <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                  <p>
                    <span>
                      {" "}
                      <b>$450.99</b>
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row newProducts scrollAnimation"
          style={{
            // width: 843,
            height: "auto",
            fontSize: 13,
            boxSizing: "border-box",
            backgroundColor: "white",
            padding: 0,
            margin: 0,
            marginTop: 20,
            boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
          }}
        >
          <div
            className="row"
            style={{
              padding: 10,
              margin: 0,
              borderBottom: "1px solid #e3e3e3",
              marginBottom: 10,
            }}
          >
            <div className="col-auto col-md" style={{ margin: 0, padding: 0 }}>
              {" "}
              <h5 style={{ margin: 0, padding: 0 }}>LATEST FORM BLOG</h5>
            </div>
          </div>

          <div
            className="row"
            style={{
              margin: 1,
              padding: 20,
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "nowrap",
              overflowY: "hidden",
              overflowX: "scroll",
              scrollBehavior: "mdooth",
            }}
          >
            <div className="col-12 col-md m-1">
              <img
                src="\assets\images\blog-post\blog_big_01.jpg"
                className="img-fluid"
                alt=""
              />

              <div className="row" style={{ marginTop: 10 }}>
                <p>
                  <b>Voluptatem accusantium doloremque laudantium</b>
                </p>
                <p>By Jone Doe | 21 March 2016</p>

                <p>
                  Sed quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem.
                </p>

                <div
                  className="btn btn-primary m-2"
                  style={{
                    width: "auto",
                    // height: 35,
                    // backgroundColor: "#199bff",
                    // marginLeft: 40,
                    padding: 7,
                    fontSize: 14,
                  }}
                >
                  <Link
                    to="/blog"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md m-1">
              <img
                src="\assets\images\blog-post\blog_big_02.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="row" style={{ marginTop: 10 }}>
                <p>
                  <b>Voluptatem accusantium doloremque laudantium</b>
                </p>
                <p>By Jone Doe | 21 March 2016</p>

                <p>
                  Sed quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem.
                </p>

                <div
                  className="btn btn-primary m-2"
                  style={{
                    width: "auto",
                    // height: 35,
                    // backgroundColor: "#199bff",
                    // marginLeft: 40,
                    padding: 7,
                    fontSize: 14,
                  }}
                >
                  <Link
                    to="/blog"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md m-1">
              <img
                src="\assets\images\blog-post\blog_big_03.jpg"
                alt=""
                className="img-fluid"
              />

              <div className="row" style={{ marginTop: 10 }}>
                <p>
                  <b>Voluptatem accusantium doloremque laudantium</b>
                </p>
                <p>By Jone Doe | 21 March 2016</p>

                <p>
                  Sed quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem.
                </p>

                <div
                  className="btn btn-primary m-2"
                  style={{
                    width: "auto",
                    // height: 35,
                    // backgroundColor: "#199bff",
                    // marginLeft: 40,
                    padding: 7,
                    fontSize: 14,
                  }}
                >
                  <Link
                    to="/blog"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row text-center  newProducts scrollAnimation"
          style={{
            // width: 843,
            height: "auto",
            fontSize: 13,
            boxSizing: "border-box",
            backgroundColor: "white",
            padding: 0,
            margin: 0,
            marginTop: 20,
            boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
          }}
        >
          <div
            className="row"
            style={{
              padding: 10,
              margin: 0,
              borderBottom: "1px solid #e3e3e3",
              marginBottom: 10,
            }}
          >
            <div
              className="col-6 col-md-auto"
              style={{ margin: 0, padding: 0 }}
            >
              {" "}
              <h5 style={{ margin: 0, padding: 0 }}>NEW ARRIVALS</h5>
            </div>
          </div>

          <div
            className="row "
            // style={{ justifyContent: "space-evenly" }}
          >
            <div
              className="col-5 col-md"
              onMouseOver={this.onCartMouseOver9}
              onMouseOut={this.onCartMouseOut9}
              style={{ position: "relative", padding: 20, margin: 10 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    position: "absolute",
                    left: "90%",
                    top: 15,
                    backgroundColor: " #46aad7",
                    color: "white",
                  }}
                >
                  <b>NEW</b>
                </div>
                <img
                  className="img-fluid"
                  src="\assets\images\products\p19.jpg"
                  alt=""
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    {" "}
                    <b>$450.99</b>
                  </span>{" "}
                  <span className="text-decoration-line-through" style={{ color: "grey", margin: 5 }}>$800</span>{" "}
                </p>
                <div
                  className={`row ${this.state.cartShow9 ? "show" : ""}`}
                  id="cartOver"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow9 ? "block" : "none",
                  }}
                >
                  <div className="row" style={{}}>
                    <div
                      className="col"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>

            <div
              className="col-5 col-md"
              onMouseOver={this.onCartMouseOver10}
              onMouseOut={this.onCartMouseOut10}
              style={{ position: "relative", padding: 20, margin: 10 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    position: "absolute",
                    left: "90%",
                    top: 15,
                    backgroundColor: " #46aad7",
                    color: "white",
                  }}
                >
                  <b>NEW</b>
                </div>
                <img
                  className="img-fluid"
                  src="\assets\images\products\p9.jpg"
                  alt=""
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    {" "}
                    <b>$450.99</b>
                  </span>{" "}
                  <span className="text-decoration-line-through" style={{ color: "grey", margin: 5 }}>$800</span>
                </p>
                <div
                  className={`row ${this.state.cartShow10 ? "show" : ""}`}
                  id="cartOver2"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow10 ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>

            <div
              className="col-5 col-md"
              onMouseOver={this.onCartMouseOver11}
              onMouseOut={this.onCartMouseOut11}
              style={{ position: "relative", padding: 20, margin: 10 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    backgroundColor: " #ff7878",
                    position: "absolute",
                    left: "88%",
                    top: 15,
                    color: "white",
                  }}
                >
                  <b>HOT</b>
                </div>
                <img
                  className="img-fluid"
                  src="\assets\images\products\p1.jpg"
                  alt=""
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    <b>$450.99</b>
                  </span>{" "}
                  <span className="text-decoration-line-through" style={{ color: "grey", margin: 5 }}>$800</span>{" "}
                </p>
                <div
                  className={`row ${this.state.cartShow11 ? "show" : ""}`}
                  id="cartOver3"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow11 ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>

            <div
              className="col-5 col-md"
              onMouseOver={this.onCartMouseOver12}
              onMouseOut={this.onCartMouseOut12}
              style={{ position: "relative", padding: 20, margin: 10 }}
            >
              <div className="hotdealImg">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    padding: 11,
                    paddingLeft: 8,
                    fontSize: 11,
                    borderRadius: "50%",
                    backgroundColor: " #ff7878",
                    position: "absolute",
                    left: "90%",
                    top: 15,
                    color: "white",
                  }}
                >
                  <b>HOT</b>
                </div>
                <img
                  className="img-fluid"
                  src="\assets\images\products\p30.jpg"
                  alt=""
                />
                <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
                <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
                <p>
                  <span>
                    <b>$450.99</b>
                  </span>{" "}
                  <span className="text-decoration-line-through" style={{ color: "grey", margin: 5 }}>$800</span>
                </p>

                <div
                  className={`row ${this.state.cartShow12 ? "show" : ""}`}
                  id="cartOver4"
                  style={{
                    width: 100,
                    textAlign: "center",
                    margin: 5,
                    position: "absolute",
                    top: 200,
                    display: this.state.cartShow12 ? "block" : "none",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      className="col-md-4"
                      style={{
                        backgroundColor: "#fdd922",
                        padding: 3,
                      }}
                    >
                      🛒
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      💗
                    </div>
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: "#0f6cb2", padding: 3 }}
                    >
                      {" "}
                      📊
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProduct;
