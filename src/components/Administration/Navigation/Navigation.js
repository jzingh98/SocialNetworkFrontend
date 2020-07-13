import React from 'react';


const logOut = (onChangeRoute, onChangeLoggedIn, onClearProfile) => {
    onChangeLoggedIn(false);
    onClearProfile();
    onChangeRoute('signin');
};

const Navigation = ({currentLoggedIn, Router, Link }) => {
    if (currentLoggedIn) {
        return (

            <Router>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link to="/home">Home</Link>
                    <Link to="/connections">Connections</Link>
                    <Link to="/editprofile">Edit Profile</Link>
                </nav>
            </Router>
        );
    } else {
        return (
            <Router>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </Router>

        );
    }
}

export default Navigation;



/*

<Navigation
                                    onClearProfile={onClearProfile}
                                    currentLoggedIn={currentLoggedIn}
                                    onChangeLoggedIn={onChangeLoggedIn}
                                    onChangeRoute={onChangeRoute}
                                    Router = {Router}
                                    Switch={Switch}
                                    Route={Route}
                                    Link={Link}
                                />


 */





