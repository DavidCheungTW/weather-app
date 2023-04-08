import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import LocationDetails from "../components/LocationDetails";

describe("LocationDetails", () => {
  test("Renders as expected", () => {
    const rendered = renderer.create(
      <LocationDetails city="testCity" country="testCountry" />
    );

    expect(rendered).toMatchSnapshot();
  });

  test("Assert city and location are present", () => {
    render(<LocationDetails city="testCity" country="testCountry" />);

    expect(screen.getByText("testCity, testCountry")).toBeTruthy();
    expect(screen.getByText("testCity, testCountry")).toBeInstanceOf(
      HTMLHeadingElement
    );
    expect(screen.getByText("testCity, testCountry")).toHaveClass(
      "location-details"
    );
  });
});
