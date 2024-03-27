import React from "react";
import { TextField } from "@mui/material";

import { DataControlsFactoryProps } from "../../lib/types/dataControlsType";

export const InputNumberUI = ({
  title,
  value,
  handleChange,
  testId,
}: DataControlsFactoryProps) => {
  return (
    <TextField
      label={title}
      sx={{
        "& label": {
          color: "white",
        },
      }}
      color="secondary"
      type="number"
      variant="outlined"
      defaultValue={value}
      size="medium"
      onChange={
        handleChange as (event: React.ChangeEvent<{ value: unknown }>) => void
      }
      fullWidth
      InputProps={{
        inputProps: {
          "data-testid": testId,
          min: 1,
          max: 100,
          style: {
            color: "white",
          },
        },
      }}
    />
  );
};
