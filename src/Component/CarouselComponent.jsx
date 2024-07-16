import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const images = [
    "/assets/images/sliders/01.jpg",
    "/assets/images/sliders/02.jpg",
  ];

  return (
    <div
      className="row scrollAnimation"
      style={{
        // minWidth: 843,
        margin: 0,
        padding: 0,
        position: "relative",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
      }}
    >
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={2000}
        indicators={false}
        controls={false}
        prevLabel="Previous"
        fade={true}
        style={{ margin: 0, padding: 0 }}
      >
        <Carousel.Item>
          <img src="/assets/images/sliders/01.jpg" class="img-fluid" alt="" />
          <Carousel.Caption
            className="carousel-caption "
            style={{
              padding: 0,
              margin: 0,
              position: "absolute",
              top: 90,
              left: -255,
            }}
          >
            <h5
              style={{
                color: "white",
                fontSize: 14,
                marginLeft: -250,
              }}
            >
              {" "}
              TOP BRANDS
            </h5>
            <h1 style={{ color: "white" }}>NEW COLLECTION</h1>
            <p style={{ color: "white", marginLeft: 60 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button
              className="btn btn-default btn-primary"
              style={{ marginLeft: -230, fontSize: 14, borderRadius: 3 }}
            >
              SHOP NOW
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="/assets/images/sliders/02.jpg" class="img-fluid" alt="" />
          <Carousel.Caption
            style={{
              padding: 0,
              margin: 0,
              position: "absolute",
              top: 80,
              left: -150,
            }}
          >
            <h5 style={{ color: "white" }}> TOP BRANDS</h5>
            <h1 style={{ color: "white" }}>NEW COLLECTION</h1>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="btn btn-default btn-primary">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div
        className="row text-white text-center carouselUnder"
        style={{
          backgroundColor: "#08619c",
          margin: 0,
          boxSizing: "border-box",
        }}
      >
        <div className="col-md" style={{ fontSize: 13 }}>
          <br />
          <span style={{ fontSize: 12 }}>
            {" "}
            <b>MONEY BACK</b>{" "}
          </span>
          <p>30 Days Money Back Guarantee</p>
        </div>
        <div className="col-md" style={{ fontSize: 13 }}>
          <br />
          <span style={{ fontSize: 12 }}>FREE SHIPPING</span>
          <p>Shipping on orders over $99</p>
        </div>
        <div className="col-md" style={{ fontSize: 13 }}>
          <br />
          <span style={{ fontSize: 12 }}>SPECIAL SALE</span>
          <p>Extra $5 off on all items</p>
        </div>
      </div>{" "}
      {/* <div className=" row carousel" style={{ position: "relative" }}>
        <button
          onClick={prevImage}
          style={{
            width: 40,
            height: 25,
            cursor: "pointer",
            padding: 8,
            border: "none",
            backgroundColor: "transparent",
            position: "absolute",
            left: 10,
            top: "40%",
          }}
        >
          <img
            src="\assets\images\prev.png"
            alt=""
            style={{ width: 40, height: 25 }}
          />
        </button>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />

        <button
          onClick={nextImage}
          style={{
            width: 40,
            height: 25,
            backgroundColor: "transparent",
            cursor: "pointer",
            padding: 8,
            border: "none",
            position: "absolute",
            right: 20,
            bottom: "50%",
          }}
        >
          <img
            src="\assets\images\next.png"
            alt=""
            style={{ width: 40, height: 25 }}
          />
        </button>
      </div>
      <div
        className="carousel-caption d-none d-md-block"
        style={{
          padding: 0,
          margin: 0,
          position: "absolute",
          top: 100,
          left: -150,
        }}
      >
        <h5 style={{ color: "grey" }}> TOP BRANDS</h5>
        <h1 style={{ color: "black" }}>NEW COLLECTION</h1>
        <p style={{ color: "black" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button className="btn btn-default btn-primary">SHOP NOW</button>
      </div>
      <div
        className="row text-white carouselUnder"
        style={{
          backgroundColor: "#08619c",
          margin: 0,
          textAlign: "center",
          padding: 10,
          boxSizing: "content-box",
        }}
      >
        <div className="col-md" style={{ fontSize: 13 }}>
          <br />
          <span style={{ fontSize: 12 }}>
            {" "}
            <b>MONEY BACK</b>{" "}
          </span>
          <p>30 Days Money Back Guarantee</p>
        </div>
        <div className="col-md" style={{ fontSize: 13 }}>
          <br />
          <span style={{ fontSize: 12 }}>FREE SHIPPING</span>
          <p>Shipping on orders over $99</p>
        </div>
        <div className="col-md" style={{ fontSize: 13 }}>
          <br />
          <span style={{ fontSize: 12 }}>SPECIAL SALE</span>
          <p>Extra $5 off on all items</p>
        </div>
      </div> */}
    </div>
  );
}
