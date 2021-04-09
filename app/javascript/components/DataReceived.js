import React from 'react';

function DataReceived ({items, addToFavorites}) {
    let data = items.map((item,index) => {
        return (
            <div className="row" key={item.id}>
                <button id={index} onClick={(e)=>addToFavorites(e)} type="button" className="col-md-12 col-lg-3  btn btn-outline-warning" data-toggle="modal" data-target="#exampleModal">
                    Add to Fav
                </button>
                <div className="col-md-12 col-lg-2">{item.id}</div>
                <div className="col-md-12 col-lg-7">{item.name}</div>
            </div>
        )
    })

    return (
        <React.Fragment>
            {data}
        </React.Fragment>

    )
}

export default DataReceived;