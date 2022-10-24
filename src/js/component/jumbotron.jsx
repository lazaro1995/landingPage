import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


export function Jumbotron() {
    return (
    <div className="justify-content-center d-flex">
        <div className="jumbotron text-left w-50 p-3 bg-light ">
    <h1 className="display-4 ">A warm welcome!</h1>
    <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
    </div>
    </div>
    
    );
  }












