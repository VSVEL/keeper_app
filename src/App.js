
import './App.css';
import Heading from './components/Heading';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './notes';

function App() {
  return (
    <div className="App">
    <Heading />
    {notes.map((x) => (
    <Note 
    key={x.key} 
    title={x.title} 
    content={x.content} 
    />
    ))}
    <Footer />
    </div>
  );
}

export default App;

