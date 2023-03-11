import React from "react";
import "./styles.css";
import iPhone from "../../assets/iphone.png";
import gradient from "../../assets/gradient.png";
import { RWebShare } from "react-web-share";
import { ButtonOutlined, ButtonFilled } from "../Utilities/Buttons";
import { motion } from "framer-motion";
import { APP_URL } from "../../constants";
function Landing() {
  return (
    <div className="flex-wrapper">
      <div className="heading-container">
        <motion.h1
          className="big-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <span className="stroke">Fish Your</span>
          <br />
          <span className="big-heading-blue">Coin Now.</span>
        </motion.h1>
        <p className="para">
          Keep the cryptos you like in your sight!! Checkout the dashboard now!
        </p>
        <div className="button-div">
          <a href="/dashboard">
            <ButtonFilled>Dashboard</ButtonFilled>
          </a>
          <RWebShare
            data={{
              text: "Checkout my crypto tracker made using React!",
              url: APP_URL,
              title: "Crypto Tracker",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <ButtonOutlined>Share</ButtonOutlined>
          </RWebShare>
        </div>
      </div>

      <div className="img-box">
        <img className="gradient" src={gradient} alt="Iphone" />
        <motion.img
          src={iPhone}
          className="phone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default Landing;
