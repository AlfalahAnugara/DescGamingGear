import React, { Component } from 'react'; import { Link } from 'react-router-dom';
import List from '../stateless/ListMenuHome';
export default class Homepage extends Component {

    state = {
        ListSteelSeries: [
            { id: 1, url: "/headset", nama: "Headset" },
            { id: 2, url: "/keyboard", nama: "Keyboard" },
            { id: 2, url: "/mouse", nama: "Mouse" }
        ]
    }

    render() {
        return (
            <div className="container mt-5">
                <h1 className="text-center text-success mb-5">Welcome to gaming equipment shop</h1>
                <div className="row">
                    {this.state.ListSteelSeries.map(data => {
                        return (
                            <List url={data.url} nama={data.nama} />
                        )
                    })}
                </div>
            </div>
        );
    }

  }

