import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'
import CollectionsIcon from 'material-ui-icons/Collections'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'

const styles = (theme) => ({
  toolBar:{
    justifyContent:'space-between'
  }
})

const NavBar = ({classes}) => (
  <AppBar position="static">
    <Toolbar className={classes.toolBar}>
      <Typography type="title" color="inherit" >Photos App</Typography>
      <Button color="inherit">
        <Link style={{color:'#fff',textDecoration:'none'}} to="/photos">Photos</Link>
        <CollectionsIcon />
      </Button>
    </Toolbar>
  </AppBar>
)

NavBar.propTypes = {
  classes:PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar)