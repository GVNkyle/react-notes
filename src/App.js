import './App.css';
import Header from './components/Header';
import NoteArea from './components/NoteArea';
import useSessionStorage from './utilities/useSessionStorage';
import Note from './components/Note';
function App() {
  const [notes, setNotes] = useSessionStorage("notes", [
    {
      id: 0,
      title: "Write Your Title",
      content: "And, content here. :)"
    }
  ]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    });
  };

  return (
    <div className="App">
      <Header />
      <NoteArea onAdd={addNote} />
      {
        notes.map((note, index) => {
          return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
        })
      }
    </div>
  );
}

export default App;
