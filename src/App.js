import logo from './logo.svg';
import './App.css';
import navBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <navBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          mi primera pagina
        </p>
      </header>
    </div>
  );
}

export default App;
