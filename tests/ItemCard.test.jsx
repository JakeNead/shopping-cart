import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItemCard from "../src/components/shop/ItemCard";
import { vi } from "vitest";

describe("ItemCard component", () => {
  it("displays item name", () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByRole("heading").textContent).toMatch(/Mens Casual/);
  });

  it("displays item price", () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText("$22.30")).toBeInTheDocument();
  });

  it("limits title length ", () => {
    render(<ItemCard item={mockItem} />);
    expect(
      screen.getByText("Mens Casual Premium Slim Fit T-Shirts ma...")
    ).toBeInTheDocument();
  });

  it("calls add to cart", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<ItemCard item={mockItem} addToCart={handleClick} />);
    const button = screen.getByRole("button", { name: /Add to cart/ });
    await user.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
  it("doesn't call add to cart when button not clicked", async () => {
    const handleClick = vi.fn();
    render(<ItemCard item={mockItem} addToCart={handleClick} />);
    expect(handleClick).not.toHaveBeenCalled();
  });
});

const mockItem = {
  id: 2,
  title: "Mens Casual Premium Slim Fit T-Shirts made with Egyptian cotton",
  price: 22.3,
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
};
