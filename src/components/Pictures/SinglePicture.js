import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography/Typography';

const styles = (theme) => ({
  center:{
    textAlign:'center'
  }
})

const SinglePicture = ({ photo, classes }) => (
  <Grid container>
    <Grid item xs={12} className={classes.center}>
      <img src={photo.url} alt={photo.title}/>
      <Typography type="display2" align="center">{photo.title}</Typography>
    </Grid>
  </Grid>  
)

SinglePicture.propTypes = {
  photo:PropTypes.object.isRequired,
  classes:PropTypes.object.isRequired
}
export default withStyles(styles)(SinglePicture)