import React from "react";
import {
  FaBars,
  FaTshirt,
  FaGreaterThan,
  FaLaptop,
  FaPaw,
  FaRegClock,
  FaRing,
  FaHeartbeat,
  FaPaperPlane,
  FaBasketballBall,
  FaLeaf,
} from "react-icons/fa";

class SideBar extends React.Component {
  constructor(porps) {
    super(porps);

    this.state = {
      clothingDropdown1: false,
      electronicsDropdown1: false,
      pageDropdown1: false,
    };
  }

  onClothingclick = () => {
    this.setState({ clothingDropdown1: true });
  };
  onClothingMouseOut1 = () => {
    this.setState({ clothingDropdown1: false });
  };

  onElectronicmdouseOver1 = () => {
    this.setState({ electronicsDropdown1: true });
  };
  onElectronicmdouseOut1 = () => {
    this.setState({ electronicsDropdown1: false });
  };

  onPageMouseOver = () => {
    this.setState({ pageDropdown: true });
  };

  render() {
    return (
      <div
        className="row sidebar"
        style={{
          // width: 262,
          height: "auto",
          fontSize: 14,
          backgroundColor: "white",

          boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
        }}
      >
        <div className="category-wrapper">
          <FaBars style={{ fontSize: 15, margin: 5 }} />
          <b>CATEGORIES</b>{" "}
          <span
            className="fa-solid fa-chevron-right"
            style={{
              fontSize: 8,
              marginLeft: 100,
              color: "rgb(201, 192, 192)",
            }}
          />
        </div>
        <a href='*'style={{ textDecoration: "none", padding: 0 }}>
          <div
            className="row clothing1"
            id="dropdownButton2"
            onMouseOver={this.onClothingclick}
            onMouseOut={this.onClothingMouseOut1}
            style={{
              height: 43,
              margin: 1,
              padding: 10,
              backgroundColor: "white",
              borderBottom: "1px solid rgb(234, 234, 234)",
              position: "relative",
              color: "#888",
            }}
          >
            <span style={{ paddingLeft: 0, margin: 0, marginLeft: -5 }}>
              {" "}
              <FaTshirt style={{ width: 15, height: "auto", margin: 5 }} />{" "}
              Clothings{" "}
              <span
                style={{
                  float: "right",
                  fontSize: 8,
                  padding: 5,
                  marginRight: -10,
                }}
              >
                <FaGreaterThan />
              </span>
            </span>
            <div
              className={`dropdown-item ${
                this.state.clothingDropdown1 ? "show" : ""
              }`}
              id="dropdownContent2"
            >
              <div
                className="sidetable-div"
                style={{
                  backgroundColor: "white",
                  display: this.state.clothingDropdown1 ? "flex" : "none",
                }}
              >
                <table className="table table-responsive table-borderless">
                  <tr>
                    <td>Dresses</td>
                    <td>Handbags</td>
                    <td>Toy &amp; Games</td>
                    <td>Sandals</td>
                  </tr>
                  <tr>
                    <td>Shoes</td>
                    <td>Jwellery</td>
                    <td>Jeans</td>
                    <td>Shorts</td>
                  </tr>
                  <tr>
                    <td>Jackets</td>
                    <td>Swimwear</td>
                    <td>Shirts</td>
                    <td>Dresses</td>
                  </tr>
                  <tr>
                    <td>Sunglasses</td>
                    <td>Tops</td>
                    <td>Shoes</td>
                    <td>Jwellery</td>
                  </tr>
                  <tr>
                    <td>Sport Wear</td>
                    <td>Flats</td>
                    <td>School Bags</td>
                    <td>Bags</td>
                  </tr>
                  <tr>
                    <td>Blazers</td>
                    <td>Shoes</td>
                    <td>Lunch Box</td>
                    <td>Night Dress</td>
                  </tr>
                  <tr>
                    <td>Shirts</td>
                    <td>Winter Wear</td>
                    <td>Footwear</td>
                    <td>Swim Wear</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </a>

        <a href='*'style={{ textDecoration: "none", padding: 0 }}>
          <div
            className="row"
            onMouseOver={this.onElectronicmdouseOver1}
            onMouseOut={this.onElectronicmdouseOut1}
            style={{
              height: 43,
              margin: 1,
              padding: 10,
              color: "#888",
              backgroundColor: "white",
              borderBottom: "1px solid rgb(234, 234, 234)",
              position: "relative",
            }}
          >
            <span style={{ paddingLeft: 0, margin: 0, marginLeft: -5 }}>
              {" "}
              <FaLaptop style={{ width: 15, height: "auto", margin: 5 }} />{" "}
              Electronics{" "}
              <span
                style={{
                  float: "right",
                  fontSize: 8,
                  padding: 5,
                  marginRight: -10,
                }}
              >
                <FaGreaterThan />
              </span>
            </span>

            <div
              className={`dropdown-item ${
                this.state.electronicsDropdown1 ? "show" : ""
              }`}
              id="dropdownContent2"
            >
              <div
                className="sidetable-div1"
                style={{
                  display: this.state.electronicsDropdown1 ? "flex" : "none",
                  backgroundColor: "white",
                  height: 350,
                  padding: 0,
                }}
              >
                <table
                  className="table table-borderless"
                  style={{
                    height: "auto",
                    margin: 20,
                  }}
                >
                  <tr>
                    <td>Gaming</td>
                    <td>Routers &amp; Modems</td>
                  </tr>
                  <tr>
                    <td>Laptop Skins</td>
                    <td>CPUs, Processors</td>
                  </tr>
                  <tr>
                    <td>Apple</td>
                    <td>PC Gaming Store</td>
                  </tr>
                  <tr>
                    <td>Dell</td>
                    <td>Graphics Cards</td>
                  </tr>
                  <tr>
                    <td>Lenovo</td>
                    <td>Components</td>
                  </tr>
                  <tr>
                    <td>microsoft</td>
                    <td>Webcam</td>
                  </tr>
                  <tr>
                    <td>Asus</td>
                    <td>Memory (RAM)</td>
                  </tr>
                  <tr>
                    <td>Adapters</td>
                    <td>Motherboards</td>
                  </tr>
                  <tr>
                    <td>Batteries</td>
                    <td>Keyboards</td>
                  </tr>
                  <tr>
                    <td>Coolind Pads</td>
                    <td>Headphones</td>
                  </tr>
                </table>
                <img
                  src="/assets/images/banners/banner-side.png"
                  alt=""
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </a>

        <a href='*'style={{ textDecoration: "none", padding: 0 }}>
          <div
            style={{
              height: 43,
              margin: 1,
              padding: 10,
              backgroundColor: "white",
              borderBottom: "1px solid rgb(234, 234, 234)",
              color: "#888",
            }}
          >
            <span style={{ paddingLeft: 0, margin: 0, marginLeft: -5 }}>
              {" "}
              <FaPaw
                style={{ width: 15, height: "auto", margin: 5 }}
              /> Shoes{" "}
              <span
                style={{
                  float: "right",
                  fontSize: 8,
                  padding: 5,
                  marginRight: 8,
                }}
              >
                <FaGreaterThan />
              </span>
            </span>
          </div>
        </a>

        <a href='*'style={{ textDecoration: "none", padding: 0 }}>
          <div
            style={{
              height: 43,
              margin: 1,
              padding: 10,
              backgroundColor: "white",
              borderBottom: "1px solid rgb(234, 234, 234)",
              color: "#888",
            }}
          >
            <span style={{ paddingLeft: 0, margin: 0, marginLeft: -5 }}>
              {" "}
              <FaRegClock
                style={{ width: 15, height: "auto", margin: 5 }}
              />{" "}
              Watches{" "}
              <span
                style={{
                  float: "right",
                  fontSize: 8,
                  padding: 5,
                  marginRight: 8,
                }}
              >
                <FaGreaterThan />
              </span>
            </span>
          </div>
        </a>

        <a href='*'style={{ textDecoration: "none", padding: 0 }}>
          <div
            style={{
              height: 43,
              margin: 1,
              padding: 10,
              backgroundColor: "white",
              borderBottom: "1px solid rgb(234, 234, 234)",
              color: "#888",
            }}
          >
            <span style={{ paddingLeft: 0, margin: 0, marginLeft: -5 }}>
              {" "}
              <FaRing style={{ width: 15, height: "auto", margin: 5 }} />{" "}
              Jewellery{" "}
              <span
                style={{
                  float: "right",
                  fontSize: 8,
                  padding: 5,
                  marginRight: 8,
                }}
              >
                <FaGreaterThan />
              </span>
            </span>
          </div>
        </a>

        <a href='*'style={{ textDecoration: "none", padding: 0 }}>
          <div
            style={{
              height: 43,
              margin: 1,
              padding: 10,
              backgroundColor: "white",
              borderBottom: "1px solid rgb(234, 234, 234)",
              color: "#888",
            }}
          >
            <span style={{ paddingLeft: 0, margin: 0, marginLeft: -5 }}>
              {" "}
              <FaHeartbeat
                style={{ width: 15, height: "auto", margin: 5 }}
              />{" "}
              Health and Beauty{" "}
              <span
                style={{
                  float: "right",
                  fontSize: 8,
                  padding: 5,
                  marginRight: 8,
                }}
              >
                <FaGreaterThan />
              </span>
            </span>
          </div>
        </a>

        <a href='*'style={{ textDecoration: "none", padding: 0 }}>
          <div
            style={{
              height: 43,
              margin: 1,
              padding: 10,
              backgroundColor: "white",
              borderBottom: "1px solid rgb(234, 234, 234)",
              color: "#888",
            }}
          >
            <span style={{ paddingLeft: 0, margin: 0, marginLeft: -5 }}>
              {" "}
              <FaPaperPlane
                style={{ width: 15, height: "auto", margin: 5 }}
              />{" "}
              Kids and Babies{" "}
              <span
                style={{
                  float: "right",
                  fontSize: 8,
                  padding: 5,
                  marginRight: 8,
                }}
              >
                <FaGreaterThan />
              </span>
            </span>
          </div>
        </a>

        <a href='*'style={{ textDecoration: "none", padding: 0 }}>
          <div
            style={{
              height: 43,
              margin: 1,
              padding: 10,
              backgroundColor: "white",
              borderBottom: "1px solid rgb(234, 234, 234)",
              color: "#888",
            }}
          >
            <span style={{ paddingLeft: 0, margin: 0, marginLeft: -5 }}>
              {" "}
              <FaBasketballBall
                style={{ width: 15, height: "auto", margin: 5 }}
              />{" "}
              Sports{" "}
              <span
                style={{
                  float: "right",
                  fontSize: 8,
                  padding: 5,
                  marginRight: 8,
                }}
              >
                <FaGreaterThan />
              </span>
            </span>
          </div>
        </a>

        <a href='*'style={{ textDecoration: "none", padding: 0 }}>
          <div
            style={{
              height: 43,
              margin: 1,
              padding: 10,
              backgroundColor: "white",
              // borderBottom: "1px solid rgb(234, 234, 234)",
              color: "#888",
            }}
          >
            <span style={{ paddingLeft: 0, margin: 0, marginLeft: -5 }}>
              {" "}
              <FaLeaf style={{ width: 15, height: "auto", margin: 5 }} /> Home
              and Garden{" "}
              <span
                style={{
                  float: "right",
                  fontSize: 8,
                  padding: 5,
                  marginRight: 8,
                }}
              >
                <FaGreaterThan />
              </span>
            </span>
          </div>
        </a>
      </div>
    );
  }
}

export default SideBar;
