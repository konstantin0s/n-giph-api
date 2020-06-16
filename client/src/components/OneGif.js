import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
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
import './css/oneg.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

class OneGif extends Component {
constructor(props) {
    super(props);
    this.state = {
        gif: [],
        isLoading: true
    }
}

matchGiph = () => {

    axios.get(`/gif/${this.props.id}`)
        .then(res => {
            // console.log(res.data);
          const gif = res.data;
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
    const { images, title, import_datetime, id, source_post_url  } = this.state.gif;
    // console.log(images, title, username);
    const { isLoading} = this.state;
    if (!isLoading) {

    return (
    <Card className={useStyles.root}>
    <CardActionArea>
      <ReactFancyBox
          thumbnail={images.downsized_large.url}
          image={images.downsized_large.url} />
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
 <a href={source_post_url} target="_blank" >Source </a>
      </Button>
      <Button size="small" color="primary">
<Sharing id={ id } />
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
        // console.log(this.state.gif);

        return (
            <div className="onegif">
         {this.delayRender()}
            </div>
        )
    }
}

export default OneGif;