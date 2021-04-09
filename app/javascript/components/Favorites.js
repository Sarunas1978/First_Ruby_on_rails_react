import React from 'react';

function Favorites ({favorites, removeFromFavorites, updateFavorites}) {

    let data = favorites.map((item,index) => {

        return (
            <div className="row" key={item.id}>
                <button id={index} onClick={() => removeFromFavorites(index)} type="button" className="col-md-6 col-lg-2 btn btn-outline-danger ">
                    Remove
                </button>
                <div className="col-md-6 col-lg-1">{item.id}</div>
                <div className="col-md-6 col-lg-4">{item.name}</div>
                <div className="col-md-6 col-lg-5 input-group-prepend">
                    <button onClick={(e) => updateFavorites(e.target.nextSibling.value, index)} className="btn btn-outline-success" type="button">Update</button>
                    <input type="text" className="form-control h-auto" placeholder="Enter the car name!" />
                </div>
            </div>
        )
    })

    return (
        <React.Fragment>
            {data}
        </React.Fragment>

    )
}

export default Favorites;