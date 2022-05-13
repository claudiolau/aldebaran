import * as React from "react";
import { render } from "@testing-library/react";
import { Footer } from "../Footer";

test("items navbar", async () => {
  const { asFragment } = render(<Footer topic={["test"]} />);
  expect(asFragment()).toMatchSnapshot();
});
