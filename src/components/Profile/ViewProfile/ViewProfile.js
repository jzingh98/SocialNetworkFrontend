import React from 'react';
import {Link} from "react-router-dom";
import { callViewProfile, callConnectionStatus, callAddConnection, callDeleteConnection, callUpdateConnectionType} from "./ViewProfileHelper";


class ViewProfile extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        userName: "",
        city: "",
        bio: "",
        connectedToViewer: false,
        connectionType: ""
    };

    constructor(props) {
        super(props);
        if(this.props.currentLoggedIn) {
            this.getConnectionStatus();
        }

    }

    componentDidMount() {
        callViewProfile(this.props.id)
            .then(data => {
                if (data.id) {
                    this.setState({
                        firstName: data.firstName,
                        lastName: data.lastName,
                        userName: data.userName,
                        city: data.city,
                        bio: data.bio
                    })
                } else {
                    console.log("Failed to retrieve profile");
                }
            })
            .catch(error => console.log(error));
    }

    getConnectionStatus() {
        let fromuser = this.props.currentProfile.userName;
        let touser = this.props.id;
        callConnectionStatus(fromuser, touser)
            .then(data => {
                if(data) {
                    this.setState({
                        connectedToViewer: true,
                        connectionType: data.type
                    })
                } else {
                    console.log("Not a connection");
                }
            })
            .catch(error => console.log(error));
    }

    addConnection = () => {
        let fromuser = this.props.currentProfile.userName;
        let touser = this.props.id;
        callAddConnection(fromuser, touser)
            .then(data => {
                if(data) {
                    this.setState({
                        connectedToViewer: true
                    });
                } else {
                    console.log("Failed to add connection");
                }
            })
            .catch(error => console.log(error));
    };

    deleteConnection = () => {
        let fromuser = this.props.currentProfile.userName;
        let touser = this.props.id;
        callDeleteConnection(fromuser, touser)
            .then(data => {
                if(data) {
                    this.setState({
                        connectedToViewer: false
                    });
                } else {
                    console.log("Failed to remove connection");
                }
            })
            .catch(error => console.log(error));
    };

    updateConnectionType = (type) => {
        let fromuser = this.props.currentProfile.userName;
        let touser = this.props.id;
        callUpdateConnectionType(fromuser, touser, type)
            .then(data => {
                if(data) {
                    this.setState({
                        connectionType: type
                    });
                } else {
                    console.log("Failed to update connection type");
                }
            })
            .catch(error => console.log(error));
    };

    toFriend = () => {
        this.updateConnectionType("friend");
    };

    toOther = () => {
        this.updateConnectionType("other");
    };

    render() {
        const {
            currentLoggedIn,
            currentProfile,
        } = this.props;

        const {
            connectedToViewer
        } = this.state;


        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <div id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">View Profile</legend>


                            {(currentLoggedIn && connectedToViewer) &&
                            <div>
                                <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                                    <div onClick={this.deleteConnection}>Remove </div>
                                    <p>{this.state.connectionType}</p>
                                </div>

                                <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                                    <div onClick={this.toFriend}>Friend </div>
                                </div>
                                <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                                    <div onClick={this.toOther}>Other </div>
                                </div>
                            </div>
                            }

                            {(currentLoggedIn && !connectedToViewer) &&
                            <div>
                                <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                                    <div onClick={this.addConnection}>Connect </div>
                                </div>
                            </div>
                            }


                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">First Name</label>
                                <p className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100">
                                    {this.state.firstName}
                                </p>

                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Last Name</label>
                                <p className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100">
                                    {this.state.lastName}
                                </p>

                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Username</label>
                                <p className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100">
                                    {this.state.userName}
                                </p>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">City</label>
                                <p className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100">
                                    {this.state.city}
                                </p>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Short Bio</label>
                                <p className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100">
                                    {this.state.bio}
                                </p>
                            </div>

                        </div>

                    </div>
                </main>
            </article>
        );
    }
}

export default ViewProfile