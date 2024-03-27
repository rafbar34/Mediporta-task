import { Paper, Table, TableContainer } from "@mui/material";
import { render, screen } from "@testing-library/react";

import { Rows } from "../../components/Table/TagsTableBody";

test("renders rows of tags", () => {
  const tags = [
    { name: "Test", count: 100 },
    { name: "Test2", count: 200 },
  ];
  render(
    <TableContainer component={Paper}>
      <Table>
        <Rows rows={tags} />
      </Table>
    </TableContainer>
  );

  tags.forEach((tag) => {
    const tagElement = screen.getByText(tag.name);

    expect(tagElement).toBeInTheDocument();
  });
});
