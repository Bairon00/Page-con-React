import React from "react";
function Welcome(){
    return( 
        <div className="bg-secondary bg-opacity-25 mx-auto rounded col-lg-9 col-md-7 col-sm-7   justify-content-center">
            <h1 className="letra py-3 mx-5">A Warm Welcome!</h1>
            <p className="mx-5 mb-4 ">Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final</p>
            <button type="button" className="btn btn-primary mx-5 mb-5">Call to action!</button>
        </div>

    );
}
export default Welcome;