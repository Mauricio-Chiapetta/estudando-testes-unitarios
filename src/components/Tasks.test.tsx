import { Tasks } from "@/components/Tasks";
import { findByAltText, fireEvent, render, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { screen } from "@testing-library/react";
import { setupServer } from "msw/node";

describe("Task Component", () => {
  const server = setupServer(
    http.get("https://jsonplaceholder.typicode.com/todos", () => {
      // Retornando dados simulados
      return HttpResponse.json([
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
      ]);
    })
  );

  beforeAll(() => {
    server.listen();
  });

  beforeEach(() => {
    server.resetHandlers();
  });

  it("should fetch and show tasks on button click", async () => {
    render(<Tasks />);
    const button = screen.getByRole("button", { name: "Get Tasks from Api" });
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText("delectus aut autem")).toBeInTheDocument();
    });
  });

  it("should show error message if fetch fails", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/todos", () => {
        // Retornando dados simulados
        return new HttpResponse(null,{
          status: 500,
          statusText: "Internal Server Error",
        });
      })
    );

    render(<Tasks />);
    const button = screen.getByRole("button", { name: "Get Tasks from Api" });
    fireEvent.click(button);
     await waitFor(() => {
      expect(screen.getByText("Request failed with status code 500")).toBeInTheDocument();
        
     })

  });
});
