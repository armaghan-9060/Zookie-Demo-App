import React from "react";
import Header from "./components/Header";
import { makeStyles, ThemeProvider } from "@mui/styles";
import theme from "./components/Theme";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
