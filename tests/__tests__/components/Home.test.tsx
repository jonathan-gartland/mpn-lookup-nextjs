import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });
  // afterEach(() => {});
  it("renders MPN Lookup Home view", () => {
    const header = screen.getByRole("heading", { name: /MPN Lookup/i });
    expect(header).toBeInTheDocument();
  });

  it("clicks the About button and verifies Have Fun! text", async () => {
    fireEvent.click(screen.getByText("About"));
    expect(await screen.findByText(/have fun!/i)).toBeInTheDocument();
  });

  it("clicks the Quantitray&reg; button and verifies text", async () => {
    fireEvent.click(screen.getByTestId("qt-button"));
    expect(await screen.findByText(/Quantitray/i)).toBeInTheDocument();
  });

  it("clicks the Quantitray2000$reg; button and verifies text", async () => {
    fireEvent.click(screen.getByTestId("qt2k-button"));
    expect(await screen.findByText(/Quantitray2000/i)).toBeInTheDocument();
  });

  it("clicks the Legiolert button and verifies Have Fun! text", async () => {
    fireEvent.click(screen.getByText("Legiolert"));
    expect(await screen.findByText(/Legiolert MPN/i)).toBeInTheDocument();
  });
});
