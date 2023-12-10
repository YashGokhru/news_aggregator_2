import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NewsWindow from './NewsWindow';

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [] // Initialize state with an empty array for posts
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch(this.props.url);
            const data = await response.json();

            this.setState({ posts: data.posts }); // Update state with fetched data

            // console.log(this.state);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render() {
        return (
            <>
                <div className="fw-bold fs-4 mt-3 mx-4 text-light"><h1>Headlines</h1></div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mx-3 my-2">
                    {this.state.posts.map((event, index) => {
                        // console.log(event);
                        return <NewsWindow key={index} posts={event} />;
                    })}
                </div>
            </>
        );
    }
}

export default News;
