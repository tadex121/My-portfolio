import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/myNavbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/about'
import Home from './components/home'
import Projects from './components/projects'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </Router>
    </>
  )
}

export default App
