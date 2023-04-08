import React from "react";
import DigitalClock from "../components/DigitalClock";
import renderer from "react-test-renderer";

describe("DigitalClock", () => {
  test("Renders as expected", () => {
    Date.now = jest.fn(() => 1680964077162);

    const rendered = renderer.create(<DigitalClock />);

    expect(rendered).toMatchSnapshot();
  });
});
