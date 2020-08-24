import React from 'react';
import {callCreateEvent} from "./EventsHelper";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postTitle: '',
            postDetails: '',
        };
    }

    onTitleChange = (event) => {
        this.setState({postTitle: event.target.value})
    };

    onDetailsChange = (event) => {
        this.setState({postDetails: event.target.value})
    };








    onRegisterEvent = () => {
        const eventInfo = {
            title: this.state.postTitle,
            details: this.state.postDetails,
            poster: this.props.currentProfile.username,
        };
        document.getElementById('titleChng').value='';
        document.getElementById('detailsChng').value='';
        callCreateEvent(eventInfo)
            .then(data => {
                if (data) {
                    console.log(data);
                    this.props.onRetrieveEvents();
                } else {
                    console.log("Failed to post event");
                }
            })
            .catch(error => console.log(error));

    };




    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">New Post</legend>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Title</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="titleChng"
                                    onChange={this.onTitleChange}
                                />
                            </div>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Details</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="detailsChng"
                                    onChange={this.onDetailsChange}
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