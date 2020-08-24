import React from 'react';
import EventsCreate from "./EventsCreate";
import EventsList from "./EventsList";
import {callRetrieveEvents} from "./EventsHelper";



class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sample: "",
            listUsers: []
        };
        this.onRetrieveEvents();
    };

    onRetrieveEvents = () => {
        callRetrieveEvents(this.props.currentProfile )
            .then(data => {
                if (data) {
                    let newArray = [];
                    data.map(function(val, index){
                        newArray.push({title: val.title, poster: val.poster, details: val.details});
                    });
                    this.setState({
                        listUsers: newArray,
                    })
                } else {
                    console.log("Failed to retrieve post");
                }
            })
            .catch(error => console.log(error));
    }

    render() {
        const {
            currentLoggedIn,
            currentProfile
        } = this.props;


        if(!currentLoggedIn){
            return (
                <h1>
                    Please log in to view posts
                </h1>
            )
        }

        else {

            return (
                <div>
                    <h2>Home</h2>

                    <EventsCreate
                        currentProfile={currentProfile}
                        onRetrieveEvents={this.onRetrieveEvents}
                    />

                    <EventsList
                        currentProfile={currentProfile}
                        listUsers={this.state.listUsers}
                    />

                </div>
            );
        }

    }

}

export default Events;