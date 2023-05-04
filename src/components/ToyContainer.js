import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete, onLike}) {
  const toysList = toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} onDelete={onDelete} onLike={onLike}/>
  })
  return (
    <div id="toy-collection">{toysList}</div>
  );
}

export default ToyContainer;
