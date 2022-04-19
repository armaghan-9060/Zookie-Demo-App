import React from "react";
import { Box, styled } from "@mui/system";
import HeadingStyle from "./HeadingStyle";
import axios from "axios";
import CardData from "../const/CardData";
import CustmCard from "./CustmCard";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
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
  // hook to hold data from online api
  const [data, setData] = useState([]);
  //media query
  const theme = useTheme();
  const marginText = useMediaQuery(theme.breakpoints.down("lg"));
  //hook to to run API instantly using useeffect
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        //assigning the API data to the hook usestate
        setData(response.data);
        console.log(data);
      })
      .catch((e) => {
        console.log("failed to fetch data from API");
      });
  }, []);

  return (
    <>
      <ServicesContainer id="Services">
        <HeadingStyle heading="OUR SERVICES"></HeadingStyle>
        <CardFlex1
          sx={{ width: "100%", marginLeft: marginText ? "0px" : "-45px" }}
        >
          {CardData.map((card, ind) => (
            <>
              {ind < 6
                ? data.map(
                    (d: any, ind) =>
                      ind < 1 && (
                        <CustmCard
                          isleft={true}
                          heading={d.title}
                          text={d.body}
                          img={card.img}
                          isButton={true}
                          isElevation={false}
                          isBackground={true}
                          cardType="serviceCard"
                        />
                      )
                  )
                : null}
            </>
          ))}
        </CardFlex1>
      </ServicesContainer>
    </>
  );
}

export default Services;
