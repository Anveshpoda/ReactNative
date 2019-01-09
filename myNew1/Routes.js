import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import {Platform, StyleSheet, Text, View,AppRegistry} from 'react-native';
import Home from './Home1.js'
import About from './About.js'
import newHome from './Home'


const TabIcon = (Selected , Title) => <Text style={{color: Selected ? 'red' : 'black'}}>{Title}</Text>

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "about" component = {About} title = "About" />
         <Scene key="tabbar" tabs  direction="vertical" tabBarStyle={{backgroundColor:"#FFFFFF"}}>
         <Scene key="Anv" title="ANV" direction="vertical" icon={TabIcon}>
         <Scene key = "newHome" component = {newHome} title = "newHome" direction="vertical" hideNavBar />
         </Scene>
         </Scene>
      </Scene>
   </Router>
)
export default Routes