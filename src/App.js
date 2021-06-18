import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// pages
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Container>
        <Row>
          <Col xs={12}>
            <Route exact path="/" component={Home} />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
