import React, { Component } from 'react';
import axios from 'axios';
import Gif from './Gif';
import Loading from './Loading';
import BackgroundC from './BackgroundC';
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

        axios.get(`/search?q=${query}`)
            .then(res => {
                // console.log(res.data.data);
              const giphy = res.data;
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
        // console.log(this.state.giphy);
        return (
            <React.Fragment>
                     <BackgroundC />
            <div className="home">
              
                {
                    this.state.isLoading ? <Loading /> :
                this.state.giphy.map((gif) => (
                   <Gif key={gif.id} gif={gif} />
                ))}
            </div>
            </React.Fragment>
        )
    }
}

export default Home;
