import React, {useEffect, useState, Fragment} from "react";
import axios from 'axios';
import SearchBox from "./SearchBox";
import LocationInfo from "./LocationInfo";
/*import ResidentContainer from ".ResidentContainer";*/


function LocationContainer(){

    const randomLocation = Math.floor( Math.random() * 108 ) + 1;

    const [idLocation, setIdLocation] = useState(randomLocation);
    const [nameLocation, setNameLocation] = useState("");
    const [typeLocation, setTypeLocation] = useState("");
    const [dimensionLocation, setDimensionLocation] = useState("");
    const [quantityResidentLocation, setQuantityResidentLocation] = useState(0);
    const [arrayUrlCharactersLocation, setArrayUrlCharactersLocation] = useState([])
    
    useEffect( () => {
        const promesa = axios(`https://rickandmortyapi.com/api/location/${idLocation}`);
        promesa
            .then(location => {
             console.log(location)
             setNameLocation(location.data.name);
             setTypeLocation(location.data.type);
             setDimensionLocation(location.data.dimension);
             setQuantityResidentLocation(location.data.residents.length);
             setArrayUrlCharactersLocation(location.data.residents);
             /*setNameLocation(data.name);
             setDataLocation(data.results)*/

        });
    },[idLocation]);

    return(
        <Fragment>
            <SearchBox/>
           
            <LocationInfo
                nameLocation={nameLocation}
                typeLocation={typeLocation}
                dimensionLocation={dimensionLocation}
                quantityResidentLocation={quantityResidentLocation}
            />

        </Fragment>
      
    );
}

export default LocationContainer;