import React from 'react';
import logo from '../logo.svg';
function Mousepage() {
    return (
        <div className="container mt-5">
            <h5>Keyboard SteelSeries Apex 350</h5>
            <div className="row mb-5">
                <div className="col-md-4">
                    <div class="card">
                        <img src={logo} class="card-img-top" style={{ height: "100px", width: "100px" }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img src={logo} class="card-img-top" style={{ height: "100px", width: "100px" }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mousepage;