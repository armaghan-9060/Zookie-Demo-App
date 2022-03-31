import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
const HeadingStyled = styled(Typography)({
  color: "#343A40",
  fontFamily: "sans-serif",
  fontSize: "1.75rem",
  fontWeight: "300",
  lineHeight: "1.2",
});
const TitleBorder = styled(Box)({
  position: "absolute",
  width: "120px",
  height: "2px",
  backgroundColor: "#005bea",
  borderRadius: "50px",
  marginTop: "15px",
  zIndex: "20",
});
const TitleBorder2 = styled(Box)({
  position: "absolute",
  width: "30px",
  height: "6px",
  backgroundColor: "#ff8700",
  borderRadius: "50px",
  zIndex: "10",
  marginTop: "-2px;",
});
interface HeadingProp {
  heading: string;
}
function HeadingStyle({ heading }: HeadingProp) {
  return (
    <>
      <Box sx={{ p: 8 }}>
        <HeadingStyled>{heading}</HeadingStyled>
        <TitleBorder>
          <TitleBorder2></TitleBorder2>
        </TitleBorder>
      </Box>
    </>
  );
}

export default HeadingStyle;
