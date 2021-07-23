import React from "react";
import { render } from "@testing-library/react-native";
import AlbumsScreen from "../../src/screens/AlbumsScreen";

it("test loader in startup", async () => {
  const { getByTestId } = render(<AlbumsScreen />);
  const input = getByTestId("loader");
  expect(input).toBeTruthy();
});
