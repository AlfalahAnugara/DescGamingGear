import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {

    render(){
        return (
            <div className="container-fluid" style={{ marginBottom: "100px" }}>
                <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                    <a class="navbar-brand ml-5" href="#">CODM Shops</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item ml-5">
                                <Link to="/headset" className="nav-link">Headset</Link>
                            </li>
                            <li class="nav-item ml-5">
                                <Link to="/keyboard" className="nav-link">Keyboard</Link>
                            </li>
                            <li class="nav-item ml-5">
                                <Link to="/mouse" className="nav-link">Mouse</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
    
}
export default Navigation;