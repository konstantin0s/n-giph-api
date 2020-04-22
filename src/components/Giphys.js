import React, { Component } from 'react';
import axios from 'axios';
import Gif from './Gif';
import SearchPhotos from './SearchPhotos';
require('dotenv');

 class Giphys extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
     giphy: [],
     loading: true
       }
     
      }

    componentDidMount = () => {
        this.performSearch();
    
    }
    


 performSearch = (query = 'ryan') => {

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&?&api_key=${process.env.REACT_APP_API_KEY}&limit=5`)
        .then(res => {
            console.log(res.data.data);
          const giphy = res.data.data;
          this.setState({ giphy: giphy,
            loading: false
        });   
        })
        .catch(err => console.log(err));
}


    render() {

    console.log(this.state.giphy);

    const { giphy } = this.state.giphy;

        return (
            <div>
                <SearchPhotos onSearch={this.performSearch} />

                {
            (this.state.loading) ? <p>Loading</p> : 
       

            this.state.giphy.map((gif) => (
 
                    <Gif key={gif.id} gif={gif} />
                ))   } 
        
            </div>
        )
    }
}


export default Giphys;