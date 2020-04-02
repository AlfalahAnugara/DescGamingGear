import React,{Component} from 'react';
import logo from '../logo.svg';
import List from '../stateless/ListHeadset';

class Keyboardpage extends Component {
    state = {
        ListSteelSeries: [
            { id: 1, nama: "Steel series 1", ket: "lorem5" },
            { id: 2, nama: "Steel series 1", ket: "lorem5" }
        ],
        ListDucky: [
            { id: 1, nama: "Ducky1", ket: "lorem5" },
            { id: 2, nama: "Ducky1", ket: "lorem5" },
            { id: 3, nama: "Ducky1", ket: "lorem5" },
            { id: 4, nama: "Ducky1", ket: "lorem5" }
        ]
    }
    render(){
    return (
        <div className="container">
            <h4 className="text-danger">[ HOT ]</h4><h5>Keyboard SteelSeries Apex 350</h5>
            <div className="row mb-5">
                {this.state.ListSteelSeries.map(data => {
                    return (
                        <List nama={data.nama} ket={data.ket} />
                    )
                })}
            </div>
            
            <div className="row">
                <div className="col-lg-6">
                    <h5>Keyboard Ducky One Mini 2</h5>
                    <div className="row">
                        {this.state.ListSteelSeries.map(data => {
                            return (
                                <List nama={data.nama} ket={data.ket} />
                            )
                        })}
                    </div>
                </div>
                <div className="col-lg-6">
                    <h5>Keyboard Strike Battle</h5>
                    <div className="row">
                        {this.state.ListDucky.map(data => {
                            return (
                                <List nama={data.nama} ket={data.ket} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
    }
} export default Keyboardpage;