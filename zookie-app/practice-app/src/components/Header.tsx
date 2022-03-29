import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { borderBottom, styled } from "@mui/system";
import React from "react";
import logo from "../assets/zooki.png";

const TabComponent = styled("div")({
  fontFamily: "sans-serif",
  color: "rgba(255, 255, 255, 0.6)",
});
const Tab1 = styled(Tab)({
  paddingBottom: "0px",
  lineHeight: "0px",
  fontWeight: "900",
  fontSize: "12px",
  fontFamily: "sans-serif",
  "&:hover": {
    color: "#ffffff !important",
    borderBottom: "1px solid white",
  },
});
function Header() {
  return (
    <div>
      <React.Fragment>
        <AppBar
          elevation={0}
          position="fixed"
          sx={{
            backgroundColor: "black",
            height: "75px",
            paddingTop: "5px",
            background: "transparent",
          }}
        >
          <Toolbar>
            <img
              src={logo}
              alt="company logo"
              style={{ width: "100px", marginLeft: "40px" }}
            />

            <Tabs sx={{ marginLeft: "auto" }}>
              <TabComponent>
                <Tab1 label="Home" />
                <Tab1 label="About" />
                <Tab1 label="Services" />
                <Tab1 label="Feature" />
                <Tab1 label="Pricing" />
                <Tab1 label="Clients" />
                <Tab1 label="Blog" />
                <Tab1 label="Contact Us " />
              </TabComponent>
            </Tabs>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
}

export default Header;
