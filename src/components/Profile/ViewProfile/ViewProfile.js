import React from 'react';
import {Link} from "react-router-dom";
import { viewProfileGet, connectionStatusGet, formConnection, deleteConnection, changeConnectionType} from "./ViewProfileHelper";


class ViewProfile extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        userName: "",
        city: "",
        bio: "",
        connectedToViewer: false,
        connectionType: "na"
    };

    constructor(props) {
        super(props);
        console.log(props.id);
        if(this.props.currentLoggedIn) {
            this.getConnectionStatus();
        }

    }

    componentDidMount() {
        viewProfileGet(this.props.id)
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
                    console.log("Failed to retrieve");
                }
            })
            .catch(error => console.log(error));
    }

    getConnectionStatus() {
        let fromuser = this.props.currentProfile.userName;
        let touser = this.props.id;
        connectionStatusGet(fromuser, touser)
            .then(data => {
                console.log("Connection Status");
                console.log(data);
                if(data) {
                    this.setState({
                        connectedToViewer: true,
                        connectionType: data.type
                    })
                }

            })
            .catch(error => console.log(error));
    }

    addConnection = () => {
        console.log("added");
        this.setState({
            connectedToViewer: true
        });
        let fromuser = this.props.currentProfile.userName;
        let touser = this.props.id;
        formConnection(fromuser, touser)
            .then(data => {
                console.log("Connection Formed");
                console.log(data);
            })
            .catch(error => console.log(error));


    };

    removeConnection = () => {
        console.log("removed");
        this.setState({
            connectedToViewer: false
        });
        let fromuser = this.props.currentProfile.userName;
        let touser = this.props.id;
        deleteConnection(fromuser, touser)
            .then(data => {
                console.log("Connection Deleted");
                console.log(data);
            })
            .catch(error => console.log(error));
    };

    updateConnectionType = (typeconn) => {
        console.log("udpated");
        this.setState({
            connectionType: typeconn
        });
        let fromuser = this.props.currentProfile.userName;
        let touser = this.props.id;
        changeConnectionType(fromuser, touser, typeconn)
            .then(data => {
                console.log("Connection Updated");
                console.log(data);
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
                                    <div onClick={this.removeConnection}>Remove </div>
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