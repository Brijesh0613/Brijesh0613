import { Nav,Navbar,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="Header">        
            <header>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={require('./image/1.png')} alt=""></img>
                        </Navbar.Brand>  
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                            <Nav className="px-4">
                                <Nav.Link href="#Registrations and Licenses" className='text-dark'>Registrations and Licenses</Nav.Link>
                                <Nav.Link href="#Start Busines" className='text-dark'>Start Business</Nav.Link>
                                <Nav.Link href="#Trademark & IPR" className='text-dark'>Trademark & IPR</Nav.Link>
                                <Nav.Link href="#Tax & Compliances" className='text-dark'>Tax & Compliances</Nav.Link>
                                <Nav.Link href="#Legal Services" className='text-dark'>Legal Services</Nav.Link>
                                <Nav.Link href="#All Services" className='text-dark'>All Services</Nav.Link>                  
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    )
}
export default Header;