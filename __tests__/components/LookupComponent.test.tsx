import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import LookupComponent from "@/components/LookupComponent";

describe("LookupComponent", () => {
  it("renders QuantiTray input and looks up MPN", () => {
    render(<LookupComponent testtype="quanti" />);
    const header = screen.getByRole("heading", { name: /MPN : < 1.0/i });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("MPN : < 1");
  });

  it("renders QuantiTray2000 inputs and calculates MPN", () => {
    // const { debug } =
    render(<LookupComponent testtype="quanti2k" />);
    // debug();
    const largeInput = screen.getByTestId(/qt2k-large/i);
    const smallInput = screen.getByTestId(/qt2k-small/i);
    // debug(largeInput);
    // debug(smallInput);

    fireEvent.change(largeInput, { target: { value: "10" } });
    fireEvent.change(smallInput, { target: { value: "5" } });

    // debug();

    expect(screen.getByText(/QuantiTray2000/i)).toBeInTheDocument();
    expect(largeInput).toHaveValue("10");
    expect(smallInput).toHaveValue("5");
  });

  it("renders Legiolert inputs and calculates MPN", () => {
    // const { debug } =
    render(<LookupComponent testtype="legiolert" />);
    // debug();
    const largeInput = screen.getByTestId(/legio-large/i);
    const smallInput = screen.getByTestId(/legio-small/i);
    // debug(largeInput);
    // debug(smallInput);

    fireEvent.change(largeInput, { target: { value: "2" } });
    fireEvent.change(smallInput, { target: { value: "5" } });

    // debug();

    expect(screen.getByText(/MPN :/i)).toBeInTheDocument();
    expect(screen.getByText(/Legiolert/i)).toBeInTheDocument();
    expect(largeInput).toHaveValue("2");
    expect(smallInput).toHaveValue("5");
  });
});
