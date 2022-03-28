import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import footer from "/Users/trimulabs/Documents/GitHub/Zookie-Demo-App/zookie-app/practice-app/src/assets/footer-bg.png";
const FooterDesign = styled("div")({
  width: "100%",
  height: "400px",
  backgroundImage: `url(${footer})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});

function Footer() {
  return (
    <div>
      <FooterDesign>
        <Typography variant="h1">Footer</Typography>
      </FooterDesign>
    </div>
  );
}

export default Footer;
