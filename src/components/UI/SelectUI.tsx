import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

import { DataControlsFactoryProps } from "../../lib/types/dataControlsType";

export const SelectUI = ({
  title,
  testId,
  value,
  handleChange,
  items,
}: DataControlsFactoryProps) => {
  return (
    <>
      <InputLabel sx={{ color: "white" }}>{title}</InputLabel>
      <Select
        inputProps={{ "data-testid": testId }}
        sx={{ color: "white" }}
        value={String(value)}
        onChange={handleChange as (event: SelectChangeEvent<string>) => void}
      >
        {items?.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
