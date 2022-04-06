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
const ContactContainer = styled("div")({
  width: "100%",
  height: "800px",
  backgroundColor: "#F8F9FA",
});
const CustomTextField = styled(TextField)({
  margin: "15px",
});
const CustomFollowButton = styled(Button)({});
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <ContactContainer id="Contact">
        <HeadingStyle heading="GET IN TOUCH"></HeadingStyle>
        <Grid
          container
          direction="row"
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            width: "1100px",
            ml: 5,
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
                  color="warning"
                  variant="standard"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  sx={{ width: "200px" }}
                />{" "}
              </Grid>
              <Grid item>
                {" "}
                <CustomTextField
                  label="Email"
                  color="warning"
                  variant="standard"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  sx={{ width: "200px", ml: 4 }}
                />{" "}
              </Grid>
            </Grid>
            <Grid item>
              {" "}
              <CustomTextField
                label="Subject"
                color="warning"
                sx={{ width: "450px" }}
                variant="standard"
                id="subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />{" "}
            </Grid>
            <Grid item>
              {" "}
              <CustomTextField
                label="Message"
                variant="standard"
                color="warning"
                sx={{ width: "450px" }}
                id="message"
                multiline
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />{" "}
            </Grid>
            <Grid item>
              {" "}
              <Button
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
