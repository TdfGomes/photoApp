import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import {withStyles} from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography'

const styles = (theme) => ({
  card:{
    minHeight: 275,
    position:'relative'
  },
  media: {
    minHeight: 150,
  },
  CardActionsRoot:{
    width:'100%',
    position:'absolute',
    justifyContent:'center',
    bottom:0,
    paddingBottom:15
  }
})

const PicturesList = ({ photos = [], classes, history, match}) => {
  const showNewPic = (id) => {
    history.push(`/photos/${id}`)
    // console.log(id)
  }
  let photosList

  photos.length === 0 
    ? photosList = <CircularProgress className={classes.progress} size={50} />
    : photosList = photos.map(({ id, url, title }) => (
        <Grid item xs={3} key={id}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={url}
              title={title}
            />
            <CardContent>
              <Typography component="p">{title}</Typography>
            </CardContent>
            <CardActions classes={{ root: classes.CardActionsRoot }}>
              <Button onClick={() => showNewPic(id)} raised color="primary">Know More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))
    
  return(
    <Grid container spacing={24}>
      {photosList}
    </Grid>
  )
}

PicturesList.propTypes = {
  photos:PropTypes.array.isRequired,
  classes:PropTypes.object.isRequired,
  history:PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(PicturesList))