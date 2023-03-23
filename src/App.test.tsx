import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./molecules/Header";
import RootLayout from "./layouts/RootLayout";
import { BrowserRouter } from "react-router-dom";
import BrandBlock from "./molecules/BrandBlock";
import "@testing-library/jest-dom";

// test("should render Header", () => {
//   render(
//     <BrowserRouter>
//       <Header />
//     </BrowserRouter>
//   );
//   const newBrands = screen.getByText(/New Brands/i);
//   expect(newBrands).toBeInTheDocument();
// });

// test("brand block should render Shop button", () => {
//   render(<BrandBlock />);
//   let button = screen.getByText(/Shop/);
//   expect(button).toBeInTheDocument();
// });
