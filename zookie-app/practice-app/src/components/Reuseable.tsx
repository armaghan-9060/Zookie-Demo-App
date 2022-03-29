import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  paddingTop: "70px",
});
export const TextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  color: "white",
  lineHeight: "2",
});
export const ImgBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
export const HeroImg = styled(Box)({
  position: "relative",
  zIndex: "20",
});
export const Reuseable = () => {
  return <div></div>;
};
