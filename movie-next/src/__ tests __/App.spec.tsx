import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import App from "../App.tsx"


test('demo', () => {
    expect(true).toBe(true);
  })
  
  test("Renders the main page", () => {
    render(<App />);
    expect(true).toBeTruthy();
})

test("Exist the readTheDocs text in the document", () => {
    render(<App />);
    const text = screen.getByRole('paragraph', {name: 'read-the-docs'});
    expect(text).toBeInTheDocument();
})

