import React, { Component } from 'react';

export class Create extends Component {
    constructor() {
        super(); 
        this.state = {
            title: "",
            content: "",
            link: "",
            linkERR : ""
        }
        this.text = "";
    }
    
    handleTitleInput = (event) => {
        this.setState({
            title: event.target.value,
            content: this.state.content,
            link: this.state.link
        })
        // console.log(this.state);
    }
    handleContentInput = (event) => {
        this.setState({
            title: this.state.title,
            content: event.target.value,
            link: this.state.link
        })
        // console.log(this.state);
    }
    handleLinkInput = (event) => {
        
        this.setState({
            title: this.state.title,    
            content: this.state.content,
            link: event.target.value
        })
        this.validateLink(event.target.value);
    }
    validateLink(link) {
        
        if(!link){
            this.text = '';
            return true;
        }
        const urlRegex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    
        if (urlRegex.test(link)) {
            this.text = 'Valid URL with protocol';
            return true;
        } else {
            this.text = 'Invalid URL or missing protocol';
            return false;
        }
    }
    handlePost = (event) => {
        event.preventDefault();
        if(!this.state.title){
            alert("Title cannot be null");
        }
        else if (!this.state.content){
            alert("Content cannot be null");
        }
        else if(this.state.link && !this.validateLink(this.state.link)){
            
        }
        else{
            alert("Posted !!");
            
        }
    }

    render() {

        return (
            <div className="container">
                <div className="row justify-content-center my-4">
                    <div className="col-5 ">
                        <img src='CreateBig.svg'></img>
                    </div>
                    <div className="col-5 my-5">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-light">Post Title *</label>
                            <input onChange={this.handleTitleInput} className="form-control bg-dark text-light" id="exampleFormControlInput1" placeholder="Title" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label text-light">Post Content *</label>
                            <textarea className="form-control bg-dark text-light mb" onChange={this.handleContentInput} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-4 row justify-content-start">
                            <label htmlFor="link" className="col-sm-3 col-form-label text-light"> + Link </label>
                            <div className="col-sm-9 mb-4">
                                <input className="form-control bg-dark text-light" id="link " onChange={this.handleLinkInput} />
                                <div className='text-lgiht-muted' style={{color:'grey', height:'4px'}}><h7>{this.text}  </h7></div>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary btn-lg" onClick={this.handlePost}>Post</button>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;
