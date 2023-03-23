import React from "react";
type CommingSoon = {
  brandType: string;
};
const CommingSoon: React.FC<CommingSoon> = ({ brandType }) => {
  return <div className="comming-soon">{brandType} Comming Soon</div>;
};

export default CommingSoon;
