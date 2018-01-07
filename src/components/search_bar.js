import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        // return <input onChange={(event) => console.log(event.target.value)} />
        return (
            <div className="c-search__bar">
                <div className="col-lg-2">
                    <img src="images/logotype.png" className="c-search__logo" alt=""/>
                </div>
                <div className="col-lg-10">
                    <input
                        value={this.state.term}
                        placeholder="Search"
                        className="c-search__input"
                        onChange={event => this.onInputChange(event.target.value)} />
                </div>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
