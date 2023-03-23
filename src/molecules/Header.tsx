import React from "react";
import Navigations from "./Navigations";

import SearchBox from "./SearchBox";
const logoLocation =
  "https://cdn.repspark.net/images/brandlogos/repsparklogo_coloronblack.svg";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <div className="header">
        <div className="logo-navigation">
          <img width={"110px"} src={logoLocation} />
          <div style={{ display: "flex", marginTop: "3px" }}>
            <Navigations />
          </div>
        </div>
        <SearchBox />
      </div>
      <hr className="divider" />
    </>
  );
};

export default Header;
