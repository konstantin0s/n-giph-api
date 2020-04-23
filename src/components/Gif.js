import React from 'react';
import { Link } from "react-router-dom";
import './css/Gif.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Sharing from './Sharing';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

 const Gif = (props) => {
    const classes = useStyles();

    return (
        <div className="child-gif">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.gif.images.downsized_large.url}
            title="alagif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.gif.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
           {props.gif.username}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Sharing />
          </Button>
       
          <Link className="linkx" id={props.gif.id} to={`/gif/${props.gif.id}`}>
                  See More..
        </Link>
        
        </CardActions>
      </Card>
      </div>
    );
}


export default Gif;
