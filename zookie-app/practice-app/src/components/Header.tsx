import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { borderBottom, styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import logo from "../assets/zooki.png";

const TabComponent = styled("div")({
  fontFamily: "sans-serif",
  color: "rgba(255, 255, 255, 0.3)",
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
    fontWeight: "bold",
  },
});
function Header() {
  // const TABS= [{
  //     label: 'Home', value: '1', id: 'Home',
  //     label: '', value: '1', id: 'Home',
  //     label: 'Home', value: '1', id: 'Home',
  //     label: 'Home', value: '1', id: 'Home',
  // }]
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(false);
    } else {
      setColorchange(true);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  //tabs handler
  const [value, setValue] = React.useState("one");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  //scroll

  const onScrollClick = (id: string) => {
    console.log(
      "document?.getElementById(id) :>> ",
      document?.getElementById(id)?.offsetHeight
    );
    window.scrollTo({
      top: (document.getElementById(id)?.offsetTop as number) - 75,
      behavior: "smooth",
    });
  };
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
            background: colorChange ? "transparent" : "black",
          }}
        >
          <Toolbar>
            <img
              src={logo}
              alt="company logo"
              style={{ width: "100px", marginLeft: "40px" }}
            />

            <Tabs
              sx={{ marginLeft: "auto" }}
              value={value}
              onChange={handleChange}
            >
              <TabComponent>
                {/* {TABS.map((tab)=> <Tab1 key = {tab.value} label={tab.label} onClick={()=> onScrollClick(tab.id)} />)} */}
                <Tab1 label="Home" onClick={() => onScrollClick("Home")} />
                <Tab1 label="About" onClick={() => onScrollClick("About")} />
                <Tab1
                  label="Services"
                  onClick={() => onScrollClick("Services")}
                />
                <Tab1 label="Feature" />
                <Tab1 label="Pricing" />
                <Tab1 label="Clients" />
                <Tab1 label="Blog" />
                <Tab1
                  label="Contact Us "
                  onClick={() => onScrollClick("Contact")}
                />
              </TabComponent>
            </Tabs>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
}

export default Header;
