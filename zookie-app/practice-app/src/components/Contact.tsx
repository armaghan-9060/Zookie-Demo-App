import React, { useState } from "react";
import { Box, lineHeight, styled } from "@mui/system";
import HeadingStyle from "./HeadingStyle";
import {
  Button,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { IconButton } from "@mui/material";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import WhatsappSharpIcon from "@mui/icons-material/WhatsappSharp";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import InsertEmoticonRoundedIcon from "@mui/icons-material/InsertEmoticonRounded";
import axios, { Axios } from "axios";
const ContactContainer = styled("div")((props) => ({
  height: "800px",
  backgroundColor: "#F8F9FA",
  [props.theme.breakpoints.down("lg")]: {
    height: "auto",
  },
}));
const CustomTextField = styled(TextField)({
  margin: "15px",
});

const CustomFollowButton = styled(Button)({});
function Contact() {
  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  //const [subject, setSubject] = useState("");
  //const [message, setMessage] = useState("");

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const submit = (e: any) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: userInfo.name,
        body: userInfo.email,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  const changeHandler = (e: any) => {
    console.log(
      "[e.target.name]: e.target.value :>> ",
      e.target.name,
      e.target.value
    );
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  //const handleSubmit = () => {
  //console.log("userInfo :>> ", userInfo);
  //};
  const theme = useTheme();
  const contactContainer = useMediaQuery(theme.breakpoints.down("lg"));
  const contactContainer1 = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <ContactContainer id="Contact">
        <HeadingStyle heading="GET IN TOUCH"></HeadingStyle>

        <Grid
          container
          direction={contactContainer ? "column" : "row"}
          sx={{
            boxShadow: { lg: "rgba(32, 29, 29, 0.24) 0px 3px 8px" },
            width: { lg: "1100px", md: "100%", sm: "100%", xs: "100%" },
            ml: contactContainer1 ? 0 : 8,
            mb: contactContainer1 ? 0 : 0,
          }}
        >
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            sx={{ ml: 1, p: { lg: 10, md: 10, sm: 5, xs: 3 }, pl: { xs: 0 } }}
            lg={8}
          >
            <Grid
              item
              container
              direction={contactContainer ? "column" : "row"}
            >
              <Grid item>
                {" "}
                <CustomTextField
                  label="Name"
                  type="text"
                  color="warning"
                  variant="outlined"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={(event) => changeHandler(event)}
                  sx={{ width: contactContainer ? "75%" : "200px" }}
                />{" "}
              </Grid>
              <Grid item>
                {" "}
                <CustomTextField
                  label="Email"
                  type="email"
                  color="warning"
                  variant="outlined"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={(event) => changeHandler(event)}
                  sx={{ width: contactContainer ? "75%" : "200px", ml: 2 }}
                />{" "}
              </Grid>
            </Grid>
            <Grid item>
              {" "}
              <CustomTextField
                label="Subject"
                color="warning"
                type="text"
                sx={{ width: contactContainer ? "75%" : "450px" }}
                variant="outlined"
                id="subject"
                name="subject"
                value={userInfo.subject}
                onChange={(event) => changeHandler(event)}
              />{" "}
            </Grid>
            <Grid item>
              {" "}
              <TextareaAutosize
                minRows={6}
                placeholder="Message"
                color="warning"
                style={{
                  width: contactContainer ? "75%" : "450px",
                  margin: "15px",
                  background: "transparent",
                }}
              />{" "}
            </Grid>
            <Grid item>
              {" "}
              <Button
                onClick={submit}
                variant="contained"
                sx={{ backgroundColor: "#FF8700", ml: 2, mt: 2, p: 2 }}
              >
                {" "}
                SEND MESSAGE{" "}
              </Button>{" "}
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignContent="flex-start"
            alignItems="flex-start"
            lg={contactContainer ? 12 : 3}
            sx={{ pl: contactContainer ? 5 : 0 }}
          >
            <Grid
              item
              container
              direction="row"
              sx={{ mb: 2, lineHeight: "2" }}
            >
              <CallRoundedIcon sx={{ fontSize: 20, mr: 2 }} />
              <Typography>
                {" "}
                Call: <br /> 021-345-9821{" "}
              </Typography>
            </Grid>
            <Grid item container direction="row" sx={{ mb: 2 }}>
              <MailOutlineRoundedIcon sx={{ fontSize: 20, mr: 2 }} />
              <Typography>
                {" "}
                Email: <br /> armaghan906@gmail.com{" "}
              </Typography>
            </Grid>
            <Grid item container direction="row" sx={{ mb: 2 }}>
              <LocationOnRoundedIcon sx={{ fontSize: 20, mr: 2 }} />
              <Typography>
                {" "}
                Address: <br /> 140-D PIA Hosuing Society <br /> Lahore{" "}
              </Typography>
            </Grid>
            <Grid item>
              {" "}
              <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4 }}>
                {" "}
                Follow{" "}
              </Typography>{" "}
            </Grid>
            <Grid item container direction="row">
              <Grid item>
                <IconButton>
                  <FacebookSharpIcon />
                </IconButton>{" "}
              </Grid>
              <Grid item>
                <IconButton>
                  <WhatsappSharpIcon />
                </IconButton>{" "}
              </Grid>
              <Grid item>
                <IconButton>
                  <InsertEmoticonRoundedIcon />
                </IconButton>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContactContainer>
    </>
  );
}

export default Contact;
