import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DataReceived from './DataReceived';
import Favorites from './Favorites';
// import { data } from 'jquery';

export default function App(){

const [favorites, setFavorites] = useState([]);
const [items, setItems] = useState([]);
const getLocalData = JSON.parse(localStorage.getItem('favorites') || "0");


    useEffect( ()=> {
        getLocalData!==0 ? setFavorites(getLocalData) : getData()
    },[])
    
    function getData(){
        axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json')
        .then(resp => {
            const {Results}=resp.data
            let array=[]
            for (let index = 0; index < (Results.length=20); index++) {
                let {Mfr_ID: id, Mfr_Name: name}=Results[index]
                array.push({id,name})
            }
            setItems(array)
         }
        )
    }

    let addToFavorites = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        setFavorites(favorites.concat(items[e.target.id]))
       
    }
  

        return(
            <div className="container">
                <div className="row">
                    <div className="col-8 pl-0">
                        <div className="h-70 d-flex justify-content-center align-items-center text-white w-100 p  bg-info">
                           FAVORITES
                        </div>
                    </div>
                    <div className="col-4 p-0">
                       <div className="h-70 d-flex justify-content-center align-items-center text-white w-100 p  bg-info">
                           RECEIVED LIST FROM THE SERVER
                       </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <Favorites favorites={favorites} />
                    </div>
                    <div className="col-4">
                        <DataReceived items={items} addToFavorites={addToFavorites} />
                    </div>
                </div>
            </div>
        )

}