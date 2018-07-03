import React from 'react'
import { Switch,Route } from 'react-router-dom'
import PicturesListContainer from './Pictures/PicturesListContainer'
import SinglePictureContainer from './Pictures/SinglePictureContainer'
import Navbar from './Navigation/Navbar'

const App = () => ([
  <Navbar key={1}/>,
  <div className="container" key={2}>
    <Switch>
      <Route exact path="/" render={()=> <h1>I am the Index</h1> }/>
      <Route exact path="/photos" component={PicturesListContainer}/>
      <Route path="/photos/:photoId" component={SinglePictureContainer} />
    </Switch>
  </div>
])

export default App;
