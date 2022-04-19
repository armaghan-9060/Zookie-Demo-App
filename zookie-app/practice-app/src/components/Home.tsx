import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import HomeBg2 from "../assets/homr-2-bg-bottom.png";
import HomeBg from "../assets/home-2-bg.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import {
  MainContainer,
  TextBox,
  ImgBox,
  HeroImg,
} from "../components/Reuseable";

interface mainProps {
  bgColor: string;
}
interface buttonProps {
  buttonColor: string;
  buttonTextColor: string;
}

const HomeMain = styled("div")((props: mainProps) => ({
  width: "100%",
  height: "auto",
  backgroundColor: props.bgColor,
  backgroundImage: `url(${HomeBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",

  paddingTop: "20px",
}));

const BackImg = styled(Box)((props) => ({
  position: "absolute",
  opacity: "0.15",
  margin: "auto",
  paddingTop: "320px",
  paddingLeft: "30px",
  overflow: "hidden",
  zIndex: "10",
  [props.theme.breakpoints.down("lg")]: {
    img: {
      width: "500px",
    },
  },
  [props.theme.breakpoints.down("sm")]: {
    img: {
      width: "300px",
      height: "200px",
    },
    paddingTop: "150px",
    paddingLeft: "30px",
    // paddingRight: "50px",
  },
  [props.theme.breakpoints.only("xs")]: {
    img: {
      width: "180px",
      height: "140px",
    },
    paddingTop: "130px",
    paddingLeft: "10px",
  },
}));

const CustomButton = styled(Button)((props: buttonProps) => ({
  backgroundColor: props.buttonColor,
  color: props.buttonTextColor,
  maxWidth: "180px",
  padding: "10px",
}));

const TextButton = styled(Button)((props) => ({
  backgroundColor: "transparent",
  maxWidth: "220px",
  padding: "10px",
  paddingLeft: "0",
  [props.theme.breakpoints.down("lg")]: {},
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
  isbackground?: boolean;
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
  isbackground,
}: HomeProps) {
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div>
      <HomeMain bgColor={bgColor}>
        <MainContainer id="Home">
          <TextBox textcolor={textcolor} maxwidth={maxwidth}>
            <Typography
              variant={showText ? "h6" : variant}
              sx={{ fontWeight: "bold" }}
            >
              {heading}
            </Typography>
            <p style={{ fontSize: showText ? "10px" : "15px" }}>
              {description}
            </p>
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
            {isbackground ? (
              <BackImg>
                {" "}
                <img src={HomeBg2} alt="Home animation" />{" "}
              </BackImg>
            ) : null}
          </ImgBox>
        </MainContainer>
      </HomeMain>
    </div>
  );
}

export default Home;
