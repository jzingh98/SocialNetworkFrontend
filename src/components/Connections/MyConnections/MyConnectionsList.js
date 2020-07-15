import React from 'react';
import MyConnectionsItem from "./MyConnectionsItem";
import {myConnectionsGet} from "./MyConnectionsHelper";


class MyConnectionsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUsers: []
        }
        this.retrieveConnections();
    };


    retrieveConnections() {
        myConnectionsGet(this.props.currentProfile.userName)
            .then(data => {
                if (data) {

                    let newArray = [];
                    console.log("Starting Loop");
                    console.log(data);
                    var updatedList = data.map(function(val, index){
                        console.log(val.touser);
                        newArray.push(val.touser);
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



    render() {
        const listItems = this.state.listUsers.map((user) =>
            <MyConnectionsItem
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

export default MyConnectionsList;