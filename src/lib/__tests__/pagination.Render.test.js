import { fireEvent, render, screen } from "@testing-library/react";

import Pagination from "../../components/Pagination";

test("should update the page number when clicking the next button", () => {
  const setPage = jest.fn();
  render(
    <Pagination
      page={1}
      setPage={setPage}
      hasMore={true}
    />
  );
  const nextPageButton = screen.getByLabelText("Go to next page");
  fireEvent.click(nextPageButton);

  expect(setPage).toHaveBeenCalledWith(2);
});
