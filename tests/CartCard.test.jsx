import { expect, it, vi } from "vitest";
import CartCard from "../src/components/cart/CartCard";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("CartCard component", () => {
  it("should display item title", () => {
    render(
      <CartCard
        key={1}
        item={{
          title: "foo",
        }}
        fixPrice={vi.fn()}
      />
    );
    expect(screen.getByText("foo")).toBeInTheDocument();
  });
  it("should display item price", () => {
    render(
      <CartCard
        key={1}
        item={{
          title: "foo",
          price: 1.23,
        }}
        fixPrice={function (n) {
          let priceArray = n.toString().split(".");
          if (priceArray.length === 1) {
            return `${priceArray}.00`;
          } else if (priceArray[1].length < 2) {
            return `${priceArray[0]}.${priceArray[1]}0`;
          }
          return n;
        }}
      />
    );
    expect(screen.getByText("$1.23")).toBeInTheDocument();
  });
  it("should display item quantity in number input", () => {
    render(
      <CartCard
        key={1}
        item={{
          title: "foo",
          price: 1.23,
          quantity: 4,
        }}
        handleChange={vi.fn()}
        handleDelete={vi.fn()}
        fixPrice={vi.fn()}
      />
    );
    const numberInput = screen.getByRole("spinbutton");
    expect(numberInput).toHaveValue(4);
  });
  it("should call handleDelete when delete button is clicked", async () => {
    const user = userEvent.setup();
    const handleDelete = vi.fn();
    render(
      <CartCard
        key={1}
        item={{
          title: "foo",
          price: 1.23,
          quantity: 4,
        }}
        handleChange={vi.fn()}
        handleDelete={handleDelete}
        fixPrice={vi.fn()}
      />
    );

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    expect(deleteButton).toBeInTheDocument();
    await user.click(deleteButton);
    expect(handleDelete).toHaveBeenCalled();
  });
  it("should call handleChange when quantity is changed", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <CartCard
        key={1}
        item={{
          title: "foo",
          price: 1.23,
          quantity: 4,
        }}
        handleChange={handleChange}
        handleDelete={vi.fn()}
        fixPrice={vi.fn()}
      />
    );

    const numberInput = screen.getByRole("spinbutton");
    await user.type(numberInput, "0");
    expect(handleChange).toHaveBeenCalled();
  });
});
