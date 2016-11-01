import React from 'react';
import SearchLi from './searchLi.js';

const SearchUl = (props) => {
  const videoItems = props.videos.map( video => {
     return <SearchLi
        onVideoSelect ={props.onVideoSelect}
        key ={video.etag}
        video ={video}
        />
    })

  return (
          <div className="col-sm-6 ul">
              <ul>
                {videoItems}
              </ul>
          </div>
  )
}

export default SearchUl;
