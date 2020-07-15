import React from 'react';
import MyConnectionsList from './MyConnectionsList'

class MyConnections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            str: ""
        }
    }

    render() {
        const {
            currentProfile
        } = this.props;

        return (
            <div>
                <h2>My Connections</h2>

                <MyConnectionsList
                    currentProfile={currentProfile}
                />


            </div>
        );
    }

}

export default MyConnections;