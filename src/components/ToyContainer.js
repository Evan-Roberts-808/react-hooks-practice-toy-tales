import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys , onHandleDelete }) {
  const toysList = toys.map((toy) => {
      return <ToyCard onHandleDelete={() => onHandleDelete(toy.id) } key={toy.id} toy={toy}/>
  })
  return (
    <div id="toy-collection">{toysList}</div>
  );
}

export default ToyContainer;
