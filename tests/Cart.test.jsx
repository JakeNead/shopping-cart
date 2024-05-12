import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "../src/components/cart/Cart";

describe("Cart", () => {
  it("should display a notification when cart is empty", () => {
    const router = createBrowserRouter(mockedRoutes({ cart: [] }));
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading", { name: /empty/ })).toBeInTheDocument();
  });

  it("should display a single item", () => {
    const router = createBrowserRouter(mockedRoutes(singleItemMockContext));
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading", { name: /foo/ })).toBeInTheDocument();
  });

  it("should display a multiple items", () => {
    const router = createBrowserRouter(mockedRoutes(twoItemsMockContext));
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading", { name: /foo/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /bar/ })).toBeInTheDocument();
  });

  it("should include shipping costs when cart is under $50", () => {
    const router = createBrowserRouter(mockedRoutes(singleItemMockContext));
    render(<RouterProvider router={router} />);
    expect(screen.getByText("$5.00")).toBeInTheDocument();
    expect(screen.getByText("$9.95")).toBeInTheDocument();
  });

  it("should include free shipping when cart is over $50", () => {
    const router = createBrowserRouter(mockedRoutes(twoItemsMockContext));
    render(<RouterProvider router={router} />);
    expect(screen.getByText("free")).toBeInTheDocument();
  });
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
      price: 5,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      quantity: 1,
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
      quantity: 1,
    },
    {
      id: 2,
      title: "bar",
      price: 23.0,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      quantity: 1,
    },
  ],
  cartTotal: vi.fn(),
  handleCartChange: vi.fn(),
  handleCartDelete: vi.fn(),
  fixPrice: vi.fn(),
};
