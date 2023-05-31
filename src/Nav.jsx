import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb(){
    return(
        <div>
                  <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contato">Contatos</Nav.Link>
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>

    )
}

export default Navb