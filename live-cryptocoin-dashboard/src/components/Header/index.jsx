import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness7, Brightness4 } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ButtonFilled } from "../Utilities/Buttons";
import DrawerMenu from "./Drawer";
import "./styles.css";
function Header() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkTheme, setDarkTheme] = useState(true);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode || darkTheme ? "dark" : "light",
        },
      }),
    [prefersDarkMode, darkTheme]
  );

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultDark = storedTheme === "dark" || prefersDark;
    if (defaultDark) {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const toggleTheme = (e) => {
    if (darkTheme) {
      setLight();
    } else {
      setDark();
    }
    setDarkTheme(!darkTheme);
  };
  return (
    <div className="navbar">
      <a href="/">
        <h1 className="heading">
        Buoyant Coins<span style={{ color: "var(--blue)"}}>.</span>
        </h1>
      </a>

      <div className="links-flex">
        <IconButton aria-label="open drawer" onClick={toggleTheme}>
          {darkTheme ? (
            <Brightness7 sx={{ color: "white" }} />
          ) : (
            <Brightness4 color="dark" />
          )}
        </IconButton>
        <a href="/">
          <p className="links">Home</p>
        </a>
        <a href="/dashboard">
          <p className="links">Dashboard</p>
        </a>
        <a href="/chart">
          <p className="links">Chart+</p>
        </a>
        <a href="/compare">
          <p className="links">Compare</p>
        </a>
        <a href="/news">
          <p className="links">News</p>
        </a>
        
        {/* <a href="/dashboard">
          <p className="links">
            <ButtonFilled>Dashboard </ButtonFilled>
          </p>
        </a> */}
      </div>
      <div className="menu-div">
        <DrawerMenu theme={darkTheme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default Header;
