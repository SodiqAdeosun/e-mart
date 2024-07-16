import React from "react";
import {
    FaUser,
    FaHeart,
    FaShoppingCart,
    FaCheck,
    FaLock,
    FaSearch
} from "react-icons/fa";
  import Menu from "./Menu";


class Header extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = {
            currencyDropdown: false,
            languageDropdown: false,
        };
    }
    onCurrencyMouseOver = () => {
        this.setState({ currencyDropdown: true });
    };
    onCurrencyMouseOut = () => {
        this.setState({ currencyDropdown: false });
    };
    
    onLanguageMouseOver = () => {
        this.setState({ languageDropdown: true });
    };
    onLanguageMouseOut = () => {
        this.setState({ languageDropdown: false });
    };
    render() {
        return (
            <>
                <div className="row first" style={{padding:0, margin:0}}>
                <div className="col"></div>
                    <div className="col-auto" >
                        <ul className="nav" style={{ fontSize: 12 }}>
                            <li
                                className="nav-item dropdown"
                                id="dropdownButton"
                                onMouseOver={this.onCurrencyMouseOver}
                                onMouseOut={this.onCurrencyMouseOut}
                            >
                                <a className="nav-link text-white" href='*'>
                                    USD
                                </a>
                                <ul
                                    className={`currency dropdown-menu ${this.state.currencyDropdown ? "show" : ""
                                        }`}
                                    id="dropdownContent"
                                >
                                    <li>
                                        <a className="dropdown-item" href='*'>
                                            USD
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href='*'>
                                            INR
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href='*'>
                                            GBP
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown" id="dropdownButton1">
                                <a
                                    className="nav-link active dropdown-toggle text-white"
                                    data-bs-toggle="dropdown"
                                    onMouseOver={this.onLanguageMouseOver}
                                    onMouseOut={this.onLanguageMouseOut}
                                    href='*'
                                >
                                    English
                                </a>
                                <ul
                                    id="dropdownContent1"
                                    className={`language dropdown-menu ${this.state.languageDropdown ? "show" : ""
                                        }`}
                                >
                                    <li>
                                        <a className="dropdown-item" href='*'>
                                            English
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href='*'>
                                            French
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href='*'>
                                            German
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item align-items-auto">
                                <a className="nav-link text-white" href='*'>
                                    <FaUser style={{  }} /> My Account
                                </a>
                            </li>
                            <div
                                style={{
                                    width: 1,
                                    height: 20,
                                    margin: 0,
                                    borderRight: "1px solid white",
                                    marginTop: 9,
                                }}
                            ></div>
                            <li className="nav-item ">
                                <a className="nav-link text-white" href='*'>
                                    <FaHeart style={{  }} /> Wishlist
                                </a>
                            </li>
                            <div
                                style={{
                                    width: 1,
                                    height: 20,
                                    margin: 0,
                                    borderRight: "1px solid white",
                                    marginTop: 9,
                                }}
                            ></div>
                            <li className="nav-item">
                                <a className="nav-link text-white" href='*'>
                                    <FaShoppingCart style={{ padding: 1 }} /> My cart
                                </a>
                            </li>
                            <div
                                style={{
                                    width: 1,
                                    height: 20,
                                    margin: 0,
                                    borderRight: "1px solid white",
                                    marginTop: 9,
                                }}
                            ></div>
                            <li className="nav-item">
                                <a className="nav-link text-white" href='*'>
                                    <span className="fa-solid fa-check" />
                                    <FaCheck style={{ padding: 1 }} /> Checkout
                                </a>
                            </li>
                            <div
                                style={{
                                    width: 1,
                                    height: 20,
                                    margin: 0,
                                    borderRight: "1px solid #2196f3",
                                    marginTop: 9,
                                }}
                            ></div>
                            <li className="nav-item">
                                <a className="nav-link text-white" href='*'>
                                    <span className="fa-solid fa-lock" style={{ fontSize: 10 }} />
                                    <FaLock style={{ padding: 1 }} /> Login
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>

                

                <div className="row second">
                <div>
        <div className="row mt-3" style={{ Content: "space-around" }}>
                            <div className="col-md-3" style={{ paddingLeft: 50, fontFamily: 'fantasy', fontSize: 30, textShadow:'2px 2px green'}}>
                                E-MART
          </div>
          <div
            className="col-md-6 d-flex bg-white"
            style={{ height: 45, fontSize: "small", padding: 0 ,}}
          >
            <div className="col-auto" style={{ backgroundColor: "#f6f6f6" }}>
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
            <div className="col">
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
            <div className="col-auto" style={{ backgroundColor: "#fdd922" }}>
              <FaSearch style={{ padding: 15, width: "100%", height: 45}} />
            </div>
          </div>
          <div
            className="col-auto d-flex"
            style={{
              backgroundColor: "#006cb4",
              border: "1px solid #08619c",
            //   width: "14%",
              height: 45,
              fontSize: "small",
              marginLeft: 25,
              borderRadius: 5,
            }}
          >
            <div
              className="col-auto d-flex"
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
              className="col"
              style={{
                fontSize: 14,
                textAlign: "center",
                  padding: 10,
                boxSizing: "border-box",
                color: "white",
              }}
            >
              <p style={{marginLeft:5}}>CART-$600.00</p>
            </div>
          </div>
        </div>
      </div>

                </div>

                <div className="row  third" id="menu" >
                    < Menu />
                </div>
            </>
        )
    }
}


export default Header
