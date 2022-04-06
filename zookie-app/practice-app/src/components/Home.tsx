import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, BoxProps } from "@mui/material";
import { Button } from "@mui/material";
import HomeBg2 from "../assets/homr-2-bg-bottom.png";
import HomeBg from "../assets/home-2-bg.png";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import {
  MainContainer,
  TextBox,
  ImgBox,
  HeroImg,
} from "../components/Reuseable";
import { JsxElement } from "typescript";
import { MarginOutlined } from "@mui/icons-material";

interface mainProps {
  bgColor: string;
}
interface buttonProps {
  buttonColor: string;
  buttonTextColor: string;
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

const CustomButton = styled(Button)((props: buttonProps) => ({
  backgroundColor: props.buttonColor,
  color: props.buttonTextColor,
  maxWidth: "180px",
  padding: "10px",
}));

const TextButton = styled(Button)(() => ({
  backgroundColor: "transparent",
  maxWidth: "220px",
  padding: "10px",
  paddingLeft: "0",
}));

interface HomeProps {
  isSpanButton?: boolean;
  heading: string;
  description: string;
  buttontext: string;
  image: string;
  bgColor: string;
  buttonColor: string;
  buttonTextColor: string;
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
  buttonColor,
  buttonTextColor,
  textcolor,
  maxwidth,
  imageHeight,
  variant,
  ButtonType,
  isSpanButton,
}: HomeProps) {
  return (
    <div>
      <HomeMain bgColor={bgColor}>
        <MainContainer id="Home">
          <TextBox textcolor={textcolor} maxwidth={maxwidth}>
            <Typography variant={variant} sx={{ fontWeight: "bold" }}>
              {heading}
            </Typography>
            <p>{description}</p>
            {isSpanButton ? (
              <TextButton>
                {" "}
                <span style={{ color: "#FF8700", fontSize: "12px" }}>
                  {" "}
                  <CircleRoundedIcon sx={{ fontSize: 8 }} /> Learn More{" "}
                </span>{" "}
                <span
                  style={{
                    color: "black",
                    marginLeft: "5px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  About Us{" "}
                </span>{" "}
                {buttontext}{" "}
              </TextButton>
            ) : (
              <CustomButton
                disableElevation
                variant={ButtonType}
                buttonColor={buttonColor}
                buttonTextColor={buttonTextColor}
              >
                {buttontext}
              </CustomButton>
            )}
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
