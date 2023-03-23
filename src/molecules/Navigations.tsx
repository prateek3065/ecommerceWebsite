import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

type NavigationsProps = {};

const Navigations: React.FC<NavigationsProps> = () => {
  return (
    <div
      data-testid="test"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        rowGap: "1rem",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavLink className="nav-button" to="/newBrands">
        New Brands
      </NavLink>
      <NavLink className="nav-button" to="/myBrands">
        My Brands
      </NavLink>
      <NavLink className="nav-button" to="/trending">
        Trending
      </NavLink>
      <NavLink className="nav-button" to="">
        Microsites
      </NavLink>
      <NavLink className="nav-button" to="/pga">
        PGA Tab
      </NavLink>
    </div>
  );
};

export default Navigations;
