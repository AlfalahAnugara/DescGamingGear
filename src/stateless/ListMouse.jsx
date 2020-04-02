import React from 'react'

const List = props => {
    return (
        <div className="col-md">
            <div class="card">
                <img src={props.image} class="card-img-top" style={{ Height: "300px", Width: "auto" }} />
                <div class="card-body">
                    <h5 class="card-title">{props.nama}</h5>
                    <p class="card-text">{props.ket}</p>
                </div>
            </div>
        </div>)
}
export default List;