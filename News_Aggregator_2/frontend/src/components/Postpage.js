import React, { PureComponent } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import Comment from './Comment';

export class Postpage extends PureComponent {
    constructor(props) {
        super();
        // console.log(props);
        this.state = { "post": { "_id": "", "userid": "", "title": "", "link": "", "content": "", "upvote": 0, "downvote": 0, "replies": [], "noofreplies": 0, "createdAt": "", "updatedAt": "", "__v": 0 }, "user": { "_id": "", "name": "" } };
        

    }
    async componentDidMount() {
        const parts = window.location.href.split('/'); // Split the URL by '/'
        const id = parts[parts.length - 1];

        const response = await fetch(this.props.url + `/home/posts/${id}`);
        const data = await response.json();

        this.setState(data);
        
    }
    render() {
        const {post, user} = this.state;
        // console.log(post);
        return (
            
            <div className="fw-bold fs-4 mt-3 mx-4 text-light">
                <h1>{user.name}</h1>
                <h2>{post.title}</h2>
                <div className="text-light bg"> {post.content}</div>


                <div className="border border-primary mt-2 rounded-lg-sm-md p-2 shadow">
                    <div className="container-fluid">
                        Discussion Forum
                        {post.replies.map((commid, index)=>{
                            return <Comment url = {this.props.url} commentId={commid} key={index}/>
                        })}
                    </div>
                </div>


            </div>
        )
    }
}

export default Postpage