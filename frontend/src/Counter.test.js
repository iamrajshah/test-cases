import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments counter on click", () => {
  render(<Counter />);
  const button = screen.getByText(/increment/i);
  fireEvent.click(button);
  expect(screen.getByTestId("count")).toHaveTextContent("1");
});

test("decrement counter on click", () => {
  render(<Counter />);
  const button = screen.getByText(/increment/i);
  fireEvent.click(button);
  const decrButton = screen.getByTestId("decrement");
  fireEvent.click(decrButton);
  expect(screen.getByTestId("count")).toHaveTextContent("0");
});


// Test multiple increments
test("increments counter multiple times", () => {
  render(<Counter />);
  const button = screen.getByText(/increment/i);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  expect(screen.getByTestId("count")).toHaveTextContent("3");
});

