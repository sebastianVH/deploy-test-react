import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const testback = async () => {
    try {
      const {data} = await axios.get("http://https://deploy-backend-six.vercel.app")
      console.log(data)
    } catch (error) {
      
    }
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
