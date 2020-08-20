import React from 'react';
import {Link} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            firstname: '',
            lastname: '',
            city: '',
            bio: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onusernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    onfirstnameChange = (event) => {
        this.setState({firstname: event.target.value})
    }

    onlastnameChange = (event) => {
        this.setState({lastname: event.target.value})
    }

    onCityChange = (event) => {
        this.setState({city: event.target.value})
    }

    onBioChange = (event) => {
        this.setState({bio: event.target.value})
    }



    onRegisterProfile = () => {
        const profileInfo = {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            city: this.state.city,
            bio: this.state.bio
        };
        this.props.onRequestRegisterProfile(profileInfo);
        this.props.onChangeLoggedIn(true);
    };



    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">First Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onfirstnameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Last Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onlastnameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">username</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onusernameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">City</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="city"
                                    id="city"
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
                                    onChange={this.onBioChange}
                                />
                            </div>

                        </fieldset>
                        <div className="">
                            <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                                <Link onClick={this.onRegisterProfile} to="/home">Register</Link>
                            </div>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;