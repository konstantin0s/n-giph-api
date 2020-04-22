import React, { Component } from 'react';

 class SearchPhotos extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({
            searchText: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }

    render() {
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
            </div>
        )
    }
}


export default SearchPhotos;