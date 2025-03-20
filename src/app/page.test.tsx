import { render, screen, fireEvent,} from "@testing-library/react";
import Page from "./page";
const sum = (x: number, y: number) => {
  return x + y;
};

describe("app Component", () => {
  it("should sum is correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });

  it("should render App with hello message", () => {
    render(<Page />);
    screen.getByText("Hello World");
  });

  it("should change message on button click", () => {
    render(<Page />);
    screen.getByText("lets learn more about test in React");
    const button = screen.getByText(/Change Message/i);
    fireEvent.click(button);
    screen.getByText("I am learning more about testing in React");
  });
});
