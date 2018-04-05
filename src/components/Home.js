import React, { Component } from 'react';




export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="home">
                <div><img src={require("../assets/logo.svg")} alt="" /></div>
                <div>
                    <a href={process.env.REACT_APP_LOGIN}>
                        <button>LOGIN</button>
                    </a>
                </div>
            </div>
        );
    }
}
