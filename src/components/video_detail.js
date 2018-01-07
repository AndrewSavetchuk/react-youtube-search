import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return (
            <div className="c-loading">
                <img className="c-loading__image" src="images/ajax-loader.gif" alt=""/>
            </div>
        );
    }

    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`;

    return (
        <div className="col-lg-8">
            <div className="c-video-details">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="c-video-details__container">
                    <h1 className="c-video-details__title">{video.snippet.title}</h1>
                    <p className="c-video-details__text">{video.snippet.description}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;
