import React from 'react';

function DataReceived ({items, addToFavorites}) {
    let data = items.map((item,index) => {
        return (
            <div className="row" key={item.id}>
                <button id={index} onClick={(e)=>addToFavorites(e)} type="button" className="col-3 btn btn-outline-warning" data-toggle="modal" data-target="#exampleModal">
                    Add to FavOrites
                </button>
                <div className="col-2">{item.id}</div>
                <div className="col-7">{item.name}</div>
            </div>
        )
    })
    // console.log(data)

    return (
        <React.Fragment>
            {data}
        </React.Fragment>

    )
}

export default DataReceived;