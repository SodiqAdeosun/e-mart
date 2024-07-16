import React from "react";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaCheck,
  FaLock,
} from "react-icons/fa";

class TopNavbar extends React.Component {
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
      <div>
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
              className={`currency dropdown-menu ${
                this.state.currencyDropdown ? "show" : ""
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
              className={`language dropdown-menu ${
                this.state.languageDropdown ? "show" : ""
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
          <li className="nav-item">
            <a className="nav-link text-white" href='*'>
              <FaUser style={{ padding: 1 }} /> My Account
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
              <FaHeart style={{ padding: 1 }} /> Wishlist
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
              <FaShoppingCart style={{ padding: 1 }} /> My cart
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
    );
  }
}

export default TopNavbar;
