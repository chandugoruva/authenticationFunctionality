import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
