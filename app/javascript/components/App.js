import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DataReceived from './DataReceived';
import Favorites from './Favorites';
import Modal from './Modal'
// import { data } from 'jquery';

export default function App(){

const [favorites, setFavorites] = useState([]);
const [items, setItems] = useState([]);
const [error,setError] =useState(false);

const getLocalData = JSON.parse(localStorage.getItem('favorites') || "0");


    useEffect( ()=> {
        getLocalData!==0 && getLocalData.length!==0 ? setFavorites(getLocalData) : null;
        getData();
    },[])

    useEffect( () => {
        try{
           localStorage.setItem('favorites',JSON.stringify(favorites));
        } catch {()=> console.log("something went wrong")}
    },[favorites])
    
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

    let checkForDublicates = function ({id}) {
        return favorites.filter(item => item.id===id).length;
    }

    let addToFavorites = (e) => {
        checkForDublicates(items[e.target.id]) ===0 ? 
            setFavorites(favorites.concat(items[e.target.id])) :
                setError(true);
    }

    let removeFromFavorites = function(id) {
        setFavorites(favorites.slice(0,id).concat(favorites.slice(id+1,favorites.length)));
    }

    function updateFavorites(value, id){
          console.log(value,"   ", id)
          setFavorites(favorites.slice(0,id).concat([{id: favorites[id].id, name : value}])
          .concat(favorites.slice(id+1,favorites.length)))
    }

        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-8 pl-0">
                        <div className="h-70 d-flex justify-content-center align-items-center text-white w-100 p  bg-info">
                           FAVORITES LIST
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
                        <Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} updateFavorites={updateFavorites} />
                    </div>
                    <div className="col-4">
                        <DataReceived items={items} addToFavorites={addToFavorites} />
                    </div>
                </div>
            </div>
                {error && <Modal errorWash={()=> setError(!error)}/>}
            </>
        )

}