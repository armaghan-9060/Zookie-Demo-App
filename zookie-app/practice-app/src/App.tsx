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
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
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
          maxwidth="500px"
          imageHeight="600px"
          variant="h2"
          ButtonType="contained"
          buttonColor="#FF8700"
          buttonTextColor="white"
        />
        <About />
        <Services />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
