import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const NoteArea = (props) => {
  const [note,setNote] = useState({
        title: "",
        content: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        };
    });
  };

  const handleSubmit = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  };


  return (
    <div>
        <form className='create-note'>
            {(
                <input className='create-input' name='title' onChange={handleChange} value={note.title} placeholder="Title"/>
            )}
            <textarea className='create-text' name='content' onChange={handleChange} value={note.content} placeholder="Take a note"/>
            <button className='create-button' onClick={handleSubmit}><FontAwesomeIcon icon={faCirclePlus} /></button>
        </form>
    </div>
  )
}

export default NoteArea;