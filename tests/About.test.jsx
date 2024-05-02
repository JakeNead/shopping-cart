import { render } from "@testing-library/react";
import About from "../src/components/about/About";

describe("About component", () => {
  it("Renders the about page", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});
