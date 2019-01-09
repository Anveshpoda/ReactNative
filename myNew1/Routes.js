import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home1.js'
import About from './About.js'
import newHome from './Home'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "about" component = {About} title = "About" />
         <Scene key = "newHome" component = {newHome} title = "newHome" />
      </Scene>
   </Router>
)
export default Routes