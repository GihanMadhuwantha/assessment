import React from "react";
import "../digitalStrategy/digitalStrategy.css";
import Image1 from "../../Assets/image 1.png";

function digitalStrategy() {
  return (
    <div className="container-dig">
      <div className="row sub-container">
        <div className="col-md-6 text-section">
          <h3 className="title">Digital Strategy Consulting</h3>
          <p>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <button class="learn-more-btn">Learn More</button>
        </div>
        <div className="col-md-6 image">
          <img src={Image1} alt="Image description" />
        </div>
      </div>
    </div>
  );
}

export default digitalStrategy;
