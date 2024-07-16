import React from "react";
import {
  FaTwitter, FaFacebookF,FaGooglePlusG,FaRss,FaPinterest,FaLinkedinIn,FaYoutube
} from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="row "
      style={{
        marginTop: 20,
      }}
    >
      <div
        className="row "
        style={{
          backgroundColor: "#202020",

          padding: 70,
          paddingTop: 20,
          paddingBottom: 0,
          color: "#666666",
        }}
      >
        <div className="col">
          <div className="row">
            <h6>CONTACT US</h6>
          </div>
          <div className="row" style={{ margin: 10 }}>
            <div className="col-md-2">🗺️</div>
            <div className="col-md-8">
              789 Iju road, Lagos, Nigeria
            </div>
          </div>

          <div className="row" style={{ margin: 10 }}>
            <div className="col-md-2">☎️</div>
            <div className="col-md-8">+2348034251770</div>
          </div>

          <div className="row" style={{ margin: 10 }}>
            <div className="col-md-2">✉️</div>
            <div className="col-md-8 footer">
              <a href='*' style={{textDecoration:'none'}}>e-mart@mall.com</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <h6>CUSTOMER SERVICE</h6>
          </div>
          <ul id="footer">
            <li style={{ margin: 5 }}>
              <a href="" style={{ textDecoration: "none" }}>
                My Account
              </a>
            </li>
            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                Order History
              </a>
            </li>
            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                FAQ
              </a>
            </li>

            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                Specials
              </a>
            </li>

            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                Help Center
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <div className="row">
            <h6>CORPORATION </h6>
          </div>
          <ul id="footer">
            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                About us
              </a>
            </li>
            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                Customer Service
              </a>
            </li>
            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                Company
              </a>
            </li>

            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                Investor Relations
              </a>
            </li>

            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                Advanced Search
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <div className="row">
            <h6>WHY CHOOSE US </h6>
          </div>
          <ul id="footer">
            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                Shopping Guide
              </a>
            </li>
            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                Blog
              </a>
            </li>
            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                Company
              </a>
            </li>

            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                Investor Relations
              </a>
            </li>

            <li style={{ margin: 5 }}>
              <a href='*'style={{ textDecoration: "none" }}>
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="row"
        style={{
          padding: 17,
          paddingLeft: 80,
          backgroundColor: "#121212",
          justifyContent: "space-around",
        }}
      >
        <div className="col-md">
          <a href='*'>
          <FaFacebookF
            style={{ width: 35, height: 35,backgroundColor: '#3c5b9b', color:'white',padding:10, borderRadius:3, margin:2 }}
          />
          </a>

          <a href="">
          <FaTwitter
            style={{ width: 35, height: 35,backgroundColor: '#359bed', color:'white',padding:10, borderRadius:3,margin:2}}
          />

          </a>
          <a href='*'>
          <FaGooglePlusG
            style={{ width: 35, height: 35,backgroundColor: '#e33729', color:'white',padding:10, borderRadius:3,margin:2}}
          />
          </a>
          <a href='*'>
          <FaRss
            style={{ width: 35, height: 35,backgroundColor: '#fd9f13', color:'white',padding:10, borderRadius:3,margin:2}}
          />
          </a>
          <a href='*'>
          <FaPinterest
            style={{ width: 35, height: 35,backgroundColor: '#cb2027', color:'white',padding:10, borderRadius:3,margin:2}}
          />
          </a>
          <a href='*'>
          <FaLinkedinIn
            style={{ width: 35, height: 35,backgroundColor: '#027ba5', color:'white',padding:10, borderRadius:3,margin:2}}
          />
          </a>

          <a href='*'>
          <FaYoutube
            style={{ width: 35, height: 35,backgroundColor: '#f03434', color:'white',padding:10, borderRadius:3,margin:2}}
          />
          </a>

        </div>
        <div className="col-md-2"></div>
        <div className="col-md-3"></div>

        <div className="col-md">
          <img
            src="\assets\images\payments\1.png"
            alt=""
            style={{ width: 40, height: 30, margin: 5 }}
          />


          <img
            src="\assets\images\payments\3.png"
            alt=""
            style={{ width: 40, height: 30, margin: 5 }}
          />

          <img
            src="\assets\images\payments\4.png"
            alt=""
            style={{ width: 40, height: 30, margin: 5 }}
          />

        </div>
      </div>
    </div>
  );
}
