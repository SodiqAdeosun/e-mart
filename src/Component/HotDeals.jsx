import React from "react";
import SideBar from "./SideBar";

export default function HotDeals() {
  return (
    <div
      className="container col-10 col-md-2 "
      style={{
        minWidth: 262,
        fontSize: 14,
        // marginLeft: 70,
      }}
    >
      <SideBar />

      <div
        className="row scrollAnimation"
        style={{
          width: 'auto',
          height: 'auto',
          fontSize: 14,
          padding: 10,
          backgroundColor: "white",
          marginTop: 20,
          boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
          position: "relative",
        }}
      >
        {" "}
        <div
          style={{
            padding: 10,
            borderBottom: "1px solid #e3e3e3",
            marginBottom: 10,
            boxSizing: "border-box",
          }}
        >
          <b>HOT DEALS</b>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:'black'}}></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" >
    <span class="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:'black'}}></span>
    <span class="visually-hidden">Next</span>
  </button>

        </div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
            <div class="carousel-item active">
            <div className="hotdealImg">
          <div
            style={{
              width: 50,
              height: 50,
              padding: 10,
              lineHeight: 1,
              color: "white",
              textAlign: "center",
              borderRadius: "50%",
              backgroundColor: " #ff7878",
              position: "absolute",
              left: "75%",
              top: "15%",
            }}
          >
            49% OFF
          </div>
          <img
            className="img-fluid"
            src="\assets\images\hot-deals\p25.jpg"
            alt=""
            style={{ width: 230, height: 300 }}
          />
          <div className="row count">
            <div className="col-2 countDown">
              <b>120</b> <span style={{ fontSize: 11 }}>DAYS</span>
            </div>
            <div className="col-2 countDown">
              <b>20</b> <span style={{ fontSize: 11 }}>HRS</span>
            </div>
            <div className="col-2 countDown">
              <b>36</b> <span style={{ fontSize: 11 }}>MINS</span>
            </div>
            <div className="col-2 countDown">
              <b>60</b> <span style={{ fontSize: 11 }}>SEC</span>
            </div>
          </div>
          <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
          <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
          <p>
            <span style={{ color: "#0f6cb2" }}>$600.00</span>{" "}
            <hr
              style={{ width: 48, position: "absolute", bottom: 55, left: 92 }}
            />
            <span style={{ color: "grey", margin: 17 }}>$800.00</span>
          </p>
          <div
            className="row"
            style={{ width: 150, textAlign: "center", margin: 5 }}
          >
            <div
              className="col-md-4"
              style={{ backgroundColor: "#fdd922", padding: 3 }}
            >
              cart
            </div>
            <div
              className="col-md-8"
              style={{ backgroundColor: "#0f6cb2", padding: 3 }}
            >
              {" "}
              Add to cart
            </div>
          </div>
        </div>
    </div>
            <div class="carousel-item">
            <div className="hotdealImg">
          <div
            style={{
              width: 50,
              height: 50,
              padding: 10,
              lineHeight: 1,
              color: "white",
              textAlign: "center",
              borderRadius: "50%",
              backgroundColor: " #ff7878",
              position: "absolute",
              left: "75%",
              top: "15%",
            }}
          >
            49% OFF
          </div>
          <img
            className="img-fluid"
            src="\assets\images\hot-deals\p25.jpg"
            alt=""
            style={{ width: 230, height: 300 }}
          />
          <div className="row count">
            <div className="col-2 countDown">
              <b>120</b> <span style={{ fontSize: 11 }}>DAYS</span>
            </div>
            <div className="col-2 countDown">
              <b>20</b> <span style={{ fontSize: 11 }}>HRS</span>
            </div>
            <div className="col-2 countDown">
              <b>36</b> <span style={{ fontSize: 11 }}>MINS</span>
            </div>
            <div className="col-2 countDown">
              <b>60</b> <span style={{ fontSize: 11 }}>SEC</span>
            </div>
          </div>
          <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
          <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
          <p>
            <span style={{ color: "#0f6cb2" }}>$600.00</span>{" "}
            <hr
              style={{ width: 48, position: "absolute", bottom: 55, left: 92 }}
            />
            <span style={{ color: "grey", margin: 17 }}>$800.00</span>
          </p>
          <div
            className="row"
            style={{ width: 150, textAlign: "center", margin: 5 }}
          >
            <div
              className="col-md-4"
              style={{ backgroundColor: "#fdd922", padding: 3 }}
            >
              cart
            </div>
            <div
              className="col-md-8"
              style={{ backgroundColor: "#0f6cb2", padding: 3 }}
            >
              {" "}
              Add to cart
            </div>
          </div>
        </div>
    </div>
            <div class="carousel-item">
            <div className="hotdealImg">
          <div
            style={{
              width: 50,
              height: 50,
              padding: 10,
              lineHeight: 1,
              color: "white",
              textAlign: "center",
              borderRadius: "50%",
              backgroundColor: " #ff7878",
              position: "absolute",
              left: "75%",
              top: "15%",
            }}
          >
            49% OFF
          </div>
          <img
            className="img-fluid"
            src="\assets\images\hot-deals\p25.jpg"
            alt=""
            style={{ width: 230, height: 300 }}
          />
          <div className="row count">
            <div className="col-2 countDown">
              <b>120</b> <span style={{ fontSize: 11 }}>DAYS</span>
            </div>
            <div className="col-2 countDown">
              <b>20</b> <span style={{ fontSize: 11 }}>HRS</span>
            </div>
            <div className="col-2 countDown">
              <b>36</b> <span style={{ fontSize: 11 }}>MINS</span>
            </div>
            <div className="col-2 countDown">
              <b>60</b> <span style={{ fontSize: 11 }}>SEC</span>
            </div>
          </div>
          <p style={{ marginTop: 15 }}>Floral Print Buttoned</p>
          <div style={{ padding: 0, margin: 0 }}>⭐⭐⭐⭐⭐ </div>
          <p>
            <span style={{ color: "#0f6cb2" }}>$600.00</span>{" "}
            <hr
              style={{ width: 48, position: "absolute", bottom: 55, left: 92 }}
            />
            <span style={{ color: "grey", margin: 17 }}>$800.00</span>
          </p>
          <div
            className="row"
            style={{ width: 150, textAlign: "center", margin: 5 }}
          >
            <div
              className="col-md-4"
              style={{ backgroundColor: "#fdd922", padding: 3 }}
            >
              cart
            </div>
            <div
              className="col-md-8"
              style={{ backgroundColor: "#0f6cb2", padding: 3 }}
            >
              {" "}
              Add to cart
            </div>
          </div>
        </div>
    </div>
  </div>
