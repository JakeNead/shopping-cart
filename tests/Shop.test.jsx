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
    expect(screen.getByRole("heading", { name: "Foo" })).toBeInTheDocument();
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
  inventory: [
    {
      id: 1,
      title: "Foo",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Bar",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
  ],
  error: true,
  loading: false,
  cart: [],
};

const mockLoadingContext = {
  inventory: [
    {
      id: 1,
      title: "Foo",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Bar",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
  ],
  error: false,
  loading: true,
  cart: [],
};

const mockSuccessContext = {
  inventory: [
    {
      id: 1,
      title: "Foo",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Bar",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
  ],
  error: false,
  loading: false,
  cart: [],
};
