import { ThemeOptions, createTheme } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   export interface Theme {
//     color: {
//       primary: string;
//       secondary: string;
//       text: string;
//       background: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   export interface ThemeOptions {
//     color?: {
//       primary?: string;
//       secondary: string;
//       text: string;
//       background: string;
//     };
//   }
// }

// const theme: ThemeOptions = createTheme({
//   color: {
//     primary: "red",
//     secondary: "green",
//     text: "black",
//     background: "white",
//   },
// });

const theme = {
  color: {
    primary: "red",
    secondary: "green",
    text: "black",
    background: "white",
  },
};

export default theme;
