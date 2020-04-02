import React,{Component} from 'react';
import logo from '../logo.svg';
import List from '../stateless/ListHeadset';

export default class Headsetpage extends Component {

    state = {
        ListSteelSeries: [
            {id:1, nama:"Steel series 1",ket:"lorem5"},
            {id:2, nama:"Steel series 1",ket:"lorem5"},
            {id:3, nama:"Steel series 1",ket:"lorem5"},
            {id:4, nama:"Steel series 1",ket:"lorem5"}
        ],
        ListRazer: [
            {id:1, nama:"razer1",ket:"lorem5"},
            {id:2, nama:"razer1",ket:"lorem5"},
            {id:3, nama:"razer1",ket:"lorem5"},
            {id:4, nama:"razer1",ket:"lorem5"},
            {id:4, nama:"razer1",ket:"lorem5"}
        ]
    }
    render(){
    return (
        <div className="container mt-5">
            <h5>Headshet SteelSeries Arctis 5</h5>
            <div className="row mb-5">
                    {this.state.ListSteelSeries.map(data => {
                        return(
                            <List nama={data.nama} ket={data.ket}/>
                        )
                    })}
            </div>
            <h5>Headshet Razer Man O War</h5>
            <div className="row">
                {this.state.ListRazer.map(data => {
                    return (
                        <List nama={data.nama} ket={data.ket} />
                    )
                })}
            </div>

        </div>
    )}
}
// export default Headsetpage;