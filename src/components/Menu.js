import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="menu">
                <div className="nav">
                    <Link to='/menu' style={{ textDecoration: "none" }}><div>menu</div></Link>
                    <Link to='/cart' style={{ textDecoration: "none" }}><div>cart</div></Link>
                    <div>logout</div>
                </div>
                <div className="menu_main">
                    <div className="menu_main_left">
                        <ul>
                            <li>Lunch</li>
                            <li>Dinner</li>
                            <li>Dessert</li>
                        </ul>
                    </div>
                    <div className="menu_main_right">
                        <ul>
                            <li>All AMerican Burger <Link to='/details/aab' style={{ textDecoration: "none" }}><button>details</button></Link></li>
                            <li>Spicy Jalapeno Burger <Link to='/details/sjb' style={{ textDecoration: "none" }}><button>details</button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
