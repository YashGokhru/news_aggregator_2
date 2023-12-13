import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export class Create extends Component {
    constructor(props) {
        super();
        props.setLogin(false);
        this.state = {
            EmailId: "",
            password: "",
            redirect: false
        }

    }

    handleEmailIdInput = (event) => {
        this.setState({
            EmailId: event.target.value,
            password: this.state.password,
            link: this.state.link
        })
        // console.log(this.state);
    }
    handlepasswordInput = (event) => {
        this.setState({
            EmailId: this.state.EmailId,
            password: event.target.value,
            link: this.state.link
        })
        // console.log(this.state);
    }


    handlePost = async (event) => {
        event.preventDefault();

        if (!this.state.EmailId) {
            alert("Email Id cannot be null");
            return;
        }
        else if (!this.state.password) {
            alert("Password cannot be null");
            return;
        }

        const response = await fetch(this.props.url + '/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.EmailId,
                password: this.state.password
            })
        })
        if (!response) {
            alert("Can't reach Server");
            return
        }
        const data = await response.json();

        console.log(data);
        if (response.status === 200) {
            alert(data.message);
            // this.props.setLogin(true);
            // this.setState({ redirect: true });
        }
        else {
            alert(data.error);
        }


    }

    render() {

        return (
            <div className="container">
                <div className="row justify-password-center my-4">
                    <div className="col-5 ">
                        <img src='CreateBig.svg'></img>
                    </div>
                    <div className="col-5 my-5">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-light">Email Id *</label>
                            <input onChange={this.handleEmailIdInput} className="form-control bg-dark text-light" id="exampleFormControlInput1" placeholder="abc@mail.com" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label text-light">Password *</label>
                            <textarea type="password" className="form-control bg-dark text-light mb" onChange={this.handlepasswordInput} id="exampleFormControlTextarea1" rows="1"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg" onClick={this.handlePost}>Login</button>
                        {this.state.redirect && <Navigate to='/home' replace={true} />}
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;
