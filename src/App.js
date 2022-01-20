import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
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
