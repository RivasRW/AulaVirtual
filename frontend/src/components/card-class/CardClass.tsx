import React from "react";
import "./CardClass.css";

export default function CardClass() {
  return (
    <div className="card-class video">
      <div className="banner-class">
        <img
          src="https://via.placeholder.com/500x281?text=Placeholder"
          alt=""
        />

        <h4 className="class-title">Inglés I</h4>
      </div>

      <div className="content">
        <img src="/img/avatar.jpg" alt="" />
        <p>Johan Castillo</p>
      </div>
    </div>
  );
}
