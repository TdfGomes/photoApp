import React, { Component } from "react"
import SinglePicture from "./SinglePicture"
import {getPhoto} from '../../api/photo'

class SinglePictureContainer extends Component{
  state = {
    photo:{}
  }
  componentDidMount() {
    const {match:{params:{photoId}}} = this.props
    getPhoto(photoId).then(photo => this.setState({photo}))
  }
  
  render(){
    const {photo} = this.state
    return(
      <SinglePicture photo={photo}/>
    )
  }
}

export default SinglePictureContainer