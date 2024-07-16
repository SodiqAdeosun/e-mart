import React, { useState } from "react";
import Footer from "../Component/Footer";
import Brand from "../Component/Brands";
import Header from "../Component/Header";
import {
  FaUser,
  FaComments,
  FaCalendarAlt,
  FaSearch,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

function Blog() {
  const [plus, setPlus] = useState(<FaPlus />);
  const blogContent = [
    {
      picture: "/assets/images/blog-post/blog_big_01.jpg",
      user: "John Doe",
    },
    {
      picture: "/assets/images/blog-post/blog_big_02.jpg",
      user: "Sarah mdith",
    },
    {
      picture: "/assets/images/blog-post/blog_big_03.jpg",
      user: "Mark Doe",
    },
  ];

  const handlePlusChange = () => {
    if (plus) {
      setPlus(<FaMinus />);
    } else if (plus === <FaMinus />) {
      setPlus(<FaPlus />);
    }
  };

  const popularPost = [
    { picture: "/assets/images/blog-post/blog_big_01.jpg" },
    { picture: "/assets/images/blog-post/blog_big_02.jpg" },
  ];

  const recentPost = [
    { picture: "/assets/images/blog-post/blog_big_01.jpg" },
    { picture: "/assets/images/blog-post/blog_big_03.jpg" },
  ];

  return (
    <div
    style={{
      backgroundColor: "#f3f3f3",
      margin: 0,
      padding: 0,
      overflow:'hidden'
    }}>
      <div
        className="row header"
        style={{ margin: 0 }}
      >
        {/* <NavBar /> */}
        <Header />
      </div>
      <div
        className="row newProducts scrollAnimation"
        style={{
          fontSize: 13,
          margin: 62,
          marginTop: 52,
        }}
      >
        <div
          className="col col-md-8"
          style={{
            // width: 847,
            height: "auto",
            fontSize: 13,
          }}
        >
          {blogContent.map((fruit) => {
            return (
              <div
                key={fruit.picture}
                style={{
                  height: "auto",
                  fontSize: 13,
                  backgroundColor: "white",
                  padding: 20,
                  boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
                  marginBottom: 20,
                }}
              >
                <img className="img-fluid" src={fruit.picture} alt="fruit" />

                <div className="row" style={{ marginTop: 10, color: "grey" }}>
                  <p>
                    <a
                      href="*"
                      style={{
                        textDecoration: "none",
                        fontSize: 25,
                        color: "grey",
                      }}
                    >
                      {" "}
                      <b>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      </b>
                    </a>
                  </p>
                  <p>
                    <span>
                      <FaUser /> {fruit.user}
                    </span>{" "}
                    <span style={{ margin: 20 }}>
                      <FaComments /> 6 comments
                    </span>{" "}
                    <span>
                      <FaCalendarAlt /> 14/06/2016 10.00AM
                    </span>
                  </p>

                  <p style={{ fontSize: 14 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiumdod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum...
                  </p>

                  <div
                    style={{
                      width: "auto",
                      height: 35,
                      backgroundColor: "#199bff",
                      marginLeft: 40,
                      padding: 7,
                      fontSize: 14,
                    }}
                  >
                    <a
                      href="*"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="container col-10 col-md-2 "
          style={{
            marginLeft: 30,
          }}
        >
          <div
            className="row scrollAnimation"
            style={{
              width: 'auto',
minWidth:263,
              height: "auto",
              fontSize: 12,
              backgroundColor: "white",
              boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
              position: "relative",
            }}
          >
            <input
              type="search"
              placeholder="Type to search"
              style={{ height: 45, border: 0 }}
            />
            <div>
              <FaSearch
                style={{
                  fontSize: 15,
                  position: "absolute",
                  right: 10,
                  top: 15,
                  color: "grey",
                }}
              />
            </div>
          </div>

          <div
            className="row scrollAnimation"
            style={{
              marginTop: 20,
              width: 'auto',
minWidth:263,
              height: "auto",
              fontSize: 12,
              padding: 10,
              backgroundColor: "white",
              boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
            }}
          >
            <img className="img-fluid" src="\assets\images\banners\LHS-banner.jpg" alt="" />
          </div>

          <div
            className="row scrollAnimation"
            style={{
              width: 'auto',
minWidth:263,
              height: "auto",
              fontSize: 12,
              // padding: 10,
              backgroundColor: "white",
              boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
              marginTop: 20,
            }}
          >
            <div
              style={{
                width:'90%',
                padding: 10,
                margin:10,
                // borderBottom: "1px solid #e3e3e3",
                fontSize: 14,
                // marginBottom: 10,
              }}
            >
              <b>CATEGORY </b>
            </div>

            <div class="accordion" id="accordionExample" style={{ margin:0, padding:0}}>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{border:0,borderRadius:0, fontSize: 13}}>
        Camera
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
                
                  <div>
                    <ul className="categoryList" style={{ marginRight: 0 }}>
                      <li>gaming</li>
                      <li>office</li>
                      <li>kids</li>
                      <li>for woman</li>
                    </ul>{" "}
                  </div>
                </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-expanded="false" aria-controls="collapsetwo" style={{border:0,borderRadius:0, fontSize: 13}}>
        Desktops
      </button>
    </h2>
    <div id="collapsetwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
                
                  <div>
                    <ul className="categoryList" style={{ marginRight: 0 }}>
                      <li>gaming</li>
                      <li>office</li>
                      <li>kids</li>
                      <li>for woman</li>
                    </ul>{" "}
                  </div>
                </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3" style={{border:0,borderRadius:0, fontSize: 13}}>
        Paints
      </button>
    </h2>
    <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
                
                  <div>
                    <ul className="categoryList" style={{ marginRight: 0 }}>
                      <li>gaming</li>
                      <li>office</li>
                      <li>kids</li>
                      <li>for woman</li>
                    </ul>{" "}
                  </div>
                </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4" style={{border:0,borderRadius:0, fontSize: 13}}>
        Bags
      </button>
    </h2>
    <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
                
                  <div>
                    <ul className="categoryList" style={{ marginRight: 0 }}>
                      <li>gaming</li>
                      <li>office</li>
                      <li>kids</li>
                      <li>for woman</li>
                    </ul>{" "}
                  </div>
                </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5" style={{border:0,borderRadius:0, fontSize: 13}}>
        Hats
      </button>
    </h2>
    <div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
                
                  <div>
                    <ul className="categoryList" style={{ marginRight: 0 }}>
                      <li>gaming</li>
                      <li>office</li>
                      <li>kids</li>
                      <li>for woman</li>
                    </ul>{" "}
                  </div>
                </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6" style={{border:0,borderRadius:0, fontSize: 13}}>
        Accessories
      </button>
    </h2>
    <div id="collapse6" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
                
                  <div>
                    <ul className="categoryList" style={{ marginRight: 0 }}>
                      <li>gaming</li>
                      <li>office</li>
                      <li>kids</li>
                      <li>for woman</li>
                    </ul>{" "}
                  </div>
                </div>
    </div>
  </div>
</div>

            {/* <div style={{ color: "grey" }}>
              <div>
                <p className="d-inline-flex gap-1">
                  <button
                    className="btn "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    style={{
                      padding: 0,
                      marginLeft: -10,
                      border: 0,
                      fontSize: 13,
                      marginBottom: -10,
                    }}
                  >
                    Camera{" "}
                    <span
                      className="plumdinus"
                      style={{ marginLeft: 160, fontSize: 13 }}
                    >
                      {plus}
                    </span>
                  </button>
                </p>
                <div className="collapse" id="collapseExample">
                  <div>
                    <ul className="categoryList" style={{ marginRight: 0 }}>
                      <li>gaming</li>
                      <li>office</li>
                      <li>kids</li>
                      <li>for woman</li>
                    </ul>{" "}
                  </div>
                </div>
              </div>

              <div>
                <p className="d-inline-flex gap-1">
                  <button
                    className="btn "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample2"
                    aria-expanded="false"
                    aria-controls="collapseExample2"
                    style={{
                      padding: 0,
                      marginLeft: -10,
                      border: 0,
                      fontSize: 13,
                      marginBottom: -10,
                    }}
                  >
                    Desktops{" "}
                    <span style={{ marginLeft: 150, fontSize: 13 }}>
                      <FaPlus />
                    </span>
                  </button>
                </p>
                <div className="collapse" id="collapseExample2">
                  <div>
                    <ul className="categoryList" style={{ marginRight: 0 }}>
                      <li>gaming</li>
                      <li>office</li>
                      <li>kids</li>
                      <li>for woman</li>
                    </ul>{" "}
                  </div>
                </div>
              </div>

              <div>
                <p className="d-inline-flex gap-1">
                  <button
                    className="btn "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample1"
                    aria-expanded="false"
                    aria-controls="collapseExample1"
                    style={{
                      padding: 0,
                      marginLeft: -10,
                      border: 0,
                      fontSize: 13,
                      marginBottom: -10,
                    }}
                  >
                    Panits{" "}
                    <span style={{ marginLeft: 170, fontSize: 13 }}>
                      <FaPlus />
                    </span>
                  </button>
                </p>
                <div className="collapse" id="collapseExample1">
                  <div>
                    <ul className="categoryList" style={{ marginRight: 0 }}>
                      <li>gaming</li>
                      <li>office</li>
                      <li>kids</li>
                      <li>for woman</li>
                    </ul>{" "}
                  </div>
                </div>
              </div>

              <div>
                <p className="d-inline-flex gap-1">
                  <button
                    className="btn "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample3"
                    aria-expanded="false"
                    aria-controls="collapseExample3"
                    style={{
                      padding: 0,
                      marginLeft: -10,
                      border: 0,
                      fontSize: 13,
                      marginBottom: -10,
                    }}
                  >
                    Bags{" "}
                    <span style={{ marginLeft: 175, fontSize: 13 }}>
                      <FaPlus />
                    </span>
                  </button>
                </p>
                <div className="collapse" id="collapseExample3">
                  <div>
                    <ul className="categoryList" style={{ marginRight: 0 }}>
                      <li>gaming</li>
                      <li>office</li>
                      <li>kids</li>
                      <li>for woman</li>
                    </ul>{" "}
                  </div>
                </div>
              </div>

              <div>
                <p className="d-inline-flex gap-1">
                  <button
                    className="btn "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample4"
                    aria-expanded="false"
                    aria-controls="collapseExample4"
                    style={{
                      padding: 0,
                      marginLeft: -10,
                      border: 0,
                      fontSize: 13,
                      marginBottom: -10,
                    }}
                  >
                    Hats{" "}
                    <span style={{ marginLeft: 178, fontSize: 13 }}>
                      <FaPlus />
                    </span>
                  </button>
                </p>
                <div className="collapse" id="collapseExample4">
                  <div>
                    <ul className="categoryList" style={{ marginRight: 0 }}>
                      <li>gaming</li>
                      <li>office</li>
                      <li>kids</li>
                      <li>for woman</li>
                    </ul>{" "}
                  </div>
                </div>
              </div>

              <div>
                <p className="d-inline-flex gap-1">
                  <button
                    className="btn "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample5"
                    aria-expanded="false"
                    aria-controls="collapseExample5"
                    style={{
                      padding: 0,
                      marginLeft: -10,
                      border: 0,
                      fontSize: 13,
                      marginBottom: -10,
                    }}
                  >
                    Accessories
                    <span style={{ marginLeft: 140, fontSize: 13 }}>
                      <FaPlus />
                    </span>
                  </button>
                </p>
                <div className="collapse" id="collapseExample5">
                  <div>
                    <ul className="categoryList" style={{ marginRight: 0 }}>
                      <li>gaming</li>
                      <li>office</li>
                      <li>kids</li>
                      <li>for woman</li>
                    </ul>{" "}
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div
            className="row scrollAnimation"
            style={{
              marginTop: 20,
              width: 'auto',
minWidth:263,
              fontSize: 11,
              padding: 10,
              backgroundColor: "white",
              boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
            }}
          >
            <div>
              <div
                style={{
                  padding: "10px 0px 8px 0px ",
                  borderBottom: "1px solid #e3e3e3",
                  fontSize: 14,
                  marginRight: 0,
                }}
              >
                <b>TAB WIDGET</b>
              </div>
            </div>
            <ul className="d-flex g-2" style={{ listStyle:'none', fontSize:13}}>
              <li style={{margin:3}}>
                <NavLink to='popularpost' style={{textDecoration:'none',paddingRight:10, borderRight:'1px solid black'}}>POPULAR POST</NavLink>
              </li>
              <li style={{margin:3}}>
                <NavLink to='recentpost' style={{textDecoration:'none'}}> RECENT POST</NavLink>
              </li>
            </ul>

            <Outlet />
            <div className="tab-content" id="nav-tabContent">


            </div>
          </div>

          <div
            className="row scrollAnimation"
            style={{
              width: 'auto',
minWidth:263,
              height: "auto",
              fontSize: 12,
              padding: 10,
              backgroundColor: "white",
              boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
              marginTop: 20,
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
                <a href="*" id="productTags" style={{ textDecoration: "none" }}>
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
                <a href="*" id="productTags" style={{ textDecoration: "none" }}>
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
                <a href="*" id="productTags" style={{ textDecoration: "none" }}>
                  mdartphones
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
                <a href="*" id="productTags" style={{ textDecoration: "none" }}>
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
                <a href="*" id="productTags" style={{ textDecoration: "none" }}>
                  T-shirt
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
                <a href="*" id="productTags" style={{ textDecoration: "none" }}>
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
                <a href="*" id="productTags" style={{ textDecoration: "none" }}>
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
                <a href="*" id="productTags" style={{ textDecoration: "none" }}>
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
                <a href="*" id="productTags" style={{ textDecoration: "none" }}>
                  Rose
                </a>
              </div>
            </div>
          </div>



        </div>
      </div>
      <Brand />
      <Footer />
    </div>
  );
}

export default Blog;
