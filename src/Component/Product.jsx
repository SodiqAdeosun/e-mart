import React, { useState } from "react";

export default function Product() {
  const [cartShow, setcartShow] = useState(false);
  const [cartShow1, setcartShow1] = useState(false);
  const [cartShow2, setcartShow2] = useState(false);
  const [cartShow3, setcartShow3] = useState(false);
  const [cartShow4, setcartShow4] = useState(false);
  const [cartShow5, setcartShow5] = useState(false);

  function onCartMouseOver() {
    setcartShow(true);
  }
  function onCartMouseOut() {
    setcartShow(false);
  }

  function onCartMouseOver1() {
    setcartShow1(true);
  }
  function onCartMouseOut1() {
    setcartShow1(false);
  }

  function onCartMouseOver2() {
    setcartShow2(true);
  }
  function onCartMouseOut2() {
    setcartShow2(false);
  }

  function onCartMouseOver3() {
    setcartShow3(true);
  }
  function onCartMouseOut3() {
    setcartShow3(false);
  }

  function onCartMouseOver4() {
    setcartShow4(true);
  }
  function onCartMouseOut4() {
    setcartShow4(false);
  }

  function onCartMouseOver5() {
    setcartShow5(true);
  }
  function onCartMouseOut5() {
    setcartShow5(false);
  }

  const products = [
    {
      image: "/assets/images/products/p1.jpg",
      type: "NEW",
      productName: "Floral Print Buttoned",
      newPrice: "$450.99",
      oldPrice: "$800",
      textStyles: {
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
      },
      onCartshow: { cartShow },
      dropDown: onCartMouseOver,
      dropOut: onCartMouseOut,

      styles: {
        width: 100,
        textAlign: "center",
        margin: 5,
        position: "absolute",
        top: 200,
        display: cartShow ? "block" : "none",
      },
    },
    {
      image: "/assets/images/products/p2.jpg",
      type: "HOT",
      productName: "Floral Print Buttoned",
      newPrice: "$450.99",
      oldPrice: "$800",
      textStyles: {
        width: 40,
        height: 40,
        padding: 11,
        paddingLeft: 8,
        fontSize: 11,
        borderRadius: "50%",
        position: "absolute",
        left: "80%",
        top: 15,
        backgroundColor: "#ff7878",
        color: "white",
      },
      onCartshow: { cartShow1 },
      dropDown: onCartMouseOver1,
      dropOut: onCartMouseOut1,

      styles: {
        width: 100,
        textAlign: "center",
        margin: 5,
        position: "absolute",
        top: 200,
        display: cartShow1 ? "block" : "none",
      },
    },
    {
      image: "/assets/images/products/p3.jpg",
      type: "SALE",
      productName: "Floral Print Buttoned",
      newPrice: "$450.99",
      oldPrice: "$800",
      textStyles: {
        width: 40,
        height: 40,
        padding: 11,
        paddingLeft: 8,
        fontSize: 11,
        borderRadius: "50%",
        position: "absolute",
        left: "80%",
        top: 15,
        backgroundColor: "#fdd922",
        color: "white",
      },
      onCartshow: { cartShow2 },
      dropDown: onCartMouseOver2,
      dropOut: onCartMouseOut2,

      styles: {
        width: 100,
        textAlign: "center",
        margin: 5,
        position: "absolute",
        top: 200,
        display: cartShow2 ? "block" : "none",
      },
    },
    {
      image: "/assets/images/products/p4.jpg",
      type: "SALE",
      productName: "Floral Print Buttoned",
      newPrice: "$450.99",
      oldPrice: "$800",
      textStyles: {
        width: 40,
        height: 40,
        padding: 11,
        paddingLeft: 8,
        fontSize: 11,
        borderRadius: "50%",
        position: "absolute",
        left: "80%",
        top: 15,
        backgroundColor: "  #fdd922",
        color: "white",
      },
      onCartshow: { cartShow3 },
      dropDown: onCartMouseOver3,
      dropOut: onCartMouseOut3,

      styles: {
        width: 100,
        textAlign: "center",
        margin: 5,
        position: "absolute",
        top: 200,
        display: cartShow3 ? "block" : "none",
      },
    },
    {
      image: "/assets/images/products/p5.jpg",
      type: "HOT",
      productName: "Floral Print Buttoned",
      newPrice: "$450.99",
      oldPrice: "$800",
      textStyles: {
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
      },
      onCartshow: { cartShow4 },
      dropDown: onCartMouseOver4,
      dropOut: onCartMouseOut4,

      styles: {
        width: 100,
        textAlign: "center",
        margin: 5,
        position: "absolute",
        top: 200,
        display: cartShow4 ? "block" : "none",
      },
    },
    {
      image: "/assets/images/products/p6.jpg",
      type: "NEW",
      productName: "Floral Print Buttoned",
      newPrice: "$450.99",
      oldPrice: "$800",
      textStyles: {
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
      },
      onCartshow: { cartShow5 },
      dropDown: onCartMouseOver5,
      dropOut: onCartMouseOut5,

      styles: {
        width: 100,
        textAlign: "center",
        margin: 5,
        position: "absolute",
        top: 200,
        display: cartShow5 ? "block" : "none",
      },
    },
  ];

  return (
    <>
                {
        products.map((products) => {
          return (
            <div
    className="col-6 col-md-3"
    onMouseOver={products.dropDown}
    onMouseOut={products.dropOut}
    style={{ position: "relative", padding:20
  }}
    >

            <div
            key={products.image}

              className="hotdealImg">
              <div style={products.textStyles}>
                <b>{products.type}</b>
              </div>
              <img
                className="img-fluid"
                src={products.image}
                alt=""
                style={{
                  // width: 200,
                  // height: 240,
                  // padding: 20,
                  // paddingLeft: 0,
                }}
              />
              <p style={{ marginTop: 15 }}>{products.productName}</p>
              <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
              <p>
                <span>
                  {" "}
                  <b>{products.newPrice}</b>
                </span>{" "}
                <span className="text-decoration-line-through" style={{ color: "grey", margin: 5 }}>{products.oldPrice}</span>{" "}
              </p>
              <div
                className={`row ${products.onCartshow ? "show" : ""}`}
                id="cartOver"
                style={products.styles}
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

            )
          })
      }
    </>


  );
}
