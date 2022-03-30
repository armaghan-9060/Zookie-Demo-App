import { SvgIconComponent } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  SvgIconTypeMap,
} from "@mui/material";
import LightbulbCircleOutlinedIcon from "@mui/icons-material/LightbulbCircleOutlined";

import React from "react";
import { ReactNode } from "react";
import { JsxElement } from "typescript";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
interface CardsProp {
  isleft: Boolean;
  heading: string;
  text: string;
  img: any;
}

const CustomCardMedia = styled(Box)({
  height: "40px",
  display: "flex",
  justifyContent: "center",
  lineHeight: "2",
  padding: "10px",
});
const CustmCard = ({ isleft, heading, text, img }: CardsProp) => {
  return (
    <Card elevation={0} sx={{ maxWidth: 345, m: 5, background: "transparent" }}>
      <CustomCardMedia>{img}</CustomCardMedia>
      <CardContent>
        <Typography
          align={isleft ? "left" : "center"}
          gutterBottom
          variant="h5"
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
      </CardContent>
    </Card>
  );
};

export default CustmCard;
