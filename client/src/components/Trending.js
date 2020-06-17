import React from 'react';
import { Link } from "react-router-dom";
import './css/Gif.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Sharing from './Sharing';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 160,
    width: 345
  },
});

 const Trending = (props) => {

    const classes = useStyles();

    return (
        <div className="child-gif">
      <Card className={classes.root}>
        <CardActionArea>

               <ReactFancyBox className={classes.media} thumbnail={props.trending.images.downsized_large.url}
                image={props.trending.images.downsized_large.url} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.trending.title.slice(0,15)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
           {props.trending.username}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Sharing id={props.trending.id}/>
          </Button>
       
          <Link className="linkx" id={props.trending.id} to={`/gif/${props.trending.id}`}>
                  See More..
        </Link>
        
        </CardActions>
      </Card>
      </div>
    );
}


export default Trending;
