import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// pages
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Container>
        <Route exact path="/" component={Home} />
      </Container>
    </Router>
  );
}

export default App;
