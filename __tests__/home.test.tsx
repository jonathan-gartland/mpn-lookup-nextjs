import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading")).toHaveTextContent("MPN Lookup");
  });

  it("renders a button for the QuantiTray MPN Lookup", () => {
    render(<Home />);
    expect(screen.findAllByText("QuantiTray&reg;")).toBeTruthy();
  });

  it("renders a button for the QuantiTray MPN Lookup", () => {
    render(<Home />);
    expect(screen.findAllByText("QuantiTray2000&reg;")).toBeTruthy();
  });

  it("renders a button for the QuantiTray MPN Lookup", () => {
    render(<Home />);
    expect(screen.findAllByText("Legiolert")).toBeTruthy();
  });
  // it("renders a button for the QuantiTray2000 MPN Lookup", () => {
  //   render(<Home />);
  //   expect(screen.getByRole("button")).toHaveTextContent("QuantiTray2000&reg;");
  // });
  // it("renders a button for the Legiolert MPN Lookup", () => {
  //   render(<Home />);
  //   expect(screen.getByRole("button")).toHaveTextContent("Legiolert");
  // });
});
