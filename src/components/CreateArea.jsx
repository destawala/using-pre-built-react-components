import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isActivate, setIsActivate] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function renderTitle() {
    console.log(isActivate);
    if (isActivate) {
      return (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <form className="create-note">
        {renderTitle()}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={() => {
            setIsActivate(true);
          }}
          value={note.content}
          placeholder="Take a note..."
          rows="{isActivate? 3:1}"
        />
        <Zoom in={isActivate}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
