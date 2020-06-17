import React, { Component } from 'react';
import axios from 'axios';
import Trending from './Trending';
import Loading from './Loading';
import BackgroundC from './BackgroundC';
import './css/gifs.css';
require('dotenv');

 class Trendings extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          trendings: [],
          searchText: [],
          term: '',
          isLoading: true
       }
     
      }


  
    //   searchingFor = term => {
    //     return (x) =>  {
    //       return x.title.includes(term) || !term;
    //     }
    //   }

    //   onSearchChange = e => {
    //     this.searchhTrending(this.query.value);
    //     this.setState({
    //         searchText: e.target.value,
    //         term: e.target.value
    //     });
    //     // console.log(e.target.value)
    // }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.searchhTrending(this.query.value);
    //     e.currentTarget.reset();
    //     this.setState({ searchText: [], term: '' });
    // }

    componentDidMount = () => {
        this.searchhTrending();
    
    }
    
    searchhTrending = (query) => {

      axios.get(`/daily`)
          .then(res => {
              // console.log(res.data);
            const trendings = res.data;
            this.setState({ trendings: trendings,
              isLoading: false
          });   
          })
          .catch(err => console.log(err));
  }
  
  // selectedText = (value) => {
  //   this.setState(() => ({
  //       searchText: value,
  //       term: ''
  //   }))
  // }



    render() {

        return (

<React.Fragment>
<BackgroundC />
            <div className="contain">
   </div>
            <div className="s-gifs">
            {

                    
(this.state.isLoading) ? <Loading /> : 


this.state.trendings.map((trending) => (

        <Trending key={trending.id} trending={trending} />
    ))   } 

      </div>
</React.Fragment>
        )
    }
}


export default Trendings;