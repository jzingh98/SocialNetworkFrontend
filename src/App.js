import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Administration/Navigation/Navigation';
import Signin from './components/Administration/Signin/Signin';
import Register from './components/Administration/Register/Register';
import Rank from './components/Home/Rank/Rank';
import EditProfile from "./components/Profile/EditProfile/EditProfile";
import ViewProfile from "./components/Profile/ViewProfile/ViewProfile";
import Connections from "./components/Connections/Connections/Connections";
import Events from "./components/Events/Events";
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {
        actionSetLoggedIn,
        actionClearProfile,
        requestLoadProfile,
        requestRegisterProfile,
        requestEditProfile,
    } from './components/Redux/actions'




const mapStateToProps = (state) => {
    return {
        currentLoggedIn: state.reducedSetLoggedIn.loggedIn,
        currentProfile: state.reducedSetProfile,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onChangeLoggedIn: (newLoggedIn) => dispatch(actionSetLoggedIn(newLoggedIn)),
        onClearProfile: () => dispatch(actionClearProfile()),
        onRequestLoadProfile: (email, password) => dispatch(requestLoadProfile(email, password)),
        onRequestRegisterProfile: (profileInfo) => dispatch(requestRegisterProfile(profileInfo)),
        onRequestEditProfile: (profileInfo) => dispatch(requestEditProfile(profileInfo)),
    }
};


const particlesOptions = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};


const logOut = (onChangeLoggedIn, onClearProfile) => {
    onChangeLoggedIn(false);
    onClearProfile();
};




class App extends Component {
    constructor() {
        super();
    };


    render() {

        const {
            currentLoggedIn,
            onChangeLoggedIn,
            currentProfile,

            onClearProfile,
            onRequestLoadProfile,
            onRequestRegisterProfile,
            onRequestEditProfile,
        } = this.props;


        return (
            <Router>

                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>

                    {!currentLoggedIn &&
                    <div>
                        <Link className='f3 link dim black underline pa3 pointer' to="/signin">Sign In</Link>
                        <Link className='f3 link dim black underline pa3 pointer' to="/register">Register</Link>
                    </div>
                    }

                    {currentLoggedIn &&
                    <div>
                        <Link className='f3 link dim black underline pa3 pointer' to="/home">Home</Link>
                        <Link className='f3 link dim black underline pa3 pointer' to="/connections">Connections</Link>
                        <Link className='f3 link dim black underline pa3 pointer' to="/editprofile">Profile</Link>
                        <Link className='f3 link dim black underline pa3 pointer'
                              onClick={() => logOut(onChangeLoggedIn, onClearProfile)}
                              to="/signin">Sign Out
                        </Link>
                    </div>
                    }

                </nav>


                <Switch>


                    <Route path="/signin">
                        <div className="App">
                            <Particles
                                className='particles'
                                params={particlesOptions}
                            />
                            <Signin
                                onChangeLoggedIn={onChangeLoggedIn}
                                currentProfile={currentProfile}
                                onRequestLoadProfile={onRequestLoadProfile}
                                Link = {Link}
                            />
                        </div>
                    </Route>

                    <Route path="/register">
                        <div className="App">
                            <Particles className='particles'
                                       params={particlesOptions}
                            />
                            <Register
                                onChangeLoggedIn={onChangeLoggedIn}
                                onRequestRegisterProfile={onRequestRegisterProfile}
                            />
                        </div>
                    </Route>

                    <Route path="/home">
                        <div className="App">
                            <Particles
                                className='particles'
                                params={particlesOptions}
                            />
                            <Events
                                currentLoggedIn={currentLoggedIn}
                                currentProfile = {currentProfile}
                            />

                        </div>
                    </Route>


                    <Route path="/connections">
                        <div className="App">
                            <Particles
                                className='particles'
                                params={particlesOptions}
                            />
                            <Connections
                                currentLoggedIn={currentLoggedIn}
                                currentProfile={currentProfile}
                            />
                        </div>
                    </Route>


                    <Route path="/editprofile">
                        <div className="App">
                            <Particles
                                className='particles'
                                params={particlesOptions}
                            />
                            <EditProfile
                                onRequestEditProfile = {onRequestEditProfile}
                                currentProfile = {currentProfile}
                                Link = {Link}
                            />
                        </div>
                    </Route>


                    <Route path="/viewprofile/:id" render={(props) =>
                        <div className="App">
                            <Particles
                                className='particles'
                                params={particlesOptions}
                            />
                            <ViewProfile {...props}
                                         id={props.match.params.id}
                                         currentLoggedIn={currentLoggedIn}
                                         currentProfile={currentProfile}
                            />
                        </div>

                    } />



                </Switch>
            </Router>


        )





    }
}





export default connect(mapStateToProps, mapDispatchToProps)(App)

