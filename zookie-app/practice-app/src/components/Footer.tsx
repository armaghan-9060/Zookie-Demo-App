import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import footer from "/Users/trimulabs/Documents/GitHub/Zookie-Demo-App/zookie-app/practice-app/src/assets/footer-bg.png";

const FooterDesign = styled("div")({
  width: "100%",
  height: "auto",
  backgroundImage: `url(${footer})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});
const LowerFooter = styled("div")({
  width: "100%",
  height: "80px",
  backgroundColor: "#343A40",
});
const useStyles = makeStyles({
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "#6C757D",
    fontFamily: "san-serif",
    fontSize: "14px",
    lineHeight: "2",
    cursor: "pointer",
    "&:hover": {
      color: "#FF8700 !important",
      borderBottom: "1px solid #FF8700",
      fontWeight: "bold",
    },
  },
  textLink: {
    color: "#6C757D",
    fontFamily: "san-serif",
    fontSize: "14px",
    lineHeight: "2",
  },
  griditem: {
    margin: "7em",
  },
  heading: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "30px",
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <>
      <FooterDesign>
        <Grid
          container
          justifyContent="center"
          className={classes.mainContainer}
        >
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.heading}>
                {" "}
                ABOUT US{" "}
              </Grid>
              <Grid item className={classes.textLink}>
                {" "}
                Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
                <br /> Consequuntur, quos?{" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.heading}>
                {" "}
                COMPANY{" "}
              </Grid>
              <Grid item className={classes.link}>
                {" "}
                Custom Software Development{" "}
              </Grid>
              <Grid item className={classes.link}>
                {" "}
                Mobile App Development{" "}
              </Grid>
              <Grid item className={classes.link}>
                {" "}
                Website Development{" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.heading}>
                {" "}
                SUPPORT{" "}
              </Grid>
              <Grid item className={classes.link}>
                {" "}
                Vision{" "}
              </Grid>
              <Grid item className={classes.link}>
                {" "}
                Technology{" "}
              </Grid>
              <Grid item className={classes.link}>
                {" "}
                Process{" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.heading}>
                {" "}
                LEGAL{" "}
              </Grid>
              <Grid item className={classes.link}>
                {" "}
                History{" "}
              </Grid>
              <Grid item className={classes.link}>
                {" "}
                Team{" "}
              </Grid>
              <Grid item className={classes.link}>
                {" "}
                Contact Us{" "}
              </Grid>
            </Grid>
          </Grid>
          {
            <LowerFooter>
              <Grid container justifyContent="center">
                <Grid item>
                  <p style={{ color: "white", paddingTop: "10px" }}>
                    2022 @Zooki. Design Themesbrand
                  </p>
                </Grid>
              </Grid>
            </LowerFooter>
          }
        </Grid>
      </FooterDesign>
    </>
  );
}

export default Footer;
