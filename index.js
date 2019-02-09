// Import a library to create a component
import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// Create a component
const App = () => {
  const { appStyle } = styles
  return (
    <View style={appStyle}>  
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  )
}

const styles = {
  appStyle: {
    backgroundColor: 'white',
    flex: 1
  }
}


// Render it to the device
AppRegistry.registerComponent('albums', () => App)
