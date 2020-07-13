import React from 'react';



class SearchConnectionsOutputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            str: ""
        }
    };



    render() {
        return (
            <div>
                <h2>Search Term is: {this.props.searchTerm}</h2>
            </div>
        );
    }

}

export default SearchConnectionsOutputList;