import React from 'react';
import EventsListItem from "./EventsListItem";
import {callRetrieveEvents} from "./EventsHelper";



class EventsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };




    render() {
        const listItems = this.props.listUsers.map((name) =>
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