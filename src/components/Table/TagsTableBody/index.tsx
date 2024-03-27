import { TableBody, TableCell, TableRow } from "@mui/material";

import { TagsType } from "../../../lib/types/tagsType";

export const Rows = ({ rows }: { rows: TagsType[] | undefined }) => {
  return (
    <TableBody>
      {rows?.map((row) => (
        <TableRow
          key={row.name}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell
            style={{ width: "50%" }}
            component="th"
            scope="row"
          >
            {row.name}
          </TableCell>
          <TableCell>{row.count}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
