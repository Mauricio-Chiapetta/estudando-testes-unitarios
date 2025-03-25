import { render, screen, fireEvent,} from "@testing-library/react";
import Page from "./page";
const sum = (x: number, y: number) => {
  return x + y;
};

describe("app Component", () => {
  it("should sum is correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });
// testando se tem a mensagem Hello world na tela
  it("should render App with hello message", () => {
    render(<Page />);
    // getByText retorna um erro se não encontrar o texto
    screen.getByText("Hello World");
  });
// testando se quando clicar no botão a mensagem muda
  it("should change message on button click", () => {
    render(<Page />);
    screen.getByText("lets learn more about test in React");
    const button = screen.getByText(/Change Message/i);
    // fireEvent simula um evento de click
    fireEvent.click(button);
    screen.getByText("I am learning more about testing in React");
  });
});
