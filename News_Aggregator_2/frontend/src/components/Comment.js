import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Comment extends Component {
  static propTypes = {}

  constructor(props) {
    super();
    this.state = { comment: {}, user: {}, replies: [], viewReply: true };
  }

  handleViewReplies = (event) => {
    this.setState({ viewReply: !this.state.viewReply });
    console.log(this.state.viewReply);
  }

  async componentDidMount() {
    // console.log(this.props);
    const response = await fetch(this.props.url + '/comments/' + this.props.commentId);
    const data = await response.json();
    // console.log(data);
    this.setState(data);
  }
  render() {
    const { comment, user, viewReply, replies } = this.state;
    // console.log(replies);
    // console.log(this.state);
    return (
      <div className="container text-light">
        <h1>{user.name}</h1>
        <h2>{comment.content}</h2>
        
        { replies.length > 0 && <>
          <p>
          <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample-${comment._id}`} aria-expanded="false" aria-controls="collapseExample">
            view Replies
          </button>
        </p>
        <div className="collapse " id={`collapseExample-${comment._id}`}>
          <div className="card card-body bg-dark text-light">
            {replies.map((commid, index) => {
              return <Comment url={this.props.url} commentId={commid._id} key={index} />
            })}
          </div>
        </div>
        </>
  }



      </div>
    )
  }
}

export default Comment