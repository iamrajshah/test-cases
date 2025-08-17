import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments counter on click", () => {
  render(<Counter />);
  const button = screen.getByText(/increment/i);
  fireEvent.click(button);
  expect(screen.getByTestId("count")).toHaveTextContent("1");
});
