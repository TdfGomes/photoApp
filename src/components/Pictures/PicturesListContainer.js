import React, { Component } from 'react'
import PicturesList from './PicturesList'
import { getPhotos } from '../../api/photo'

class PicturesListContainer extends Component {
  
  state = {
    photos:[]
  }

  componentDidMount() {
    getPhotos().then(photos => this.setState({photos}))
  }
  
  render(){
    const {photos} = this.state
    return(
      <PicturesList photos={photos}/>
    )
  }
}

export default PicturesListContainer