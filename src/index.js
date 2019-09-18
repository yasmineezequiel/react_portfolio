import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Projects from "./Projects"
import About from "./About"
import Footer from "./Footer"

const App = () => {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={Hello}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/projects' component={Projects}></Route>
      </Switch>
      <Footer />
    </div >
  )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));