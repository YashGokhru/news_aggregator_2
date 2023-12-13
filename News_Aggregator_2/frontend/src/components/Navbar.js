import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){

    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="row text-light w-100">
                        <div className="col-2 col-sm-1 my-2 ml-3 ml-sm-3 ">
                            <a className="navbar-brand my-1">
                                <img src="/NewsAggregator.svg" width="30" height="30" alt="" />
                            </a>
                        </div>
                        <div className="col my-1 ">
                            <ul className="nav justify-content-center  mt-1">
                                <li className="nav-item">
                                    <Link className="navbar-brand" to='/home'>
                                        <img src="/home-outline.svg" width="30" height="30" alt="" /><span className="sr-only"></span>
                                    </Link>
                                </li>
                                <li className="nav-item mx-sm-4 mx-lg-6">
                                    <Link className="navbar-brand" to='/create'>
                                        <img src="/add-circle-outline.svg" width="30" height="30" alt="" /><span className="sr-only"></span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="navbar-brand" to='/profile'>
                                        <img src="/person-outline.svg" width="30" height="30" alt="" /><span className="sr-only"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 col-sm-1 justify-content-end">
                            <ul className="nav justify-content-end mt-1">
                                <li><Link className="nav-link" to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )

}
