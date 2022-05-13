import * as React from "react";
import { render } from "@testing-library/react";
import { Navbar } from "../Navbar";

test("items navbar", async () => {
  const { asFragment } = render(<Navbar navtitle={["test"]} />);
  expect(asFragment()).toMatchSnapshot();
});
