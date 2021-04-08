import React from 'react';

function Favorites ({favorites, removeFromFavorites}) {

    let data = favorites.map((item,index) => {
        return (
            <div className="row" key={item.id}>
                <button id={index} onClick={() => removeFromFavorites(index)} type="button" className="col-2 btn btn-outline-danger ">
                    Remove
                </button>
                <div className="col-1">{item.id}</div>
                <div className="col-4">{item.name}</div>
                {/* <button id={index} type="button" className=" btn btn-outline-success ">
                    Update
                </button> */}
                <div className="col-5 input-group-prepend">
                    <button className="btn btn-outline-success" type="submit">Update</button>
                    <input type="text" className="form-control h-auto" placeholder="Enter the car name!" />
                </div>
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