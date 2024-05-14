import Header from "../src/components/root/Header";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";

describe("Header component", () => {
  it("Renders header content", () => {
    const { container } = render(
      <BrowserRouter>
        <Header cartTotal={vi.fn()} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
