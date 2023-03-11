import React from "react";
import styles from "./styles.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import TwitterIcon from "@mui/icons-material/Twitter";
import { RWebShare } from "react-web-share";
import { APP_URL } from "../../constants";
function Footer() {
  return (
    <div id="footer" className="footer-wrapper">
      <h1 className="heading">CryptoTracker.</h1>
      <div className="socials">
        <a href="www.instagram.com">
          <InstagramIcon className="socialIcons" />
        </a>
        <a href="www.facebook.com">
          <FacebookIcon className="socialIcons" />
        </a>
        <a href="www.twitter.com">
          <TwitterIcon className="socialIcons" />
        </a>
        <a href="mailto: www.instagram.com">
          <EmailIcon className="socialIcons" />
        </a>
        <RWebShare
          data={{
            text: "Checkout my crypto tracker made using React!",
            url: APP_URL,
            title: "Crypto Tracker",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <InsertLinkIcon className="socialIcons" />
        </RWebShare>
      </div>
      <footer style={{ backgroundColor: "#ccc", padding: "1rem", textAlign: "center" }}>
      <p>© 2023 Live Crypto-Dashboard Final Year Project By Rigved $ Anaa.</p>
     </footer>

    </div>
  );
}

export default Footer;
