import React from 'react';
import EventsCreate from "./EventsCreate";
import EventsList from "./EventsList";



class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sample: ""
        }
    };


    render() {
        const {
            currentLoggedIn,
            currentProfile
        } = this.props;


        if(false){
            return (
                <h1>
                    Please log in to view events
                </h1>
            )
        }

        else {

            return (
                <div>
                    <h2>Events</h2>

                    <EventsCreate
                    />

                    <EventsList
                    />

                </div>
            );
        }

    }

}

export default Events;