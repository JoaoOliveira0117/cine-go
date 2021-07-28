import './css/App.css';
import { Container, Row, Col } from 'react-grid-system';
import './css/searchBar.css';
import './css/movieTicket.css';
import SearchBar from './components/searchBar.js';
import MovieTicket from './components/movieTicket.js';

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <Container style={{maxWidth: '100%', margin: '3rem'}}>
          <Row>
            <Col md={6} style={{maxWidth: 'fit-content'}}>
              <MovieTicket size="small" desconto="50" genero="Terror" tituloFilme="Vingadores: Eu te mato"></MovieTicket>
              <MovieTicket size="small" desconto="20" genero="Ação" tituloFilme="Brasileirinhas"></MovieTicket>
            </Col>
            <Col md={6} style={{maxWidth: 'fit-content'}}>
              <MovieTicket size="big" desconto="80" tituloFilme="Frozi"/>
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
