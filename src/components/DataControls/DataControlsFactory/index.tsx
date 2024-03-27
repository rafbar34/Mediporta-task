import { FormControl } from "@mui/material";

import { DataControlsFactoryProps } from "../../../lib/types/dataControlsType";
import { SelectUI } from "../../UI/SelectUI";
import { InputNumberUI } from "../../UI/InputNumberUI";

export const DataControlsFactory = ({
  type = "input",
  ...props
}: DataControlsFactoryProps) => {
  return (
    <FormControl
      fullWidth
      color={"secondary"}
      sx={{ marginTop: 2, marginBottom: 2 }}
    >
      {type === "select" ? <SelectUI {...props} /> : null}
      {type === "input" ? <InputNumberUI {...props} /> : null}
    </FormControl>
  );
};
