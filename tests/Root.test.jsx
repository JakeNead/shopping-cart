import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { RouterProvider } from "react-router-dom";
import routes from "../src/routes";

describe("Root component", () => {
  it("should render the header, footer, and home page", () => {
    render(<RouterProvider router={routes} />);

    const items = screen.getByText(/items/i);
    expect(items).toBeInTheDocument();

    const welcome = screen.getByRole("heading", { name: /welcome/i });
    expect(welcome).toBeInTheDocument();

    const madeBy = screen.getByRole("heading", { name: /made by/i });
    expect(madeBy).toBeInTheDocument();
  });
});
