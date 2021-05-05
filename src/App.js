import { Switch, Route } from 'react-router-dom'
import { Container, Header } from 'rsuite'
import 'rsuite/lib/styles/index.less'
import TopBar from 'lib/AppTopBar'
import Home from 'templates/Home'
import About from 'templates/About'
import Todos from 'templates/Todos'

function App() {
    return (
        <div>
            <Container>
                <Header>
                    <TopBar />
                </Header>

                <Switch>
                    <Route path="/" exact> <Home /> </Route>
                    <Route path="/todos"> <Todos /> </Route>
                    <Route path="/about"> <About /> </Route>
                </Switch>
            </Container>
        </div>
    );
}

export default App;
