import { Box } from "@mui/material";

export const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: 400,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Error fetching data</h2>;
    </Box>
  );
};
