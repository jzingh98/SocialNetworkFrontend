import React from 'react';
import {callSearchUsers, callHighlightConnections} from "./SearchConnectionsHelper";
import SearchConnectionsOutputItem from "./SearchConnectionsOutputItem";


class SearchConnectionsOutputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUsers: [],
            listMatchedConnections: []
        }
    };

    componentDidUpdate(prevProps) {

        if (this.props.searchTerm !== prevProps.searchTerm) {
            callSearchUsers(this.props.searchTerm)
                .then(data => {
                    if (data) {
                        let newArray = [];
                        data.map(function(val, index){
                            newArray.push(val.username);
                        });
                        this.setState({
                            listUsers: newArray,
                        });
                    } else {
                        console.log("Failed to retrieve searches");
                    }
                })
                .catch(error => console.log(error));

            callHighlightConnections(this.props.searchTerm)
                .then(data => {
                    if (data) {
                        let newMatchedArray = [];
                        data.map(function(val, index){
                            newMatchedArray.push(val.username);
                        });
                        this.setState({
                            listMatchedConnections: newMatchedArray,
                        });
                    } else {
                        console.log("Failed to retrieve highlights");
                    }
                })
                .catch(error => console.log(error));
        }
    }


    render() {

        const listItems = this.state.listUsers.map((user) => {
            let isConnected = this.state.listMatchedConnections.includes(user);
            return(
                <SearchConnectionsOutputItem
                    key={user}
                    username={user}
                    isConnected={isConnected}
                />
            );
        });




        return (
            <div>
                {listItems}
            </div>
        );
    }

}

export default SearchConnectionsOutputList;