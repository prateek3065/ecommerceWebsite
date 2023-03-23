import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import BrandAccessButton from "./BrandAccessButton";

type BrandBlockProps = {};

const BrandBlock: React.FC<BrandBlockProps> = (value, value2) => {
  return (
    <div data-testid="brand-block" className="brand-block">
      <div className="brand-image-area">
        <img
          width={"100%"}
          style={{ borderTopRightRadius: "6px", borderTopLeftRadius: "6px" }}
          loading="lazy"
          src="https://cdn.repspark.net/2/p/A3-KLfESBLRjlhWAdj57Akl57Yxvy0AGIvpKhV6CWQY/A3-KLfESBLRjlhWAdj57Akl57Yxvy0AGIvpKhV6CWQY-s_400x400"
          alt="brand-cover"
        />
        <BrandAccessButton />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="brand-logo">
          <img
            style={{ margin: "6px 5px 5px 14px", height: "34px" }}
            loading="lazy"
            src="https://cdn.repspark.net/2/p/r5Tb2sXt9vX_hmXUBRGFf5PtBfTk1HSO_HQi1dvjlRI/r5Tb2sXt9vX_hmXUBRGFf5PtBfTk1HSO_HQi1dvjlRI-d_250x250"
            alt="brand-logo"
          />
        </div>
        <div className="brand-tile-icon-area">
          <div>
            <FontAwesomeIcon
              fontSize={"12px"}
              style={{ marginLeft: "2px", marginRight: "6px" }}
              icon={faLocationDot}
            />
            <span className="brand-tile-icon-detail">Frankfurt</span>
          </div>
          <div>
            <FontAwesomeIcon
              fontSize={"12px"}
              style={{ marginRight: "4px" }}
              icon={faStar}
            />
            <span className="brand-tile-icon-detail">Fashion/Casuals</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBlock;
