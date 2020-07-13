import React from 'react';
import {Link} from "react-router-dom";


class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.currentProfile.email,
            firstName: this.props.currentProfile.firstName,
            lastName: this.props.currentProfile.lastName,
            userName: this.props.currentProfile.userName,
            city: this.props.currentProfile.city,
            bio: this.props.currentProfile.bio,
            Link: this.props.Link
        }

    }

    onFirstNameChange = (event) => {
        this.setState({firstName: event.target.value})
    };

    onLastNameChange = (event) => {
        this.setState({lastName: event.target.value})
    };

    onUserNameChange = (event) => {
        this.setState({userName: event.target.value})
    };

    onCityChange = (event) => {
        this.setState({city: event.target.value})
    };

    onBioChange = (event) => {
        this.setState({bio: event.target.value})
    };

    onSaveProfile = () => {
        this.props.onRequestEditProfile(this.state);
        this.onRefreshState();
        this.props.onChangeRoute('home');
    };

    onCancelEdit = () => {
        this.onRefreshState();
    };

    onRefreshState = () => {
        this.state = {
            email: this.props.currentProfile.email,
            firstName: this.props.currentProfile.firstName,
            lastName: this.props.currentProfile.lastName,
            userName: this.props.currentProfile.userName,
            city: this.props.currentProfile.city,
            bio: this.props.currentProfile.bio
        }
    };



    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Edit Profile</legend>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">First Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={this.state.firstName}
                                    onChange={this.onFirstNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Last Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={this.state.lastName}
                                    onChange={this.onLastNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Username</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={this.state.userName}
                                    onChange={this.onUserNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">City</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="city"
                                    id="city"
                                    value={this.state.city}
                                    onChange={this.onCityChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Short Bio</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 mb4"
                                    type="text"
                                    name="bio"
                                    id="bio"
                                    value={this.state.bio}
                                    onChange={this.onBioChange}
                                />
                            </div>

                        </fieldset>


                        <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                            <Link onClick={this.onSaveProfile} to="/home">Save </Link>
                        </div>

                        <div className="lh-copy mt3 f6 link dim black db pointer">
                            <Link onClick={this.onCancelEdit} to="/home">Cancel </Link>
                        </div>



                    </div>
                </main>
            </article>
        );
    }
}

export default EditProfile;