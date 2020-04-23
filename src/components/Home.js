import React, { Component } from 'react';
import axios from 'axios';
import Gif from './Gif';
import Loading from './Loading';
import './css/home.css';

class Home extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          giphy: [],
     isLoading: true
       }
      }

      listGiphs = (query = 'princess') => {

        axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_API_KEY}&limit=15`)
            .then(res => {
                console.log(res.data.data);
              const giphy = res.data.data;
              this.setState({ giphy: giphy,
                isLoading: false
            });   
            })
            .catch(err => console.log(err));
    }
    
    componentDidMount() {
        this.listGiphs();
    }


    render() {
        console.log(this.state.giphy);
        return (
            <div className="home">
                {
                    this.state.isLoading ? <Loading /> :
                this.state.giphy.map((gif) => (
                   <Gif key={gif.id} gif={gif} />
                ))}
            </div>
        )
    }
}

export default Home;
