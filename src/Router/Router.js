import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home  from "../Containers/Home"
import App from '../App'
import ClientForm from '../Containers/ClientForm'

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path ='/' component={App} />
        <Route path="/home" component={Home} />
        <Route path='/add_client' component={ClientForm} />
      </div>
    </Router>
  )
}

export default Routes;