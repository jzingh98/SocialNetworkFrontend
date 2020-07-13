import React from 'react';
import {Link} from "react-router-dom";

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onLoadProfile = () => {
        this.props.onRequestLoadProfile(this.state.signInEmail, this.state.signInPassword);
        this.props.onChangeLoggedIn(true);
        //this.props.onChangeRoute('home');

    };




    render() {
        const { onChangeRoute, onChangeLoggedIn, onRequestLoadProfile, Link } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
                        </fieldset>

                        <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                            <Link onClick={this.onLoadProfile} to="/home">Sign In </Link>
                        </div>

                        <div className="lh-copy mt3 f6 link dim black db pointer">
                            <Link to="/register">Register </Link>
                        </div>


                    </div>
                </main>
            </article>
        );
    }
}

export default Signin;