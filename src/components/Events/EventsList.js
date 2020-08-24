import React from 'react';
import EventsListItem from "./EventsListItem";



class EventsList extends React.Component {
    constructor(props) {
        super(props);
        this.reverseList = this.props.listUsers.reverse();
    };




    render = () => {
        this.reverseList = this.props.listUsers.reverse();
        const listItems = this.reverseList.map((item) =>
            <EventsListItem
                key={item.title}
                title={item.title}
                poster={item.poster}
                details={item.details}
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