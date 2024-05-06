import Header from "../src/components/root/Footer";
import { render } from "@testing-library/react";

describe("Header component", () => {
  it("Renders header content", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
