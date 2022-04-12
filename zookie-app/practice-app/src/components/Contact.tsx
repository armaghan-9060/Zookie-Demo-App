import React, { useState } from "react";
import { Box, lineHeight, styled } from "@mui/system";
import HeadingStyle from "./HeadingStyle";
import { Button, Grid, TextField, Typography } from "@mui/material";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { IconButton } from "@mui/material";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import WhatsappSharpIcon from "@mui/icons-material/WhatsappSharp";
import InsertEmoticonRoundedIcon from "@mui/icons-material/InsertEmoticonRounded";
import axios, { Axios } from "axios";
const ContactContainer = styled("div")({
  height: "auto",
  backgroundColor: "#F8F9FA",
});
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

  return (
    <>
      <ContactContainer id="Contact">
        <HeadingStyle heading="GET IN TOUCH"></HeadingStyle>

        <Grid
          container
          direction="row"
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            width: { lg: "1100px" },
            ml: 5,
            mb: 5,
          }}
        >
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            sx={{ ml: 1, p: 13 }}
            lg={8}
          >
            <Grid item container direction="row">
              <Grid item>
                {" "}
                <CustomTextField
                  label="Name"
                  type="text"
                  color="warning"
                  variant="standard"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={(event) => changeHandler(event)}
                  sx={{ width: "200px" }}
                />{" "}
              </Grid>
              <Grid item>
                {" "}
                <CustomTextField
                  label="Email"
                  type="email"
                  color="warning"
                  variant="standard"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={(event) => changeHandler(event)}
                  sx={{ width: "200px", ml: 4 }}
                />{" "}
              </Grid>
            </Grid>
            <Grid item>
              {" "}
              <CustomTextField
                label="Subject"
                color="warning"
                type="text"
                sx={{ width: "450px" }}
                variant="standard"
                id="subject"
                name="subject"
                value={userInfo.subject}
                onChange={(event) => changeHandler(event)}
              />{" "}
            </Grid>
            <Grid item>
              {" "}
              <CustomTextField
                label="Message"
                variant="standard"
                type="text"
                color="warning"
                sx={{ width: "450px" }}
                id="message"
                multiline
                rows={4}
                name="message"
                value={userInfo.message}
                onChange={(event) => changeHandler(event)}
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
            lg={3}
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
