import { Box, ThemeProvider, createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useState } from "react";

import { DataControlsFactory } from ".";
import {
  ORDER_ITEMS_DATA,
  SORT_ITEMS_DATA,
} from "../../../lib/constants/dataControls";
import styles from "../DataControlsSection/data-controls-section.module.scss";

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
  title: "DataControlsFactoryStory",
  component: DataControlsFactory,
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

export const SortSelect = () => {
  const [value, setValue] = useState("name");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles["data-controls-container"]}>
      <DataControlsFactory
        type="select"
        title="Sort by "
        items={SORT_ITEMS_DATA}
        value={value}
        handleChange={handleChange}
      />
    </div>
  );
};
export const OrderSelect = () => {
  const [value, setValue] = useState("asc");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles["data-controls-container"]}>
      <DataControlsFactory
        type="select"
        title="Order  "
        items={ORDER_ITEMS_DATA["popular"]}
        value={value}
        handleChange={handleChange}
      />
    </div>
  );
};
export const PageSizeInput = () => {
  return (
    <div className={styles["data-controls-container"]}>
      <DataControlsFactory
        type="input"
        title="Items per page  "
        items={ORDER_ITEMS_DATA["name"]}
      />
    </div>
  );
};
