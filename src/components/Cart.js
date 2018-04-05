import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }

    componentDidMount(){
        // 74D-2
        axios.put('/api/putCart').then(res => {
            console.log(res.data)
            this.setState({
                cart: res.data
            })
        })
    }

    render() {
        return (
            <div className="cart">
                <div className="nav">
                    <Link to='/menu' style={{ textDecoration: "none" }}><div>menu</div></Link>
                    <Link to='/cart' style={{ textDecoration: "none" }}><div>cart</div></Link>
                    <div>logout</div>
                </div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}
