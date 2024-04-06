import React from "react";
import "../webMobile/webMobile.css";
import Image2 from "../../Assets/image 2.png";

function WebMobile() {
  return (
    <div className="container-web">
      <div className="row sub-container">
        <div className="col-md-6 image">
          <img src={Image2} alt="Image description" />
        </div>
        <div className="col-md-6 text-section">
          <h3 className="title">Web & Mobile App Development</h3>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button class="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default WebMobile;
