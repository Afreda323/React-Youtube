import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.state = {term: ""};
  }

  onInputChange(term) {
       this.setState({ term });
       this.props.onTermChange(term);
   }

   handleClick(event){
     document.getElementById("app").className= "searched container";
     document.getElementById("searchWrap").className= "row";
     document.getElementById('search').className= "col-lg-12";
   }

    render(){
        return(
          <div className="searchbar">
            <h1>React Youtube</h1>
            <input className="input" type="text" placeholder="Search for videos" value={this.state.value}  onChange = { (event) => this.onInputChange(event.target.value)} />
            <input className="searchButton" type="button" value="Search" onClick={this.handleClick}/>
          </div>
        );
    }
}

export default SearchBar;
