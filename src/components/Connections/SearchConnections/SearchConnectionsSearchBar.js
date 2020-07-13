import React from 'react';
import {Link} from "react-router-dom";



class SearchConnectionsSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }
    };

    onSearchChange = (event) => {
        this.setState({searchTerm: event.target.value});
        this.props.onSearchUpdate(event.target.value);
    };

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Search</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={this.state.searchTerm}
                                    onChange={this.onSearchChange}
                                />
                            </div>
                        </fieldset>





                    </div>
                </main>
            </article>
        );
    }

}

export default SearchConnectionsSearchBar;