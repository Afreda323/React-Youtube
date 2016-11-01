import React  from 'react';

const SearchLi = ( { video, onVideoSelect } ) => {
  if (video.snippet.title.length > 20) {
    var title = video.snippet.title.substr(0, 30) + "...";
  }else {
    var title = video.snippet.title
  }
  const description = video.snippet.description.substr(0, 80) + "...";
  return <li onClick={ () => onVideoSelect(video) } className="row">
            <div className="col-xs-3">
              <img className="thumb" src={video.snippet.thumbnails.default.url} />
            </div>
            <div className="col-xs-9">
              <div className="cap">
                  <h2>{title}</h2>
                  <p>{description}</p>
              </div>
            </div>
        </li>
}



export default SearchLi;
