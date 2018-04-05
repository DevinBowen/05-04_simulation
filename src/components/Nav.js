import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Nav extends Component {

    render() {
        return (
                <div className="nav">
                    <Link to='/menu' style={{ textDecoration: "none" }}><div>menu</div></Link>
                    <Link to='/cart' style={{ textDecoration: "none" }}><div>cart</div></Link>
                    <div>logout</div>
                </div>
        );
    }
}
