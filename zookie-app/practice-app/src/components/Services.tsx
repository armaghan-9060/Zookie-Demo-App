import React from "react";
import { Box, styled } from "@mui/system";
import HeadingStyle from "./HeadingStyle";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  SvgIconTypeMap,
} from "@mui/material";
import CustmCard from "./CustmCard";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import NatureOutlinedIcon from "@mui/icons-material/NatureOutlined";
import LightbulbCircleOutlinedIcon from "@mui/icons-material/LightbulbCircleOutlined";
const ServicesContainer = styled("div")({
  width: "100%",
  height: "800px",
});
const CardFlex1 = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "-20px",
  p: 1,
  m: 1,
  maxWidth: 1699,
});
function Services() {
  const CardData = [
    {
      heading: "Strategy Solutions",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
      img: () => (
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
      ),
    },
    {
      heading: "Strategy Solutions",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
      img: () => (
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
      ),
    },
    {
      heading: "Strategy Solutions",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
      img: () => (
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
      ),
    },
    {
      heading: "Strategy Solutions",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
      img: () => (
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
      ),
    },
    {
      heading: "Strategy Solutions",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
      img: () => (
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
      ),
    },
    {
      heading: "Strategy Solutions",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
      img: () => (
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
      ),
    },
  ];
  return (
    <>
      <ServicesContainer>
        <HeadingStyle heading="OUR SERVICES"></HeadingStyle>
        <CardFlex1>
          {CardData.map((card) => (
            <CustmCard
              isleft={true}
              heading={card.heading}
              text={card.text}
              img={card.img}
            />
          ))}
        </CardFlex1>
      </ServicesContainer>
    </>
  );
}

export default Services;
