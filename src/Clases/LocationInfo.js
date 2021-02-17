import React, {Fragment} from "react";

function LocationInfo({nameLocation, typeLocation, dimensionLocation, quantityResidentLocation} ){
   
    return(
        <Fragment>
            <ul>
                <li>{nameLocation}</li>
                <li>{typeLocation}</li>
                <li>{dimensionLocation}</li>
                <li>{quantityResidentLocation}</li>
            </ul>
        </Fragment>
    );
}

export default LocationInfo;