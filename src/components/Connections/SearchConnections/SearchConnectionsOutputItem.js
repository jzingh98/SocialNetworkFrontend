import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from "react-router-dom";



class SearchConnectionsOutputItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelected: false
        }
    };


    render() {

        const { userName } = this.props;

        const viewProfileURL = "/viewprofile/".concat(userName);

        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">

                        <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                            <Link to={viewProfileURL}>{userName}</Link>
                        </div>

                    </div>
                </main>
            </article>
        );


    }

}

export default SearchConnectionsOutputItem;