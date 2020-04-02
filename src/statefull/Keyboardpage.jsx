import React,{Component} from 'react';
import List from '../stateless/ListHeadset';

class Keyboardpage extends Component {
    state = {
        ListSteelSeries: [
            { id: 1, nama: "Steel series 1", ket: "Steel series 1", image:"https://ecs7.tokopedia.net/img/cache/700/product-1/2017/10/9/18652529/18652529_40f37fac-2bc1-4e74-b44d-fd6144359176_1200_900.jpg" },
            { id: 2, nama: "Steel series 2", ket: "Steel series 2", image:"https://dextmall.files.wordpress.com/2017/05/111.jpg?w=768&h=307" }
        ],
        ListDucky: [
            { id: 1, nama: "Ducky 1", ket: "Ducky 1", image:"https://i.rtings.com/images/reviews/keyboard/ducky/one-2-mini/one-2-mini-design-medium.jpg" },
            { id: 4, nama: "Ducky 2", ket: "Ducky 2", image:"https://ecs7.tokopedia.net/img/cache/200-square/attachment/2019/7/8/156257342997320/156257342997320_1530fb90-3e8a-4b5b-ad0f-0bad69e9bcb0.png" }
        ],
        ListStrike: [
            { id: 1, nama: "Strike 1", ket: "Strike 1", image:"https://www.ozonegaming.com/uploads/PRODUCTS/STRIKEBATTLE%20SPECTRA/Gallery/strikebattle_spectra_main1_blk.jpg" },
            { id: 4, nama: "Strike 2", ket: "Strike 2", image:"https://www.techpowerup.com/img/16-06-02/41a.jpg" }
        ],
    }
    render(){
    return (
        <div className="container">
            <h4 className="text-danger">[ HOT ]</h4><h5>Keyboard SteelSeries Apex 350</h5>
            <div className="row mb-5">
                {this.state.ListSteelSeries.map(data => {
                    return (
                        <List nama={data.nama} image={data.image} />
                    )
                })}
            </div>
            
            <div className="row">
                <div className="col-lg-6">
                    <h5>Keyboard Ducky One Mini 2</h5>
                    <div className="row">
                        {this.state.ListDucky.map(data => {
                            return (
                                <List nama={data.nama} image={data.image} />
                            )
                        })}
                    </div>
                </div>
                <div className="col-lg-6">
                    <h5>Keyboard Strike Battle</h5>
                    <div className="row">
                        {this.state.ListStrike.map(data => {
                            return (
                                <List nama={data.nama} image={data.image} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
    }
} export default Keyboardpage;