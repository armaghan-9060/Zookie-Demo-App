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
import StorageSharpIcon from "@mui/icons-material/StorageSharp";
import ColorLensSharpIcon from "@mui/icons-material/ColorLensSharp";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TokenIcon from "@mui/icons-material/Token";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import AppleIcon from "@mui/icons-material/Apple";
import NatureOutlinedIcon from "@mui/icons-material/NatureOutlined";
import LightbulbCircleOutlinedIcon from "@mui/icons-material/LightbulbCircleOutlined";
const ServicesContainer = styled("div")({
  width: "100%",
  height: "auto",
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
      heading: "Awesome Support",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
      img: () => (
        <StorageSharpIcon
          sx={{
            marginTop: "10px",
            marginLeft: "10px",
            fontSize: 50,
            border: "1px solid transparent",
            background: "rgba(0, 91, 234, 0.08)",
            borderRadius: "50%",
            color: "#007bff",
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
      heading: "Unlimited Colors",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
      img: () => (
        <ColorLensSharpIcon
          sx={{
            marginTop: "10px",
            marginLeft: "10px",
            fontSize: 50,
            border: "1px solid transparent",
            background: "rgba(0, 91, 234, 0.08)",
            borderRadius: "50%",
            color: "#007bff",
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
        <QueryStatsIcon
          sx={{
            marginTop: "10px",
            marginLeft: "10px",
            fontSize: 50,
            border: "1px solid trasparent",
            background: "rgba(0, 91, 234, 0.08)",
            borderRadius: "50%",
            color: "#007bff",
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
      heading: "Digital Design",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
      img: () => (
        <FormatColorFillIcon
          sx={{
            marginTop: "10px",
            marginLeft: "10px",
            fontSize: 50,
            border: "1px solid transparent",
            background: "rgba(0, 91, 234, 0.08)",
            borderRadius: "50%",
            color: "#007bff",
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
      heading: "Easy to customize",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
      img: () => (
        <AppleIcon
          sx={{
            marginTop: "10px",
            marginLeft: "10px",
            fontSize: 50,
            border: "1px solid transparent",
            background: "rgba(0, 91, 234, 0.08)",
            borderRadius: "50%",
            color: "#007bff",
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
      heading: "Truly Multipurpose",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
      img: () => (
        <TokenIcon
          sx={{
            marginTop: "10px",
            marginLeft: "10px",
            fontSize: 50,
            border: "1px solid transparent",
            background: "rgba(0, 91, 234, 0.08)",
            borderRadius: "50%",
            color: "#007bff",
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
              isButton={true}
              isElevation={false}
              isBackground={true}
            />
          ))}
        </CardFlex1>
      </ServicesContainer>
    </>
  );
}

export default Services;
