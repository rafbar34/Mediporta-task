import { Box, ThemeProvider, createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useState } from "react";

import Pagination from ".";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: "#FFFF",
    },
  },
});
const meta = {
  title: "PaginationControls",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: "#FFFF", padding: 10 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;

export const PaginationEnabled = () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      page={page}
      hasMore={true}
      setPage={setPage}
    />
  );
};
export const PaginationDisabled = () => {
  return (
    <Pagination
      page={1}
      hasMore={false}
    />
  );
};
