import React from "react";
import "./CardPortafolio.css";

export default function Card() {
  return (
    <>
      <div className="cardContainer">
        <img
          className="cardImage"
          src="https://static.vecteezy.com/system/resources/thumbnails/036/483/161/small_2x/ai-generated-interior-of-a-recording-studio-with-lots-of-equipment-ai-generative-photo.jpg"
          alt="portafolio card"
        />
        <div className="cardContent">
          <span className="title">Titulo</span>
          <span className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            ut, voluptatibus aut voluptates veniam voluptatum deserunt debitis
            distinctio magni, rem minima neque odio adipisci exercitationem
            obcaecati necessitatibus totam id possimus.
          </span>
          <button className="cardButton"> Link</button>
        </div>
      </div>
    </>
  );
}
