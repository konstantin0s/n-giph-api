import React, { Component } from 'react';
import axios from 'axios';
import './css/Gif.css';
import Loading from './Loading';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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

  const app_key = process.env.REACT_APP_API_KEY;
  const cors_url = process.env.REACT_APP_CORS_URL;

class OneGif extends Component {
constructor(props) {
    super(props);
    this.state = {
        gif: [],
        isLoading: true
    }
}

matchGiph = () => {

    axios.get(`${cors_url}https://api.giphy.com/v1/gifs/${this.props.id}?api_key=${app_key}`)
        .then(res => {
            console.log(res.data.data);
          const gif = res.data.data;
          this.setState({ gif: gif,
            isLoading: false
        });   
        })
        .catch(err => console.log(err));
}

componentDidMount() {
    this.matchGiph();
}


delayRender = () => {
    const {images, title, username, import_datetime} = this.state.gif;
    console.log(images, title, username);
    const { isLoading} = this.state;
    if (!isLoading) {

    return (
    <Card className={useStyles.root}>
    <CardActionArea>
      <img alt="gifff" src={images.downsized_large.url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
       {import_datetime}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
<Sharing />
      </Button>
    </CardActions>
  </Card>
)
    } else {
        return (
           <Loading />
        )
    }
}


    render() {
        console.log(this.state.gif);

        return (
            <div className="onegif">
         {this.delayRender()}
            </div>
        )
    }
}

export default OneGif;