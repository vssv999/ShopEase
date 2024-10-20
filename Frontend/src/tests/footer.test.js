import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

test("Footer should render", () => {
  render(<Footer />);
  expect(screen.getByTestId("footer"));
  expect(screen.getByText("Terms of Use"));
});

test("renders correctly", () => {
  const tree = render(
    <Footer page="http://res1.globoforce.com/corporate/eng/terms.html">
      Terms of Use
    </Footer>
  );
  expect(tree).toMatchSnapshot();
});
