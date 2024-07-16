import React from "react";
import { render } from "react-dom";
import TopNavbar from "./TopNavbar";
import LogoSearchBar from "./NavLogo&Search";
import Menu from "./Menu";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4"></div>
          <div className="col-md-6 ">
            <TopNavbar />
          </div>
        </div>
        <LogoSearchBar />
        <div className="row">
          <Menu />
        </div>
      </div>
    );
  }
}

export default NavBar;
