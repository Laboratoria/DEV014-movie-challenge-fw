import { render, screen } from "@testing-library/react";

import  App  from "../App";

describe("Examples", () => {
  it("should be a teapot", () => {
    expect(1).toBe(1);
  });

  it("should render Home", () => {
    render(<App />);
    screen.debug();
  });
});
