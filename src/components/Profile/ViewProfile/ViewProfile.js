import React from 'react';
import {Link} from "react-router-dom";
import { viewProfileGet } from "./ViewProfileHelper";
import {REQUEST_VIEW_PROFILE_FAILED, REQUEST_VIEW_PROFILE_SUCCESS} from "../../Redux/constants";

class ViewProfile extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        userName: "",
        city: "",
        bio: ""
    };

    constructor(props) {
        super(props);
        console.log(props.id);
    }

    componentDidMount() {
        viewProfileGet(this.props.id)
            .then(data => {
                if (data.id) {
                    console.log(data);
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


    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <div id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">View Profile</legend>

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

                        <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                            <Link to="/home">Back </Link>
                        </div>

                    </div>
                </main>
            </article>
        );
    }
}

export default ViewProfile