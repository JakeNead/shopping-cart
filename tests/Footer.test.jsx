import Footer from "../src/components/root/Footer";
import { render } from "@testing-library/react";

describe("Footer component", () => {
  it("Renders footer content", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
