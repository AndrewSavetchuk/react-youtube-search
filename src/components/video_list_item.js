import React from 'react';

const VideoListItem = ({video, onVideoSelect, scrollToTop}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        <li onClick={() => {onVideoSelect(video), scrollToTop()}} className="c-video-list__item">
            <div className="c-video-list__item-media">
                <img src={imageUrl} alt="" />
            </div>

            <div className="c-video-list__item-content">
                <div className="c-video-list__item-title">{video.snippet.title}</div>
            </div>
        </li>
    );
}

export default VideoListItem;
