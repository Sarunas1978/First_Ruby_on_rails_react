import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function App(){

const [favorites, setFavorites] = useState([])

    useEffect( ()=> {
        getData()
    },[])
    
    function getData(){
       axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json')
        .then(resp => {
            console.log(resp.data)
        }
    )
}

        return(
            <div className="container">
            <div className="name">Rails</div>
            <div>Rails Rails</div>
            <div className="text-danger">Rails Rails Rails</div>
            </div>
        )

}