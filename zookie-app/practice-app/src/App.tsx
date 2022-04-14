import React from "react";
import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import theme from "./components/Theme";
import About from "./components/About";
import HomeImg from "./assets/home-2-img.png";
import HomeBg from "./assets/home-2-bg.png";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { styled } from "@mui/system";

const AppContainer = styled("div")({
  width: "100%",
  maxWidth: "100%",
  overflow: "hidden",
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <Home
          heading="Make Your Marketing Real."
          description="Ut enim ad minima veniam quis nostrum exercitationem ullam
              corporis at suscipit laboriosam nisi ut aliquid a commodi
              consequatur Quis autem."
          buttontext="LEARN MORE"
          image={HomeImg}
          bgColor="#007bff"
          textcolor="white"
          maxwidth="80%"
          imageHeight="600px"
          variant="h2"
          ButtonType="contained"
          buttonColor="#FF8700"
          buttonTextColor="white"
          isbackground
        />
        <About />
        <Services />
        <Contact />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
