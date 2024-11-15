import { fireEvent, render, screen } from "@testing-library/react";

import { TestProviders } from "../../../../../../test/utils/providers";
import { SearchInput } from ".";

describe("SearchInput", () => {
  beforeEach(() => {
    render(<SearchInput />, {
      wrapper: TestProviders
    });
  });

  it("Should be able to render correctly", () => {
    const input = screen.getByPlaceholderText("Qual filme Deseja pesquisar?");
    const searchButton = screen.getByTestId("searchButton");

    expect(input).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("Should be able to update search input value when typing", () => {
    const input = screen.getByPlaceholderText("Qual filme Deseja pesquisar?");

    fireEvent.change(input, { target: { value: "Star Wars" } });

    expect(input).toHaveValue("Star Wars");
  });

  it("should be able to show the clear search button only after typing at least one character", () => {
    const input = screen.getByPlaceholderText("Qual filme Deseja pesquisar?");

    let clearButton = screen.queryByTestId("clearSearchButton");

    expect(clearButton).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Star Wars" } });

    clearButton = screen.queryByTestId("clearSearchButton");

    expect(clearButton).toBeInTheDocument();
  });

  it("Should be able to clear search input when clear button is clicked", () => {
    const input = screen.getByPlaceholderText("Qual filme Deseja pesquisar?");

    fireEvent.change(input, { target: { value: "Star Wars" } });

    const clearButton = screen.getByTestId("clearSearchButton");

    fireEvent.click(clearButton);

    expect(input).toHaveValue("");
  });
});