</div>


      </div>

      <div
        className="row scrollAnimation"
        style={{
          marginTop: 20,
          // width: 262,
          height: 'auto',
          fontSize: 12,
          padding: 10,
          backgroundColor: "white",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
        }}
      >
        <div
          className="row"
          style={{
            borderBottom: "1px solid #e3e3e3",
            padding: 10,
            margin: 0,
            marginBottom: 10,
          }}
        >
          <b>SPECIAL OFFER</b>
        </div>

        <div className="col-6 col-md-12">
          <div className="row">
          <div className="col-md-6 pt-3">
          <img
              src="\assets\images\products\p11.jpg"
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
        <div className="col-6 col-md-12">
          <div className="row">
          <div className="col-md-6 pt-3">
          <img
              src="\assets\images\products\p19.jpg"
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
        <div className="col-6 col-md-12">
          <div className="row">
          <div className="col-md-6 pt-3">
          <img
              src="\assets\images\products\p28.jpg"
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

      <div
        className="row scrollAnimation"
        style={{
          marginTop: 20,
          // width: 262,
          height: 'auto',
          fontSize: 12,
          padding: 10,
          backgroundColor: "white",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
        }}
      >
        <div className="row">
          <div
            className="row"
            style={{
              borderBottom: "1px solid #e3e3e3",
              padding: 10,
              margin: 0,
              marginBottom: 10,
            }}
          >
            <b>PRODUCTS TAGS</b>
          </div>
        </div>

        <div className="row" style={{ fontSize: 14 }}>
          <div
            className="col"
            style={{
              backgroundColor: "#ebebeb",
              margin: 5,
              padding: 5,
              textAlign: "center",
            }}
            id="productTags"
          >
            <a href='*'id="productTags" style={{ textDecoration: "none" }}>
              Phone
            </a>
          </div>
          <div
            className="col"
            style={{
              backgroundColor: "#ebebeb",
              margin: 5,
              padding: 5,
              textAlign: "center",
            }}
            id="productTags"
          >
            <a href='*' id="productTags" style={{ textDecoration: "none" }}>
              Vest
            </a>
          </div>
          <div
            className="col"
            style={{
              backgroundColor: "#ebebeb",
              margin: 5,
              padding: 5,
              textAlign: "center",
            }}
            id="productTags"
          >
            <a href='*'id="productTags" style={{ textDecoration: "none" }}>
              Smartphones
            </a>
          </div>
        </div>
        <div className="row" style={{ fontSize: 14 }}>
          <div
            className="col"
            style={{
              backgroundColor: "#ebebeb",
              margin: 5,
              padding: 5,
              textAlign: "center",
            }}
            id="productTags"
          >
            <a href='*'id="productTags" style={{ textDecoration: "none", }}>
              Funiture
            </a>
          </div>
          <div
            className="col"
            style={{
              backgroundColor: "#ebebeb",
              margin: 5,
              padding: 5,
              textAlign: "center",
            }}
            id="productTags"
          >
            <a href='*'id="productTags" style={{ textDecoration: "none", }}>
              T-shirt
            </a>
          </div>
          <div className="col">
            {/* <a href='*'id="productTags" style={{ textDecoration: "none", }}>
              Phone
            </a> */}
          </div>
        </div>

        <div className="row" style={{ fontSize: 14 }}>
          <div
            className="col"
            style={{
              backgroundColor: "#ebebeb",
              margin: 5,
              padding: 5,
              textAlign: "center",
            }}
            id="productTags"
          >
            <a href='*'id="productTags" style={{ textDecoration: "none", }}>
              Sweatpants
            </a>
          </div>
          <div
            className="col"
            style={{
              backgroundColor: "#ebebeb",
              margin: 5,
              padding: 5,
              textAlign: "center",
            }}
            id="productTags"
          >
            <a href='*'id="productTags" style={{ textDecoration: "none", }}>
              Sneaker
            </a>
          </div>
          <div className="col">
            {/* <a href='*'id="productTags" style={{ textDecoration: "none", }}>
              Phone
            </a> */}
          </div>
        </div>

        <div className="row" style={{ fontSize: 14 }}>
          <div
            className="col"
            style={{
              backgroundColor: "#ebebeb",
              margin: 5,
              padding: 5,
              textAlign: "center",
            }}
            id="productTags"
          >
            <a href='*'id="productTags" style={{ textDecoration: "none", }}>
              Toys
            </a>
          </div>
          <div
            className="col"
            style={{
              backgroundColor: "#ebebeb",
              margin: 5,
              padding: 5,
              textAlign: "center",
            }}
            id="productTags"
          >
            <a href='*'id="productTags" style={{ textDecoration: "none", }}>
              Rose
            </a>
          </div>
          <div className="col">
            {/* <a href='*'id="productTags" style={{ textDecoration: "none", }}>
              Phone
            </a> */}
          </div>
        </div>

        <div
          className="row"
          style={{
            borderBottom: "1px solid #e3e3e3",
            padding: 10,
            margin: 0,
            marginBottom: 10,
            marginTop: 15,
          }}
        >
          <b>SPECIAL DEALS</b>
        </div>

        <div className="col-6 col-md-12">
          <div className="row">
          <div className="col-md-6 pt-3">
          <img
              src="\assets\images\products\p9.jpg"
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
        <div className="col-6 col-md-12">
          <div className="row">
          <div className="col-md-6 pt-3">
          <img
              src="\assets\images\products\p15.jpg"
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
        <div className="col-6 col-md-12">
          <div className="row">
          <div className="col-md-6 pt-3">
          <img
              src="\assets\images\products\p2.jpg"
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

      <div
        className="row scrollAnimation"
        style={{
          marginTop: 20,
          // width: 262,
          height: "auto",
          padding: 10,
          backgroundColor: "white",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
          fontSize: 15,
        }}
      >
        <div
          className="row"
          style={{
            borderBottom: "1px solid #e3e3e3",
            padding: 10,
            margin: 0,
            marginBottom: 10,
          }}
        >
          <b>NEWSLETTERS</b>
        </div>

        <div className="row" style={{ padding: 15 }}>
          <p>Sign Up for Our Newsletter!</p>
          <input
            type="email"
            placeholder="Subscribe to our newsletter"
            style={{
              height: 30,
              width: 220,
              marginLeft: 10,
              border: "1px solid grey",
              fontSize: 13,
              backgroundColor: "#fafafa",
              cursor: "pointer",
              outline: "none",
            }}
          />

          <div
            style={{
              width: 80,
              height: 35,
              backgroundColor: "#199bff",
              margin: 15,

              marginLeft: 40,
              padding: 7,
              fontSize: 14,
            }}
          >
            <a href='*'style={{ textDecoration: "none", color: "white" }}>
              Subscribe
            </a>
          </div>
        </div>
      </div>

      <div
        className="row scrollAnimation"
        style={{
          marginTop: 20,
          // width: 262,
          height: 368,
          fontSize: 15,
          padding: 20,
          backgroundColor: "white",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
          textAlign: "center",
          display: "flex",
          flexWrap: "nowrap",
          overflowX: 'scroll',
        }}
      >
        <div className="row" style={{ width: "100%", margin: 10 }}>
          <div className="row" style={{ justifyContent: "center" }}>
            <img
              src="\assets\images\testimonials\member1.png"
              alt=""
              style={{ width: 120, height: 110 }}
            />
          </div>
          <div className="row">
            <em>
              " Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc
              condime tum metus eud molest sed consectetuer."
            </em>

            <h5>John Doe</h5>
            <p>Abc Company</p>
          </div>
        </div>

        <div className="row" style={{ width: "100%", margin: 10 }}>
          <div className="row" style={{ justifyContent: "center" }}>
            <img
              src="\assets\images\testimonials\member2.png"
              alt=""
              style={{ width: 120, height: 110 }}
            />
          </div>
          <div className="row">
            <em>
              " Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc
              condime tum metus eud molest sed consectetuer."
            </em>

            <h5>John Doe</h5>
            <p>Abc Company</p>
          </div>
        </div>

        <div className="row" style={{ width: "100%", margin: 10 }}>
          <div className="row" style={{ justifyContent: "center" }}>
            <img
              src="\assets\images\testimonials\member3.png"
              alt=""
              style={{ width: 120, height: 110 }}
            />
          </div>
          <div className="row">
            <em>
              " Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc
              condime tum metus eud molest sed consectetuer."
            </em>

            <h5>John Doe</h5>
            <p>Abc Company</p>
          </div>
        </div>

        <div className="row" style={{ width: "100%", margin: 10 }}>
          <div className="row" style={{ justifyContent: "center" }}>
            <img
              src="\assets\images\testimonials\member4.png"
              alt=""
              style={{ width: 120, height: 110 }}
            />
          </div>
          <div className="row">
            <em>
              " Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc
              condime tum metus eud molest sed consectetuer."
            </em>

            <h5>John Doe</h5>
            <p>Abc Company</p>
          </div>
        </div>
      </div>

      <div
        className="row scrollAnimation"
        style={{
          marginTop: 20,
          // width: 262,
          height: "auto",
          fontSize: 12,
          padding: 10,
          backgroundColor: "white",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
          marginBottom:20
        }}
      >
        <img src="\assets\images\banners\LHS-banner.jpg" alt="" />
      </div>
    </div>
  );
}
