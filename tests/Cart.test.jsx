import { Outlet, RouterProvider, createMemoryRouter } from "react-router-dom";
import { it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "../src/components/cart/Cart";

describe("Cart", () => {
  it("should display a notification when cart is empty", () => {
    const router = createMemoryRouter(mockedRoutes({ cart: [] }));
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading", { name: /empty/ })).toBeInTheDocument();
  });

  it("should display a single item", () => {
    const router = createMemoryRouter(mockedRoutes(singleItemMockContext));
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading", { name: /foo/ })).toBeInTheDocument();
  });

  it("should display a multiple items", () => {
    const router = createMemoryRouter(mockedRoutes(twoItemsMockContext));
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading", { name: /foo/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /bar/ })).toBeInTheDocument();
  });
  it("should update price when quantity changes", () => {});
  //   it("should let user delete items", () => {});
  //   it("should include shipping costs when cart is under $50", () => {});
  //   it("should include free shipping when cart is over $50", () => {});
});

function mockedRoutes(mockContext) {
  const routes = [
    {
      path: "/",
      element: <Outlet context={mockContext} />,
      children: [{ index: true, element: <Cart /> }],
    },
  ];
  return routes;
}

const singleItemMockContext = {
  cart: [
    {
      id: 1,
      title: "foo",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ],
  cartTotal: vi.fn(),
  handleCartChange: vi.fn(),
  handleCartDelete: vi.fn(),
  fixPrice: vi.fn(),
};

const twoItemsMockContext = {
  cart: [
    {
      id: 1,
      title: "foo",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "bar",
      price: 23.0,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ],
  cartTotal: vi.fn(),
  handleCartChange: vi.fn(),
  handleCartDelete: vi.fn(),
  fixPrice: vi.fn(),
};
