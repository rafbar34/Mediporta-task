import { Pagination as MuiPagination } from "@mui/material";
import React from "react";

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasMore: boolean;
};

const Pagination = ({ page, setPage, hasMore }: PaginationProps) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <MuiPagination
      sx={{ color: "primary" }}
      count={hasMore ? page + 1 : page}
      page={page}
      onChange={handleChange}
      variant="text"
      shape="rounded"
    />
  );
};

export default Pagination;
