import React from 'react';
import EventsListItem from "./EventsListItem";
import {callRetrieveEvents} from "./EventsHelper";



class EventsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUsers: []
        };
        this.onRetrieveEvents();
    };


    onRetrieveEvents() {
        callRetrieveEvents(this.props.currentProfile)
            .then(data => {
                if (data) {
                    let newArray = [];
                    data.map(function(val, index){
                        newArray.push(val.name);
                    });
                    this.setState({
                        listUsers: newArray,
                    })
                } else {
                    console.log("Failed to retrieve events");
                }
            })
            .catch(error => console.log(error));
    }



    render() {
        const listItems = this.state.listUsers.map((name) =>
            <EventsListItem
                key={name}
                name={name}
            />
        );

        return (
            <div>
                {listItems}
            </div>
        );
    }

}

export default EventsList;