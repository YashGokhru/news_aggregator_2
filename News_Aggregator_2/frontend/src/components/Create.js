import React, { Component } from 'react';

export class Create extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
            link: ""
        }
    }

    handleTitleInput = (event) => {
        this.setState({
            title: event.target.value,
            content: this.state.content,
            link: this.state.link
        })
        console.log(this.state);
    }
    handleContentInput = (event) => {
        this.setState({
            title: this.state.title,
            content: event.target.value,
            link: this.state.link
        })
        console.log(this.state);
    }
    handleLinkInput = (event) => {
        this.setState({
            title: this.state.title,
            content: this.state.content,
            link: event.target.value
        })
        console.log(this.state);
    }

    render() {

        return (
            <div className="container">
                <div class="row justify-content-center my-4">
                    <div className="col-5 ">
                        <img src='CreateBig.svg'></img>
                    </div>
                    <div className="col-5 my-5">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-light">Post Title *</label>
                            <input onChange={this.handleTitleInput} className="form-control bg-dark text-light" id="exampleFormControlInput1" placeholder="Title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label text-light">Post Content *</label>
                            <textarea className="form-control bg-dark text-light" onChange={this.handleContentInput} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-4 row justify-content-start">
                            <label htmlFor="link" className="col-sm-3 col-form-label text-light"> + Link </label>
                            <div className="col-sm-9 mb-4">
                                <input className="form-control bg-dark text-light" id="link " onChange={this.handleLinkInput} />
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary btn-lg">Post</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;
