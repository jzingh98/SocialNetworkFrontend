import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from "react-router-dom";



class MyConnectionsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelected: false
        }
    };


    render() {

        const { username } = this.props;

        const viewProfileURL = "/viewprofile/".concat(username);

        return (
            <article className="center">
                <main className="pa4 black-80">
                    <div className="measure">

                        <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                            <Link to={viewProfileURL}>{username}</Link>
                        </div>

                    </div>
                </main>
            </article>
        );


    }

}

export default MyConnectionsItem;