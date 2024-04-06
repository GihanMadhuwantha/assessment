import React from "react";
import Logo from "../../Assets/Logo.png";
import "../footer/footer.css";

function Footer() {
  return (
    <div className="container-footer">
      <div className="row-section">
        <div className="col logoSection">
          <img src={Logo} alt="Logo" />
          <p className="company-intro">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="col"></div>

        <div className="col technologies">
          <h2>Our Technologies</h2>
          <p>ReactJS</p>
          <p>Gatsby</p>
          <p>NextJS</p>
          <p>NodeJS</p>
        </div>
        <div className="col services">
          <h2>Our services</h2>
          <p>Social media Marketing</p>
          <p>Web & Mobile App Development</p>
          <p>Data & Analytics</p>
        </div>
      </div>
      <div className="horizontal-line row"></div>
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-center footerBottom">
          <p style={{ marginRight: "10px" }}>Privacy Policy</p>
          <div className="verticle-line"></div>
          <p style={{ marginLeft: "10px" }}>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
