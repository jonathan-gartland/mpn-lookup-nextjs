import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders MPN Lookup Home view", () => {
    render(<Home />);
    const header = screen.getByRole("heading", { name: /MPN Lookup/i });
    expect(header).toBeInTheDocument();
  });
});
