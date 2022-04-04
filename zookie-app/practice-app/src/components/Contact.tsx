import React from "react";
import { Box, styled } from "@mui/system";
import HeadingStyle from "./HeadingStyle";
const ContactContainer = styled("div")({
  width: "100%",
  height: "800px",
  backgroundColor: "#F8F9FA",
});
function Contact() {
  return (
    <>
      <ContactContainer>
        <HeadingStyle heading="GET IN TOUCH"></HeadingStyle>
      </ContactContainer>
    </>
  );
}

export default Contact;
