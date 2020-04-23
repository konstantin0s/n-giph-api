import React, { Component } from 'react';
import axios from 'axios';
import './css/Gif.css';

class OneGif extends Component {
constructor(props) {
    super(props);
    this.state = {
        gif: [],
        isLoading: true
    }
}

matchGiph = () => {

    axios.get(`http://api.giphy.com/v1/gifs/${this.props.id}?api_key=${process.env.REACT_APP_API_KEY}`)
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
    const {images, title, username, import_datetime, id} = this.state.gif;
    console.log(images, title, username);
    const { isLoading} = this.state;
    if (!isLoading) {

    return (
        <li key={id}>
           <img alt="gifff" src={images.downsized_large.url} />
           <h3>{title}</h3>
           {/* <h5> {this.state.gif.username}</h5> */}
           <p>{import_datetime}</p>
       </li> 
)
    } else {
        return (
            <p>Loading...</p>
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