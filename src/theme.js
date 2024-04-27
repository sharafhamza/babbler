import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#23272A",
      footer: "#23272A",
      lightBlack: "#23272A",
      border: "#ddd",
      bg: "#FAFAFA",
    },
    typography: {
      fontFamily: [
        '"Kanit", sans-serif',
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  },
});
export default theme;
