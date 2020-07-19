import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            eventHost: '',
            eventInvited: '',
            eventLocation: '',
            eventTime: '',
            eventDetails: '',
            eventDuration: ''
        }
    }

    onNameChange = (event) => {
        this.setState({email: event.target.value})
    };

    onInvitedChange = (event) => {
        this.setState({email: event.target.value})
    };

    onLocationChange = (event) => {
        this.setState({email: event.target.value})
    };

    onTimeChange = (event) => {
        this.setState({email: event.target.value})
    };

    onDetailsChange = (event) => {
        this.setState({email: event.target.value})
    };

    onDurationChange = (event) => {
        this.setState({email: event.target.value})
    };






    onRegisterEvent = () => {
        const eventInfo = {
            eventName: this.state.eventName,
            eventHost: this.props.currentProfile.userName,
            eventInvited: this.state.eventInvited,
            eventLocation: this.state.eventLocation,
            eventTime: this.state.eventTime,
            eventDetails: this.state.eventDetails,
            eventDuration: this.state.eventDuration

        };


    };



    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">New Event</legend>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Event</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Location</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onLocationChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Time</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onTimeChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Duration</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="city"
                                    id="city"
                                    onChange={this.onDurationChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Details</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 mb4"
                                    type="text"
                                    name="bio"
                                    id="bio"
                                    onChange={this.onDetailsChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Invited</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 mb4"
                                    type="text"
                                    name="bio"
                                    id="bio"
                                    onChange={this.onInvitedChange}
                                />
                            </div>

                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onRegisterEvent}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Create"
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;