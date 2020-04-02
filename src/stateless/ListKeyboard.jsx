import React from 'react';
import logo from '../logo.svg';

const List = props => {
    return (
        <div className="col-md">
            <div class="card">
                <img src={logo} class="card-img-top" style={{ height: "100px", width: "100px" }} alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.nama}</h5>
                    <p class="card-text">{props.ket}</p>
                </div>
            </div>
        </div>)
}
export default List;