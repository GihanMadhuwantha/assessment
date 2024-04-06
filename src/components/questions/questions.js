import React, { useState } from "react";
import "../questions/questions.css";

function Questions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="accordion-container row">
      <h3 className="title">Frequently asked questions</h3>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                activeIndex === 0 ? "active" : ""
              }`}
              type="button"
              onClick={() => toggleAccordion(0)}
            >
              Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${
              activeIndex === 0 ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <p>
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                activeIndex === 1 ? "active" : ""
              }`}
              type="button"
              onClick={() => toggleAccordion(1)}
            >
              Lorem ipsum dolor sit amet consectetur. Tortor scelerisque
              integer?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${
              activeIndex === 1 ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <p>
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                activeIndex === 2 ? "active" : ""
              }`}
              type="button"
              onClick={() => toggleAccordion(2)}
            >
              Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse ${
              activeIndex === 2 ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <p>
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
