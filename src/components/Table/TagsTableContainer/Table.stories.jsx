import { Box, ThemeProvider, createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

import { TagsTableContainer } from ".";

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
  title: "Table",
  component: TagsTableContainer,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: "#8539d1", padding: 10 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;

export const TagsTable = () => {
  return <TagsTableContainer tags={[{ name: "test1", count: 20 }]} />;
};
