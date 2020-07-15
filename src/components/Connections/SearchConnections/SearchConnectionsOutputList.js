import React from 'react';
import {searchMatchesGet} from "./SearchConnectionsHelper";
import SearchConnectionsOutputItem from "./SearchConnectionsOutputItem";
import SearchConnections from "./SearchConnections";


class SearchConnectionsOutputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUsers: []
        }
    };

    componentDidUpdate(prevProps) {

        if (this.props.searchTerm !== prevProps.searchTerm) {
            searchMatchesGet(this.props.searchTerm)
                .then(data => {
                    if (data) {

                        let newArray = [];
                        console.log("Starting Loop")
                        var updatedList = data.map(function(val, index){
                            console.log(val.userName);
                            newArray.push(val.userName);
                        });
                        console.log(newArray);


                        this.setState({
                            listUsers: newArray,
                        })
                    } else {
                        console.log("Failed to retrieve");
                    }
                })
                .catch(error => console.log(error));
        }
    }


    render() {
        const listItems = this.state.listUsers.map((user) =>
                <SearchConnectionsOutputItem
                    key={user}
                    userName={user}
                />

        );

        return (
            <div>
                {listItems}
            </div>
        );
    }

}

export default SearchConnectionsOutputList;