import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a className="navbar-brand mx-3" >
                        <img src="NewsAggregator.svg" width="30" height="30" alt="" />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="navbar-brand mx-3 " to = '/' >
                                    <img src="home-outline.svg" width="30" height="30" alt="" /><span className="sr-only"></span>
                                </Link>
                            </li>
                            {/* <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">Create Post</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Myprofile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                        </ul>
                    </div>

                </nav>
            </>
        )
    }
}
