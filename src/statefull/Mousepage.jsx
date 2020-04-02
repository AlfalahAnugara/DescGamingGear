import React,{Component} from 'react';
import List from '../stateless/ListMouse';

class Mousepage extends Component {

    state = {
        ListMouse: [
            { id: 1, nama: "Mouse 1", image: "https://images.cgmagonline.com/wp-content/uploads/2019/01/60033939_9486665258-1280x720.jpg" },
            { id: 2, nama: "Mouse 2", image: "http://michaelcrump.net/files/WP_000064_thumb_634588595019302936.jpg" },
            { id: 3, nama: "Mouse 2", image: "https://s4.nhattao.com/data/attachment-files/2019/05/12402726_logitech_g304_wireless_gaming_mouse_packaging.jpg" },
            { id: 4, nama: "Mouse 2", image: "https://geekout.ph/images/GeekGear/logitech_g304_wireless_gaming_mouse_review_3.jpg" }
        ]
    }
    render(){
        return (
            <div className="container mt-5">
                <h4 className="text-danger">[ HOT ]</h4><h5>Keyboard SteelSeries Apex 350</h5>
                <div className="row mb-5">
                    {this.state.ListMouse.map(data => {
                        return (
                            <List nama={data.nama} image={data.image} />
                        )
                    })}
                </div>
            </div>
        )
    }
    
}
export default Mousepage;