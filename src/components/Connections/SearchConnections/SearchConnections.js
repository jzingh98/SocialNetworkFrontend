import React from 'react';
import SearchConnectionsSearchBar from "./SearchConnectionsSearchBar";
import SearchConnectionsOutputList from "./SearchConnectionsOutputList";



class SearchConnections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }
    };

    onSearchUpdate = (newValue) =>{
        this.setState({searchTerm: newValue})
    };

    render() {
        const {
            currentProfile
        } = this.props;

        return (
            <div>
                <h2>Search Connections</h2>

                <SearchConnectionsSearchBar
                    onSearchUpdate={this.onSearchUpdate}
                />



                <SearchConnectionsOutputList
                    searchTerm={this.state.searchTerm}
                />



            </div>
        );
    }

}

export default SearchConnections;