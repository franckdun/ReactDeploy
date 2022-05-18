// import logo from './logo.svg';
import './App.css';
import antonioGif from "./antonio.gif"

function App() {
  return (
    <div className="App">
      <div className="App">
        <img src={antonioGif} alt="antonio gif" />
        <h1>Nul ne peut atteindre l'aube sans passer par le chemin de la nuit.</h1>
        <p>Khalil Gibran</p>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
