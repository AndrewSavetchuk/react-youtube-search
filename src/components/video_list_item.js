import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    const scrollToTop = () => {
        var windowWidth = window.innerWidth;
        if(windowWidth < 992) {
            window.scrollTo(0, 0);
        }
    }

    return(
        <li onClick={() => {onVideoSelect(video), scrollToTop()}} className="c-video-list__item">
            <div className="c-video-list__item-media">
                <img src={imageUrl} lt="" />
            </div>

            <div className="c-video-list__item-content">
                <div className="c-video-list__item-title">{video.snippet.title}</div>
            </div>
        </li>
    );
}

export default VideoListItem;
