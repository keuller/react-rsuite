import { useHistory } from 'react-router-dom'
import { Navbar, Nav, Icon } from 'rsuite';

const brandStyle = {
    display: 'inline-block',
    padding: '18px 20px'
}

export default function AppTopBar() {
    const history = useHistory();

    function handleMenu(key) {
        switch(key) {
            case 'home': return history.push('/');
            case 'about': return history.push('/about');
            case 'todos': return history.push('/todos');
            case 'logout': return history.push('/logout');
            default: return history.push('/');
        }
    }

    return (
        <Navbar appearance="inverse">
            <Navbar.Header>
                <a href="/#" style={brandStyle}>DEMO</a>
            </Navbar.Header>

            <Navbar.Body>
                <Nav>
                    <Nav.Item eventKey="home" onSelect={handleMenu} icon={<Icon icon="home" size="lg" />}>
                        Home 
                    </Nav.Item>
                    <Nav.Item eventKey="todos" onSelect={handleMenu} icon={<Icon icon="list" size="lg" />}>
                        TODOS
                    </Nav.Item>
                    <Nav.Item eventKey="about" onSelect={handleMenu} icon={<Icon icon="help" size="lg" />}>
                        About
                    </Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item eventKey="logout" onSelect={handleMenu} icon={<Icon icon="user" size="lg" />}>Logout</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}
