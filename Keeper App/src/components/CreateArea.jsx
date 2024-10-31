import React, { useState } from "react";

function CreateArea(props) {
  const [input, setinput] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setinput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAddNote(event) {
    event.preventDefault();
    props.addNote(input);
    setinput(()=>({
      title :"",
      content:""
    }))
  }

  return (
    <div>
      <form onSubmit={handleAddNote}>
        <input
          name="title"
          placeholder="Title"
          value={input.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="4"
          value={input.content}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
