import { ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import { TagsTablePage } from "./pages/TagsTablePage";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[400],
      },
      secondary: {
        main: "#FFFF",
      },
    },
  });

  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <TagsTablePage />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
