import { Paper, Table, TableContainer } from "@mui/material";

import { TagsType } from "../../../lib/types/tagsType";
import { Columns } from "../TableHead";
import { Rows } from "../TagsTableBody";

export const TagsTableContainer = ({
  tags,
}: {
  tags: TagsType[] | undefined;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="a dense table"
      >
        <Columns />
        <Rows rows={tags} />
      </Table>
    </TableContainer>
  );
};
