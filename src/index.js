import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCJMbla69uvtMWmQ6LUYLUxA5QDH7Fiaig';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('NoCopyRightSounds');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term, limit: 5}, (videos) => {
            // this.setState({ videos }); // es6
            // this.setState({ videos: dataVideos });
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div className="c-search">
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="c-content">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos} />
                </div>
                <div className="col-lg-12">
                    <div className="c-footer">
                        <a className="c-footer__link" target="_blank" href="https://github.com/AndrewSavetchuk/react-youtube-search">Download source of this project from GitHub</a>
                    </div>
                </div>
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
