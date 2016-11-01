import React, { Component } from 'react';
import SearchBar from './searchbar.js';
import Video from './video.js';
import SearchUl from './searchUl.js';
import axios from 'axios';
import _ from 'lodash';

var url ="https://www.googleapis.com/youtube/v3/search?key=AIzaSyCYUjdISCd1KAhpstLOJpKPG1EfkXg-Scw&type=video&part=snippet&q=";


class App extends Component {
  constructor(props){
     super(props);
     this.state = {
       videos: [],
       selectedVideo: null
     };
     this.handleTermChange = this.handleTermChange.bind(this);
     this.handleTermChange("JavaScript");

   }

   handleTermChange(q){
     axios.get(url + q)
      .then(response => {
         this.setState({
           videos: response.data.items,
           selectedVideo: response.data.items[0]
         });
          console.log(this.state.selectedVideo);
     });
  }

  render() {
      let videosContainer = null
      const handleTermChange = _.debounce( (q) => {this.handleTermChange(q)},500);
      if (this.state.selectedVideo) {
          videosContainer = (
            <div>
              <Video video={this.state.selectedVideo} />
              <SearchUl onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
            </div>
          )
        } else {
          videosContainer = <div>No videos found</div>
        }

        return (
        <div>
          <div id="app" className="flex">
            <div id="searchWrap">
              <div id="search">
                <SearchBar onTermChange = {handleTermChange}/>
              </div>
            </div>
            <div className="row">
                <br />
                {videosContainer}
            </div>
          </div>
          <footer>
            <p className="text-center lead">
                Developed by <a href="http://antfreda.com">Anthony Freda</a>
            </p>
          </footer>
        </div>
        );
      }
}

export default App;
