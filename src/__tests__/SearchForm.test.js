import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Manchester",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };

  test("Renders as expected", () => {
    const rendered = renderer.create(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(rendered).toMatchSnapshot();
  });

  test("Assert textBox is present", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeInstanceOf(HTMLInputElement);
  });

  test("Assert button is present", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent("Search");
  });
});
