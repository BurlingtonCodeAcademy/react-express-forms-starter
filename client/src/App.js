import { Link, Outlet } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/">Home</Link> | <Link to="about">About</Link> |{' '}
          <Link to="contact">Contact</Link>
        </nav>
        <h1>This is the parent {'<App />'} component</h1>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
