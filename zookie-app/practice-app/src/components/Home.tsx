import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HomeBg from "../assets/home-2-bg.png";
import { Box, BoxProps } from "@mui/material";
import HomeImg from "../assets/home-2-img.png";
import { Button } from "@mui/material";
import HomeBg2 from "../assets/homr-2-bg-bottom.png";
const HomeMain = styled("div")({
  width: "100%",
  height: "700px",
  backgroundColor: "#007bff",
  backgroundImage: `url(${HomeBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});
const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
});
const TextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  color: "white",
  lineHeight: "2",
});
const ImgBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
const HeroImg = styled(Box)({
  position: "relative",
  zIndex: "20",
});
const BackImg = styled(Box)({
  position: "absolute",
  opacity: "0.15",
  margin: "auto",
  paddingTop: "320px",
  paddingLeft: "30px",
  zIndex: "10",
});

const CustomButton = styled(Button)({
  backgroundColor: "#FF8700",
  maxWidth: "180px",
  padding: "10px",
});
function Home() {
  return (
    <div>
      <HomeMain>
        <MainContainer>
          <TextBox sx={{ maxWidth: "500px" }}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Make Your Marketing Real.
            </Typography>
            <p>
              Ut enim ad minima veniam quis nostrum exercitationem ullam
              corporis at suscipit laboriosam nisi ut aliquid a commodi
              consequatur Quis autem.
            </p>
            <CustomButton variant="contained" size="medium">
              LEARN MORE
            </CustomButton>
          </TextBox>
          <ImgBox>
            <HeroImg>
              {" "}
              <img src={HomeImg} alt="Home animation" height="600px" />{" "}
            </HeroImg>
            <BackImg>
              {" "}
              <img src={HomeBg2} alt="Home animation" />{" "}
            </BackImg>
          </ImgBox>
        </MainContainer>
      </HomeMain>
    </div>
  );
}

export default Home;
