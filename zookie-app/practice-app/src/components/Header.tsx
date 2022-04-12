import { AppBar, Button, Tab, Tabs, Toolbar } from "@mui/material";
import { borderBottom, styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import logo from "../assets/zooki.png";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Menu = styled(Button)({
  marginLeft: "auto",
  color: "white",
});

const TabComponent = styled("div")({
  maxWidth: "100%",
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
  "&:active": {
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
  const [open, setOpen] = useState("");
  // dropdown
  const handleChange1 = (event: SelectChangeEvent) => {
    setOpen(event.target.value as string);
  };
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  const StyledAppBar = styled("div")({
    position: "fixed",
    zIndex: 100,
    backgroundColor: "black",
    width: "100%",
    maxWidth: "100vw",
    height: "75px",
    overflow: "hidden",
    background: colorChange ? "black" : "transparent",
  });

  return (
    <StyledAppBar>
      <Toolbar>
        <img
          src={logo}
          alt="company logo"
          style={{ width: "100px", marginLeft: "40px" }}
        />
        {matches ? (
          <Menu>
            {" "}
            <MenuSharpIcon />{" "}
          </Menu>
        ) : (
          <Tabs
            sx={{ marginLeft: "auto" }}
            value={value}
            onChange={handleChange}
          >
            <TabComponent>
              {/* {TABS.map((tab)=> <Tab1 key = {tab.value} label={tab.label} onClick={()=> onScrollClick(tab.id)} />)} */}
              <Tab1
                label="Home"
                onClick={() => onScrollClick("Home")}
                value="one"
              />
              <Tab1
                label="About"
                onClick={() => onScrollClick("About")}
                value="two"
              />
              <Tab1
                label="Services"
                onClick={() => onScrollClick("Services")}
                value="three"
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
        )}
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
