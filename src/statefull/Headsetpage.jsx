import React,{Component} from 'react';
import List from '../stateless/ListHeadset';

class Headsetpage extends Component {

    state = {
        ListSteelSeries: [
            {id:1, nama:"Steel series 1", image:"https://s.kaskus.id/r480x480/images/fjb/2019/01/09/headset_gaming_stellseries_arctis_5_rgb_2019_black_new_original_10213728_1546970897.png"},
            {id:2, nama:"Steel series 2", image:"https://s.blanja.com/picspace/133/113797/700.400_8a2dc9ff98e446348b52b124d82d8256.jpg?w=700"}
        ],
        ListRazer: [
            {id:1, nama:"razer1", image:"https://www.blibli.com/friends/assets/2019/02/ManO%E2%80%99War-696x464.jpg"},
            {id:2, nama:"razer1", image:"https://media.karousell.com/media/photos/products/2019/11/11/logitech_g431_71_surround_sound_gaming_headphone_1573474136_eedb6a40_progressive.jpg"},
            {id:3, nama:"razer1", image:"https://i.ebayimg.com/images/g/bSIAAOSwp8pbpVEs/s-l1600.jpg"}
        ]
    }
    render(){
    return (
        <div className="container mt-5">
            <h4 className="text-danger">[ HOT ]</h4><h5>Headshet SteelSeries Arctis 5</h5>
            <div className="row mb-5">
                    {this.state.ListSteelSeries.map(data => {
                        return(
                            <List nama={data.nama} image={data.image}/>
                        )
                    })}
            </div>
            <h5>Headshet Razer Man O War</h5>
            <div className="row">
                {this.state.ListRazer.map(data => {
                    return (
                        <List nama={data.nama} image={data.image} />
                    )
                })}
            </div>

        </div>
    )}
}
export default Headsetpage;