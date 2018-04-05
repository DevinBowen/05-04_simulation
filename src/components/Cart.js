import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Nav from './Nav';


export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }

    componentDidMount() {
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
                {/* 36H */}
                <Nav />
                <div>
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}
