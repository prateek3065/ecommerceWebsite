import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../store/StateContext";
import BrandBlock from "../molecules/BrandBlock";

type NewBrandsProps = {};

const dummyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const NewBrands: React.FC<NewBrandsProps> = () => {
  const { context, setContext } = useContext(StateContext);
  return (
    <div className="grid-brand-tiles">
      {dummyArr.map((value) => {
        return <BrandBlock />;
      })}
    </div>
  );
};

export default NewBrands;
