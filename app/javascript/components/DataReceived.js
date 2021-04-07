import React from 'react';

function DataReceived ({items}) {
    let data = items.map(item => {
        return (
            <div className="row" key={item.id}>
                <button type="button" className="col-3 btn btn-outline-warning btn-sm">
                    Add to FavOrites
                </button>
                <div className="col-2">{item.id}</div>
                <div className="col-7">{item.name}</div>
            </div>
        )
    })
    console.log(data)

    return (
        <React.Fragment>
            {data}
        </React.Fragment>

    )
}

export default DataReceived;