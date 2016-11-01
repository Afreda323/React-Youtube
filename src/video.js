import React from 'react';

const Video = ({video}) => {

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  const channelUrl = `https://www.youtube.com/channel/${video.snippet.channelId}`;

    return(
      <div className="col-sm-6 video">
        <div className="vidcontainer">
          <iframe className="iframe" src={url} allowFullScreen></iframe>
        </div>
        <div className="info">
          <h2>{video.snippet.title}</h2>
          <p>
            {video.snippet.description}
            <br /><br />
            <a href={channelUrl}>{video.snippet.channelTitle}</a>
          </p>

        </div>
      </div>
    );
}

export default Video;
