import React, { useState } from "react";

function ToyForm({ onNewToy }) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleChange(event) {
    setFormData({...formData, [event.target.name] : event.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': formData.name,
        'image': formData.image,
        'likes': formData.likes
      })
    })
    .then(response => response.json())
    .then(newToy => {
      onNewToy(newToy)
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
