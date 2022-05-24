import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Note = (props) => {
    const handleClick=() => {
        props.onDelete(props.id);
    }
    return (
        <div className="note">
            <h1 className="notesHeading">{props.title}</h1>
            <p className="notesPara">{props.content}</p>
            <button className="notesButton" onClick={handleClick}> <FontAwesomeIcon icon={faTrashAlt} /> </button>
        </div>
    )
}

export default Note