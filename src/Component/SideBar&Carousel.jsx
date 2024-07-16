import React from "react";
import SideBar from "./SideBar";

import CarouselComponent from "./CarouselComponent";

class SideBarCarousel extends React.Component {
  constructor(porps) {
    super(porps);
  }

  render() {
    return (
      <div className="row mt-3">
        <SideBar />

        <CarouselComponent />
      </div>
    );
  }
}

export default SideBarCarousel;
