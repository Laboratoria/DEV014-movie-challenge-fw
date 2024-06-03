import '@testing-library/jest-dom'
import { render  } from "@testing-library/react"
import App from "../App"

test("Renders the main page with correct elements", () => {
  const { getByText } = render (<App />);
  expect(getByText("Cinema Paraíso")).toBeInTheDocument();
  })





 