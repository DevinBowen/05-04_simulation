import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default class Aab extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // 74D-4
    deleteAab() {
        var food = 'All American Burger';
        axios.delete('/api/deleteItem?food=' + food)
    }
    // 74D-3
    addToCart() {
        axios.post('/api/addToCart', {
            food: 'All American Burger'
        })
    }

    render() {
        return (
            <div className="details">
                <div className="nav">
                    <Link to='/menu' style={{ textDecoration: "none" }}><div>menu</div></Link>
                    <Link to='/cart' style={{ textDecoration: "none" }}><div>cart</div></Link>
                    <div>logout</div>
                </div>
                <div>
                    <div>
                        <div>All American Burger $5.99</div>
                        <div>I am just a description about the food. im not super long but here I am.... blah blah blah.</div>
                        <div><button onClick={() => { this.addToCart() }}>add to cart</button></div>
                    </div>
                    <div>
                        <button onClick={() => { this.deleteAab() }}>delete</button>
                        <button >edit</button>
                    </div>
                </div>
            </div>
        );
    }
}
