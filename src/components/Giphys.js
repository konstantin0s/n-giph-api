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
     searchText: '',
     isLoading: true
       }
     
      }

      searchingFor = term => {
        return (x) =>  {
          return x.title.includes(term) || !term;
        }
      }

      onSearchChange = e => {
        this.searchhGiphs(this.query.value);
        this.setState({
            searchText: e.target.value,
            term: e.target.value
        });
        console.log(e.target.value)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.searchhGiphs(this.query.value);
        e.currentTarget.reset();
    }

    componentDidMount = () => {
        this.searchhGiphs();
    
    }
    


 searchhGiphs = (query) => {

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_API_KEY}&limit=5`)
        .then(res => {
            console.log(res.data.data);
          const giphy = res.data.data;
          this.setState({ giphy: giphy,
            isLoading: false
        });   
        })
        .catch(err => console.log(err));
}


    render() {

    console.log(this.state.giphy);

    // const { giphy } = this.state.giphy;

        return (
            <div>

                <form className="search-form"
            onSubmit={this.handleSubmit}>
                <input type="search" 
                onChange={this.onSearchChange}
                name="search"
                ref={(input) => this.query = input}
                placeholder="Search"
                 />
<button 
className="search-btn"
type="submit"
id="submit"

>
<i className="fa fa-fw fa-search"></i>
</button>
                </form>

                {

                    
            (this.state.isLoading) ? <p>Loading</p> : 
       

            this.state.giphy.filter(this.searchingFor(this.state.searchText)).map((gif) => (
 
                    <Gif key={gif.id} gif={gif} />
                ))   } 
        
            </div>
        )
    }
}


export default Giphys;