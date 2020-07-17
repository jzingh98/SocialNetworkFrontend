import React from 'react';
import {searchMatchesGet, searchMyMatchesGet} from "./SearchConnectionsHelper";
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
            searchMatchesGet(this.props.searchTerm)
                .then(data => {
                    if (data) {
                        let newArray = [];
                        var updatedList = data.map(function(val, index){
                            newArray.push(val.userName);
                        });
                        this.setState({
                            listUsers: newArray,
                        })
                    } else {
                        console.log("Failed to retrieve");
                    }
                })
                .catch(error => console.log(error));


            searchMyMatchesGet(this.props.searchTerm)
                .then(data => {
                    if (data) {
                        let newMatchedArray = [];
                        var updatedMatchedList = data.map(function(val, index){
                            newMatchedArray.push(val.userName);
                        });
                        this.setState({
                            listMatchedConnections: newMatchedArray,
                        })
                        console.log(newMatchedArray);
                    } else {
                        console.log("Failed to retrieve matches");
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
                    userName={user}
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