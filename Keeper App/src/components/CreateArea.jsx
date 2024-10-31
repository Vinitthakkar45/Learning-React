import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

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
    setinput(() => ({
      title: "",
      content: "",
    }));
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
        <Fab
          type="submit"
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            right: "18px",
            bottom: "-18px",
            backgroundColor: "#f5ba13",
            color: "#fff",
            width: "50px",
            height: "50px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.7)",
            "&:hover": {
              backgroundColor: "#f5a013",
            },
          }}
        >
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
