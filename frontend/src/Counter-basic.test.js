import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

// Test initial value
test("shows initial count as 0", () => {
    render(<Counter />);
    expect(screen.getByTestId("count")).toHaveTextContent("0");
});

test("shows label as demo", () => {
    render(<Counter />);
    expect(screen.getByTestId("demo")).toHaveTextContent("Demo");
});


test("There should be two buttons", () => {
    render(<Counter />);
    expect(screen.getByTestId("increment")).toHaveTextContent('Increment');
    expect(screen.getByTestId("decrement")).toHaveTextContent('Decrement');
});