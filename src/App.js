import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage/HomePage';
import PokemonPage from './pages/PokemonPage/PokemonPage';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/pokemon/:id" component={PokemonPage} />
    </Router>
  );
}

export default App;
