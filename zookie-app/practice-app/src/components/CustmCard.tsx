import { SvgIconComponent } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  SvgIconTypeMap,
  Button,
} from "@mui/material";
import LightbulbCircleOutlinedIcon from "@mui/icons-material/LightbulbCircleOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { ReactNode } from "react";
import { JsxElement } from "typescript";
import { styled } from "@mui/styles";
import { Box, color } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
interface CardsProp {
  isleft: Boolean;
  heading: string;
  text: string;
  img: any;
  isButton: Boolean;
  isElevation: Boolean;
  isBackground: Boolean;
  cardType?: string;
}

const CustomCardMedia = styled(Box)({
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  lineHeight: "2",
  padding: "10px",
});
const CustmCard = ({
  isleft,
  heading,
  text,
  img,
  isButton,
  isElevation,
  cardType,
  isBackground,
}: CardsProp) => {
  const theme = useTheme();
  const showcard = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Card
      elevation={isElevation ? 0 : 1}
      sx={{
        maxWidth: showcard && cardType !== "serviceCard" ? "100%" : "345px",
        m: 5,

        background: "transparent",
        "&:hover": {
          boxShadow: isBackground ? "2px 2px 20px 2px #F5F5F5 " : "none",
        },
      }}
    >
      <CustomCardMedia>{img}</CustomCardMedia>
      <CardContent sx={{ m: 2 }}>
        <Typography
          align={isleft ? "left" : "center"}
          gutterBottom
          variant={showcard ? "h6" : "h5"}
          component="div"
        >
          {heading}
        </Typography>
        <Typography
          align={isleft ? "left" : "center"}
          variant="body2"
          color="text.secondary"
        >
          {text}
        </Typography>
        {isButton && (
          <Button
            variant="text"
            sx={{
              marginLeft: "-6px",
              marginTop: "10px",
              color: "#007bff",
              "&:hover": { backgroundColor: "transparent", color: "#007bff" },
            }}
          >
            Learn More
            <span style={{ marginLeft: "10px", marginTop: "5px" }}>
              {" "}
              <ArrowForwardIcon sx={{ fontSize: 15 }} />
            </span>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CustmCard;
