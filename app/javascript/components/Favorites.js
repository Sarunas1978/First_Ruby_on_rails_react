import React from 'react';

function Favorites ({favorites}) {
    let data = favorites.map((item,index) => {
        return (
            <div className="row" key={item.id}>
                <button id={index} type="button" className=" btn btn-outline-danger ">
                    Remove
                </button>
                <button id={index} type="button" className=" btn btn-outline-success ">
                    Rename
                </button>
                <div className="col-1">{item.id}</div>
                <div className="col-4">{item.name}</div>
            </div>
        )
    })
    console.log("favorites: ",favorites)

    return (
        <React.Fragment>
            {data}
        </React.Fragment>

    )
}

export default Favorites;