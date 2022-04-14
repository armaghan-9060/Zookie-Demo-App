import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
interface ContainerProps {
  textcolor: string;
  maxwidth: string;
}
export const MainContainer = styled(Box)((props) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  paddingTop: "70px",
  // home page spacing
  paddingLeft: "30px",
  paddingRight: "30px",
  [props.theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  [props.theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
}));
export const TextBox = styled(Box)((props: ContainerProps) => ({
  display: "flex",
  flexDirection: "column",
  color: props.textcolor,
  lineHeight: "2",
  width: props.maxwidth,
}));
export const ImgBox = styled(Box)((props) => ({
  display: "flex",
  flexDirection: "column",
  width: "60%",

  [props.theme.breakpoints.down("lg")]: {
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  [props.theme.breakpoints.down("sm")]: {
    alignItems: "center",
    justifyContent: "center",
  },
  [props.theme.breakpoints.down("md")]: {
    alignItems: "center",
    justifyContent: "center",
  },
  [props.theme.breakpoints.down("xs")]: {
    alignItems: "center",
    justifyContent: "center",
  },
}));
export const HeroImg = styled(Box)((props) => ({
  position: "relative",
  zIndex: "20",
  [props.theme.breakpoints.down("lg")]: {
    img: {
      //height: "400px",
      width: "600px",
    },
  },
  [props.theme.breakpoints.down("md")]: {
    img: {
      // height: "300px",
      width: "500px",
    },
  },
  [props.theme.breakpoints.down("sm")]: {
    img: {
      height: "280px",
      width: "200px",
    },
  },
  [props.theme.breakpoints.down("xs")]: {
    img: {
      height: "250px",
      width: "200px",
    },
  },
}));
export const Reuseable = () => {
  return <div></div>;
};
