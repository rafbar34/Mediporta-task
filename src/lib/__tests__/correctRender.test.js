/* eslint-disable no-undef */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

import { TagsTablePage } from "../../pages/TagsTablePage";

test("renders loading state", () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <TagsTablePage />
    </QueryClientProvider>
  );
  const loadingText = screen.getByTestId("loader");
  expect(loadingText).toBeInTheDocument();
});
