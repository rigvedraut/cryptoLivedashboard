import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Menu, Brightness4, Brightness7 } from "@mui/icons-material";
// import  MenuIcon from "@mui/icons-material/MenuIcon";
import { IconButton } from "@mui/material";
import "./styles.css";
export default function DrawerMenu({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="menu-button">
        <IconButton aria-label="open drawer" onClick={toggleTheme}>
          {theme ? (
            <Brightness7 sx={{ color: "white" }} />
          ) : (
            <Brightness4 color="dark" />
          )}
        </IconButton>

        <IconButton onClick={() => setOpen(true)}>
          <Menu style={{ color: "var(--white)" }} />
        </IconButton>
      </div>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
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


          <a href="/News">
            <p className="links">News</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
