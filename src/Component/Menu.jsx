import React from "react";
class Menu extends React.Component {
  constructor(porps) {
    super(porps);
    this.state = {
      clothingDropdown: false,
      electronicsDropdown: false,
      pageDropdown: false,
    };
  }

  onClothingMouseOver = () => {
    this.setState({ clothingDropdown: true });
  };
  onClothingMouseOut = () => {
    this.setState({ clothingDropdown: false });
  };

  onElectronicmdouseOver = () => {
    this.setState({ electronicsDropdown: true });
  };
  onElectronicmdouseOut = () => {
    this.setState({ electronicsDropdown: false });
  };

  onPageMouseOver = () => {
    this.setState({ pageDropdown: true });
  };
  onPageMouseOut = () => {
    this.setState({ pageDropdown: false });
  };

  render() {
    return (
      < >
        <div
          className="col home"
          style={{
            textAlign: "center",
            padding: 10,
            // backgroundColor: "#08619c",
          }}
        >
          <a href="/" style={{textDecoration:'none', color:'white'}}>

          HOME
          </a>
        </div>
        <div
          className="col dropdown clothing"
          id="dropdownButton2"
          onMouseOver={this.onClothingMouseOver}
          onMouseOut={this.onClothingMouseOut}
          style={{  padding: 10 }}
        >
          CLOTHINGS
          <div
            className={`dropdown-item ${
              this.state.clothingDropdown ? "show" : ""
            }`}
            id="dropdownContent2"
          >
            <div
              className="table-div"
              style={{ display: this.state.clothingDropdown ? "flex" : "none" }}
            >
              <table className="table table-responsive table-borderless">
                <tr>
                  <th>Men</th>
                  <th> Women</th>
                  <th> Boys</th>
                  <th>Girls</th>
                </tr>
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
              <img src="/assets/images/banners/top-menu-banner.jpg" alt="" />
            </div>
          </div>
        </div>
        <div
          className="col dropdown "
          id="dropdownButton3"
          onMouseOver={this.onElectronicmdouseOver}
          onMouseOut={this.onElectronicmdouseOut}
          style={{  padding: 10 }}
        >
          <span className="label label-danger">HOT</span>
          <div className="triangle" />
          ELECTRONICS
          <div
            className={`dropdown-item" ${
              this.state.electronicsDropdown ? "show" : ""
            } id="dropdownContent3`}
          >
            <div
              className="table-div1"
              style={{
                display: this.state.electronicsDropdown ? "flex" : "none",
              }}
            >
              <table className="table table-borderless">
                <tr>
                  <th>Laptops</th>
                  <th> Desktops</th>
                  <th> Cameras</th>
                  <th>Mobile Phones</th>
                </tr>
                <tr>
                  <td>Gaming</td>
                  <td>Routers &amp; Modems</td>
                  <td>Accessories</td>
                  <td>Apple</td>
                </tr>
                <tr>
                  <td>Laptop Skins</td>
                  <td>CPUs, Processors</td>
                  <td>Binoculars</td>
                  <td>Samsung</td>
                </tr>
                <tr>
                  <td>Apple</td>
                  <td>PC Gaming Store</td>
                  <td>Telescopes</td>
                  <td>Lenovo</td>
                </tr>
                <tr>
                  <td>Dell</td>
                  <td>Graphics Cards</td>
                  <td>Camcoder</td>
                  <td>Motorola</td>
                </tr>
                <tr>
                  <td>Lenovo</td>
                  <td>Components</td>
                  <td>Digital</td>
                  <td>LeEco</td>
                </tr>
                <tr>
                  <td>microsoft</td>
                  <td>Webcam</td>
                  <td>Film Cameras</td>
                  <td>Asus</td>
                </tr>
                <tr>
                  <td>Asus</td>
                  <td>Memory (RAM)</td>
                  <td>Flashes</td>
                  <td>Acer</td>
                </tr>
                <tr>
                  <td>Adapters</td>
                  <td>Motherboards</td>
                  <td>Lenses</td>
                  <td>Accessories</td>
                </tr>
                <tr>
                  <td>Batteries</td>
                  <td>Keyboards</td>
                  <td>Survellance</td>
                  <td>Headphones</td>
                </tr>
                <tr>
                  <td>Coolind Pads</td>
                  <td>Headphones</td>
                  <td>tripods</td>
                  <td>Memory Cards</td>
                </tr>
              </table>
              <img
                src="/assets/images/banners/banner-side.png"
                alt=""
                style={{ margin: 20, height: 350 }}
              />
            </div>
          </div>
        </div>
        <div
          className="col-md-1 health"
          style={{
            width: 145,
            padding: 10,
            position: "relative",
          }}
        >
          <span className="label label-warning">NEW</span>
          <div className="triangle1" />
          HEALTH &amp; BEAUTY
        </div>
        <div
          className="col"
          id="Watches"
          style={{
            padding: 10,
            textAlign: "center",
          }}
        >
          WATCHES
        </div>
        <div
          className="col Jewellery"
          style={{              textAlign: "center",
          padding: 10 }}
        >
          JEWELLERY
        </div>
        <div
          className="col Shoes"
          style={{ width: 65,             textAlign: "center",
          padding: 10 }}
        >
          SHOES
        </div>
        <div
          className="col Kids"
          style={{
            width: 120,
            textAlign: "center",

            padding: 10,
          }}
        >
          KIDS & GIRLS
        </div>

        <div
          className="col"
          onMouseOver={this.onPageMouseOver}
          onMouseOut={this.onPageMouseOut}
          style={{
            padding: 10,
            textAlign: "center",
            position: "relative",
          }}
        >
          PAGES
          <div
            className={`dropdown-item table-div2" ${
              this.state.pageDropdown ? "show" : ""
            }  id="dropdownContent4`}
          >
            <div
              className="dropdown-menu pageList"
              style={{ display: this.state.pageDropdown ? "block" : "none" }}
            >
              <ul style={{ listStyle: "none" }}>
                <li>Home</li>
                <li>Category</li>
                <li>Detail</li>
                <li>Shopping Cart Summary</li>
                <li>Checkout</li>
                <li>Blog</li>
                <li>Blog Detail</li>
                <li>Contact</li>
                <li>Sign In</li>
                <li>Wishlist</li>
                <li>Terms and Condition</li>
                <li>Track Orders</li>
                <li>Product-Comparison</li>
                <li>FAQ</li>
                <li>404</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className=" col-md-2 today"
          style={{
            padding: 10,
            color: "#fdd922",
            textAlign: "center",
          }}
        >
          TODAYS OFFER
        </div>
      </>
    );
  }
}

export default Menu;
