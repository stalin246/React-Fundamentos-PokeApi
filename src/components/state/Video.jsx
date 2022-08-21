import React from "react";
import { useState } from "react";

const Video = () =>
{
    const [conditional, setConditional] = useState(false);

    return(
        <>
        <div className="container mt-4">
        <h1 className="mb-4 text-2xl">Video</h1>
        <hr />
          <div className="text-center ">
          {/* <h2 className="mt-4 mb-4">Ver video: {conditional.toString()}</h2> */}
            <button className="btn btn-dark" onClick={()=>setConditional(true)}>Mostrar</button>
            <button className="btn btn-danger ms-2 px-5" onClick={()=>{setConditional(false)}}>Ocultar</button>
            {
                conditional 
                ? (
                    <>
                    <iframe style="display:unset;" width="560" height="315" src="https://www.youtube.com/embed/mcWXvFC45hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                    <h3 className="mt-3">Has <span className="text-success underline">activado</span> los superpoderes...</h3>
                    </>
                )
                : (
                    <h3 className="mt-3">Has <span className="text-danger">desactivado</span> los superpoderes...</h3>
                )
            }

            {
                conditional && <h3>Nivel de poder es <span className="text-info">10000</span></h3>
            }

        </div>
        </div>
        </>
    );
};

export default Video;