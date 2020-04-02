import React from 'react';

const List = props => {
    return (
        <div className="col-md">
            <div class="card">
                <img src={props.image} class="card-img-top" style={{ Height: "200px", width: "300px" }} />
                <div class="card-body">
                    <h5 class="card-title">{props.nama}</h5>
                </div>
            </div>
        </div>)
}
export default List;