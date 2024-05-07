import routes from "../src/routes";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";

describe("Home component", () => {
  it("Renders home page content", () => {
    const { container } = render(<RouterProvider router={routes} />);
    expect(container).toMatchSnapshot();
  });

  it("Routes to shop component from 'Shop Now' button", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={routes} />);
    const button = screen.getByRole("button", { name: "Shop Now" });

    await user.click(button);
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });
});
