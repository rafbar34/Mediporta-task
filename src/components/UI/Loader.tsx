import { Box, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Box
      data-testId="loader"
      sx={{
        display: "flex",
        height: 400,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
