import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsWindow extends Component {
    static propTypes = {}

    render() {
        let { user, title, upvote, downvote, noofreplies } = this.props.posts;
        console.log(this.props.posts);
        return (
            <div className="col-sm-3 w-33 mx-0 ">
                <div className="card h-100 w-10">
                    {/* <img src="..." className="card-img-top" alt="..." />     */}
                    <div className="card-body bg-dark text-light">
                        <h5 className="card-title ">{user.name}</h5>
                        <p className="card-text " >{title}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary ">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsWindow