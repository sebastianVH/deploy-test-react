import logo from './logo.svg';
import './App.css';

function App() {

  const testback = () => {
  fetch("http://https://deploy-backend-six.vercel.app/test")
  .then(response => response.json())
  .then(data => console.log(data))
  }
    

  return (
    <div className="App">
      <header className="App-header">
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
        buton <button onClick={testback}>testear back</button>
      </header>
    </div>
  );
}

export default App;
