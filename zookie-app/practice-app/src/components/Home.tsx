import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, BoxProps } from "@mui/material";
import { Button } from "@mui/material";
import HomeBg2 from "../assets/homr-2-bg-bottom.png";
import HomeBg from "../assets/home-2-bg.png";
import {
  MainContainer,
  TextBox,
  ImgBox,
  HeroImg,
} from "../components/Reuseable";
import { JsxElement } from "typescript";

interface mainProps {
  bgColor: string;
}

const HomeMain = styled("div")((props: mainProps) => ({
  width: "100%",
  height: "700px",
  backgroundColor: props.bgColor,
  backgroundImage: `url(${HomeBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
}));

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

interface HomeProps {
  heading: string;
  description: string;
  buttontext: string;
  image: string;
  bgColor: string;
  textcolor: string;
  maxwidth: string;
  imageHeight: string;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
  ButtonType: "text" | "outlined" | "contained";
}

function Home({
  heading,
  description,
  buttontext,
  image,
  bgColor,
  textcolor,
  maxwidth,
  imageHeight,
  variant,
  ButtonType,
}: HomeProps) {
  return (
    <div>
      <HomeMain bgColor={bgColor}>
        <MainContainer>
          <TextBox textcolor={textcolor} maxwidth={maxwidth}>
            <Typography variant={variant} sx={{ fontWeight: "bold" }}>
              {heading}
            </Typography>
            <p>{description}</p>
            <CustomButton variant={ButtonType} size="medium">
              {buttontext}
            </CustomButton>
          </TextBox>
          <ImgBox>
            <HeroImg>
              {" "}
              <img src={image} alt="Home animation" height={imageHeight} />{" "}
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
