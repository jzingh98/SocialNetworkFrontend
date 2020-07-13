import React from 'react';
import {searchMatchesGet} from "./SearchConnectionsHelper";


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


                        var updatedList = data.map(function(val, index){
                            return {value: val.userName};
                        });

                        var updatedArray = Object.values(updatedList);

                        var updatedArray2 = Object.values(updatedArray);


                        console.log(updatedArray2);

                        this.setState({
                            listUsers: updatedArray2,
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
            <li>
                {user}
            </li>
        );

        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }

}

export default SearchConnectionsOutputList;