import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  // testando estilos 
  it("should render whith red background if disabled", () => {
    render(
      <Button disabled={true} onClick={() => {}}>
        Change Message
      </Button>
    );

    const button = screen.getByRole("button", { name: /Change Message/i });
    expect(button).toHaveClass("bg-red-600/55");
  });
   // testando se a função foi chamada 
  it("should call onClick when clicked", () => {
    // jest.fn() cria uma função mock
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Change Message</Button>);
    const button = screen.getByRole("button", { name: /Change Message/i });
    fireEvent.click(button);
    // espera que a função onClick seja chamada
    expect(onClick).toHaveBeenCalled();
  });
});
