import { render, screen } from "@testing-library/react";
import Shop from "../src/components/shop/Shop";
import { describe, expect } from "vitest";
import { createContext } from "react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";

describe(Shop, () => {
  it("displays error when fetch fails", () => {
    render(
      <RenderRouteWithOutletContext mockContext={mockErrorContext}>
        <Shop />
      </RenderRouteWithOutletContext>
    );
    expect(screen.getByText(/network error/i)).toBeInTheDocument();
  });

  it("displays loading when fetch has not resolved yet", () => {
    render(
      <RenderRouteWithOutletContext mockContext={mockLoadingContext}>
        <Shop />
      </RenderRouteWithOutletContext>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("displays item cards when inventory is fetched", () => {
    render(
      <RenderRouteWithOutletContext mockContext={mockSuccessContext}>
        <Shop />
      </RenderRouteWithOutletContext>
    );
    expect(screen.getByRole("heading", { name: "foo" })).toBeInTheDocument();
  });
});

function RenderRouteWithOutletContext({ mockContext, children }) {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Outlet context={mockContext} />}>
          <Route index element={children} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

const mockErrorContext = {
  inventory: [],
  error: true,
  loading: false,
  cart: [],
};

const mockLoadingContext = {
  inventory: [],
  error: false,
  loading: true,
  cart: [],
};

const mockSuccessContext = {
  inventory: [
    {
      id: 1,
      title: "foo",
      price: 109.95,
      description: "bar",
      category: "baz",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ],
  error: false,
  loading: false,
  cart: [],
};
