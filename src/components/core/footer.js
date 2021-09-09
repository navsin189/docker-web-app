import React from "react";
import { Instagram, Envelope, Facebook } from "react-bootstrap-icons";
import "../../components_css/core_css/footer.css";
const Footer = () => {
  return (
    <div id="footer-layout">
      <div>Contact us</div>
      <div id="icons">
        <Instagram />
        <Envelope />
        <Facebook />
      </div>
    </div>
  );
};
export default Footer;
