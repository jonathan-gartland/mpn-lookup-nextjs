import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import LookupComponent from "@/components/LookupComponent";

describe("About", () => {
  it("renders About view", () => {
    render(<LookupComponent testtype="quanti" />);
    const header = screen.getByRole("heading", { name: /MPN : < 1.0/i });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("MPN : < 1");
  });
});
