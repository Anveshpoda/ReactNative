import React from 'react'
import { TouchableOpacity, Text,View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
    
   const goToAbout = () => {
      Actions.about()
   }

   const goToHome = () => {
      Actions.popAndPush('newHome')
   }

   return (

      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
      <Text>This is HOME!</Text>
   </TouchableOpacity>
      // <View>
      // <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
      //    <Text>This is HOME!</Text>
      // </TouchableOpacity>
      // <TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
      //    <Text>This is New HOME!</Text>
      // </TouchableOpacity>
      // </View>
   )
}
export default Home