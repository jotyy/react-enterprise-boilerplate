import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders headline", () => {
    render(<App />);

    // check if App components renders headline
    const headline = screen.getByRole("heading", { name: /react enterprise template/i });
    expect(headline).toBeInTheDocument();
  });
});
