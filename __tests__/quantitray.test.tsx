import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import Quantitray from "@/pages/quantitray";

describe("QuantiTray View", () => {
  it("renders a heading", () => {
    render(<Quantitray />);
    expect(screen.getByTestId("qt-header")).toHaveTextContent(
      "QuantiTray® MPN"
    );
  });

  it("renders a positive well label", () => {
    render(<Quantitray />);
    expect(screen.getByTestId("pos-well-title")).toHaveTextContent(
      "Positive Wells"
    );
  });
});
