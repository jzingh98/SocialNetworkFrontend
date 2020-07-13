import React from 'react';


const logOut = (onChangeRoute, onChangeLoggedIn, onClearProfile) => {
    onChangeLoggedIn(false);
    onClearProfile();
    onChangeRoute('signin');
};

const Navigation = ({ onChangeRoute, currentLoggedIn, onChangeLoggedIn, onClearProfile, Router, Switch, Route, Link }) => {
    if (currentLoggedIn) {
        return (

            <Router>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    {/*<p onClick={() => onChangeRoute('profile')} className='f3 link dim black underline pa3 pointer'>Profile</p>*/}
                    {/*<p onClick={() => logOut(onChangeRoute, onChangeLoggedIn, onClearProfile)} className='f3 link dim black underline pa3 pointer'>Sign Out</p>*/}

                    <Link to="/home">Home</Link>
                    <Link to="/editprofile">Edit Profile</Link>


                </nav>
            </Router>
        );
    } else {
        return (
            <Router>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    {/*<p onClick={() => onChangeRoute('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>*/}
                    {/*<p onClick={() => onChangeRoute('register')} className='f3 link dim black underline pa3 pointer'>Register</p>*/}

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





