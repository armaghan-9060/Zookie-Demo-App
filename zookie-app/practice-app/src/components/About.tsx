import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Home from "./Home";
import AboutBg from "../assets/bg-light-about.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CustmCard from "./CustmCard";
import AboutImage from "../assets/about-img.jpeg";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import NatureOutlinedIcon from "@mui/icons-material/NatureOutlined";
import LightbulbCircleOutlinedIcon from "@mui/icons-material/LightbulbCircleOutlined";
const AboutContainer = styled("div")({
  width: "100%",
  height: "1000px",
  backgroundImage: `url(${AboutBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});
const HeadingStyle = styled(Typography)({
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
const CardFlex = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: "-20px",
});
function align() {
  if (true) {
  }
}
function About() {
  return (
    <>
      <AboutContainer>
        <Box sx={{ p: 8 }}>
          <HeadingStyle>ABOUT US</HeadingStyle>
          <TitleBorder>
            <TitleBorder2></TitleBorder2>
          </TitleBorder>
        </Box>
        <CardFlex>
          <CustmCard
            isleft={false}
            heading="Creative Design"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni."
            img={
              <LightbulbCircleOutlinedIcon
                sx={{
                  fontSize: 50,
                  border: "1px solid black",
                  borderRadius: "50%",
                  "&:hover": {
                    color: "#ffffff !important",
                    backgroundColor: "#007bff",
                    display: "block",
                    borderRadius: "50%",
                  },
                }}
              />
            }
          />
          <CustmCard
            isleft={false}
            heading="Strategy Solutions"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni."
            img={
              <CoPresentOutlinedIcon
                sx={{
                  fontSize: 50,
                  border: "1px solid black",
                  borderRadius: "50%",
                  "&:hover": {
                    color: "#ffffff !important",
                    backgroundColor: "#007bff",
                    display: "block",
                    borderRadius: "50%",
                  },
                }}
              />
            }
          />
          <CustmCard
            isleft={false}
            heading="Dynamic Growth"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni."
            img={
              <NatureOutlinedIcon
                sx={{
                  fontSize: 50,
                  border: "px solid black",
                  borderRadius: "50%",
                  "&:hover": {
                    color: "#ffffff !important",
                    backgroundColor: "#007bff",
                    display: "block",
                    borderRadius: "50%",
                  },
                }}
              />
            }
          />
        </CardFlex>
        <Home
          heading="Performancect Solution For Small Businesses          "
          description="UTemporibus autem quibusdam a aut officiis debitis rerum necessitatibus saepeeveniet ut et voluptates repudiandae sint a molestiae recusandae itaque earum rerum hic tenetur a sapiente delectus ut at aut reiciendis voluptatibus maiores alias consequatur perferendis doloribus asperiores rerum necessitat saepeeveniet.

          "
          buttontext="LEARN MORE"
          image={AboutImage}
          bgColor="none"
          textcolor="black"
          maxwidth="600px"
          imageHeight="400px"
          variant="h6"
          ButtonType="contained"
        />
      </AboutContainer>
    </>
  );
}

export default About;
