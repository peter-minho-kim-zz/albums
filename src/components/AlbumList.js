import React from 'react'
import { View } from 'react-native'
import AlbumDetail from './AlbumDetail'

class AlbumList extends React.Component {
  state = { albums: [] }

  componentDidMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums', {})
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          throw new Error('Unable to fetch data')
        }
      }).then((data) => {
        this.setState({ albums: data })
        console.log(this.state)
      }).catch((err) => {
        console.log('Error', err)
      })
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    )
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

export default AlbumList