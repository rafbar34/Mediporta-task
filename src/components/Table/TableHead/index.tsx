import { TableCell, TableHead, TableRow } from "@mui/material";

import { COLUMNS_HEADER } from "../../../lib/constants/tableData";

export const Columns = () => {
  return (
    <TableHead>
      <TableRow>
        {COLUMNS_HEADER?.map((column) => (
          <TableCell
            sx={{ fontSize: 18, fontWeight: "bold" }}
            key={column.name}
          >
            {column.name}{" "}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
