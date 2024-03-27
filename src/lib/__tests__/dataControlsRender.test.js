/* eslint-disable no-undef */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { DataControlsSection } from "../../components/DataControls/DataControlsSection";

test("should enter correct page size", async () => {
  const setPageSize = jest.fn();
  render(<DataControlsSection setPageSize={setPageSize} />);
  const input = screen.getByTestId("inputId");
  fireEvent.change(input, { target: { value: 50 } });
  await waitFor(() => {
    expect(setPageSize).toHaveBeenCalledWith(50);
  });
});

test("should show error when it is above 99 page size", async () => {
  const setPageSize = jest.fn();
  render(<DataControlsSection setPageSize={setPageSize} />);
  const input = screen.getByTestId("inputId");
  fireEvent.change(input, { target: { value: 150 } });

  await waitFor(() => {
    expect(setPageSize).not.toHaveBeenCalledWith(150);
  });
});

test("should show error when it is below 1 page size", async () => {
  const setPageSize = jest.fn();
  render(<DataControlsSection setPageSize={setPageSize} />);
  const input = screen.getByTestId("inputId");
  fireEvent.change(input, { target: { value: -4 } });

  await waitFor(() => {
    expect(setPageSize).not.toHaveBeenCalledWith(-4);
  });
});
test("should correct change sort field", () => {
  const setSortField = jest.fn();
  render(<DataControlsSection setSortField={setSortField} />);
  const select = screen.getByTestId("sortId");
  fireEvent.change(select, { target: { value: "popular" } });

  expect(setSortField).toHaveBeenCalledWith("popular");
});
