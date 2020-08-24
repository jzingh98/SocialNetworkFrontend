import React from 'react';



class EventsListItem extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {

        const { title, poster, details} = this.props;

        return (
            <article className="center">
                <main className="pa4 ">
                    <div className="measure left--1">


                        <h1>{title}</h1>
                        <h3>{poster}</h3>
                        <p>{details}</p>
                        <p> </p>
                        <p> --------------------------- </p>

                    </div>
                </main>
            </article>
        );


    }

}

export default EventsListItem;