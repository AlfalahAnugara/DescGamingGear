import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
const List = props => {
    return (
        <div class="col-lg">
            <div class="card">
                <div class="card-body">
                    <Link to={props.url} className="nav-link">{props.nama}</Link>
                </div>
            </div>
        </div>
        )
}
export default List;