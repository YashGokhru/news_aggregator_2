import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsWindow extends Component {
    static propTypes = {}
    constructor(props){
        super();
    }

    render() {
        let { user, title, upvote, downvote, noofreplies, _id } = this.props.posts;
        // console.log(this.props.posts);
        return (
            <div className="col-sm-3 w-33 mx-0 ">
                <div className="card h-100 w-10 " style={{border: '3px solid #006699'}} >
                    {/* <img src="..." className="card-img-top" alt="..." />     */}
                    <div className="card-body bg-dark text-light ">
                        <h5 className="card-title ">{user.name}</h5>
                        <Link className="nav-link"  to= {`/read/${_id}`} ><p className="card-text "  >{title}</p></Link>
                    </div>
                    <div className="card-footer text-light"  style={{backgroundColor: '#006699'}}>
                        <small className="text-body-secondary-light ">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsWindow