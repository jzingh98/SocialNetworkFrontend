import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MyConnections from "../MyConnections/MyConnections";
import SearchConnections from "../SearchConnections/SearchConnections";

class Connections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            str: ""
        }
    }





    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Connections</legend>

                        </fieldset>
                        <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                            <Link onClick={this.onLoadProfile} to="/connections/searchconnections">Search Connections </Link>
                        </div>
                        <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                            <Link onClick={this.onLoadProfile} to="/connections/myconnections">My Connections </Link>
                        </div>


                        <hr />

                        <Switch>
                            <Route path="/connections/searchconnections">
                                <SearchConnections />
                            </Route>

                            <Route path="/connections/myconnections">
                                <MyConnections />
                            </Route>
                        </Switch>



                    </div>
                </main>
            </article>
        );
    }
}

export default Connections;