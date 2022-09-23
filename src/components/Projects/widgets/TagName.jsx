import React from "react";

const tags = {
  borderRadius: "50%",
  height: "25px",
  width: "25px",
  border: "2px solid white",
  padding: "0.7rem",
  color: "white",
  marginLeft: "-0.5rem",
  zIndex: 100,
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const TagName = ({ title }) => {
  const colors = ["red", "blue", "green"];
  const random = colors[Math.floor(Math.random() * colors.length)];
  return <span style={{ backgroundColor: random, ...tags }}>{title}</span>;
};

export default TagName;
