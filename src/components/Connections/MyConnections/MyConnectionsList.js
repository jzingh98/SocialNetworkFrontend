import React from 'react';
import MyConnectionsItem from "./MyConnectionsItem";
import {callSearchConnections} from "./MyConnectionsHelper";


class MyConnectionsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUsers: []
        };
        this.retrieveConnections();
    };


    retrieveConnections() {
        callSearchConnections(this.props.currentProfile.username)
            .then(data => {
                if (data) {
                    let newArray = [];
                    data.map(function(val, index){
                        newArray.push(val.touser);
                    });
                    this.setState({
                        listUsers: newArray,
                    })
                } else {
                    console.log("Failed to retrieve search");
                }
            })
            .catch(error => console.log(error));
    }



    render() {
        const listItems = this.state.listUsers.map((user) =>
            <MyConnectionsItem
                key={user}
                username={user}
            />
        );

        return (
            <div>
                {listItems}
            </div>
        );
    }

}

export default MyConnectionsList;