import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((response) => response.json())
    .then((toys) => {
      setToys(toys)
    })
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy) {
    setToys([...toys, newToy])
  }

  function handleDeleteToy(deletedToy){
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id);
    setToys(updatedToys)
  }

  function handleLikes(likedToy) {
    const updatedToy = toys.map((toy) => toy.id === likedToy.id ? likedToy : toy)
    setToys(updatedToy)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDeleteToy} onLike={handleLikes}/>
    </>
  );
}

export default App;
