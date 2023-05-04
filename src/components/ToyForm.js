import React, { useState } from "react";

function ToyForm({onNewToy}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0
  })

  console.log(formData)

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onNewToy(formData)
  }

  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default ToyForm;