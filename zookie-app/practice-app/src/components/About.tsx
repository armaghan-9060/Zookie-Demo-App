import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Home from "./Home";
import AboutBg from "../assets/bg-light-about.png";
import HeadingStyle from "./HeadingStyle";
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

const CardFlex = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: "-20px",
});

function About() {
  return (
    <>
      <AboutContainer>
        <HeadingStyle heading="About Us"></HeadingStyle>
        <CardFlex>
          <CustmCard
            isleft={false}
            isButton={false}
            isElevation={true}
            isBackground={false}
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
            isButton={false}
            isElevation={true}
            isBackground={false}
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
            isButton={false}
            isElevation={true}
            isBackground={false}
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
          buttontext=""
          image={AboutImage}
          bgColor="none"
          textcolor="black"
          maxwidth="600px"
          imageHeight="400px"
          variant="h6"
          ButtonType="contained"
          buttonColor="transparent"
          buttonTextColor="#FF8700"
          isSpanButton
        />
      </AboutContainer>
    </>
  );
}

export default About;
