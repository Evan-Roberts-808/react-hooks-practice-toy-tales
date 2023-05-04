import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(response => response.json())
    .then(toys => {
      setToys(toys)
    })
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(formData) {
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image,
        likes: formData.likes
      })
    })
    .then(response => response.json())
    .then((newToy) => {
      setToys(...toys, newToy)
    })
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE', 
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  // function handleLikes(likes, id) {
  //   fetch(`http://localhost:3001/toys/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: {
  //       'likes': likes + 1
  //     }
  //   })
  // }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onHandleDelete={handleDelete} toys={toys}/>
    </>
  );
}

export default App;