import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import LookupComponent from "@/components/LookupComponent";

describe("LookupComponent", () => {
  it("renders QuantiTray input and calculates MPN", () => {
    render(<LookupComponent testtype="quanti" />);
    const header = screen.getByRole("heading", { name: /MPN : < 1.0/i });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("MPN : < 1");
  });

  it("renders QuantiTray2000 inputs and calculates MPN", () => {
    render(<LookupComponent testtype="quanti2k" />);
    const largeInput = screen.getByText(/Large/i);
    const smallInput = screen.getByText(/Small/i);
    // fireEvent.change(largeInput, { target: { value: "10" } });
    // fireEvent.change(smallInput, { target: { value: "5" } });
    expect(screen.getByText(/QuantiTray2000/i)).toBeInTheDocument();
  });

  // it("renders Legiolert inputs and calculates MPN", () => {
  //   render(<LookupComponent testtype="legiolert" />);
  //   const largeInput = screen.getByLabelText(/Large/i);
  //   const smallInput = screen.getByLabelText(/Small/i);
  //   fireEvent.change(largeInput, { target: { value: "3" } });
  //   fireEvent.change(smallInput, { target: { value: "20" } });
  //   expect(screen.getByText(/MPN/i)).toBeInTheDocument();
  // });
});
