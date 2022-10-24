import React from "react";
//include images into your bundle
import rigoImage from "../../img/exmple.jpg";
//create your first component



export function Card() {
    return (
        <div>
            <div class="row">
            <div class="col-sm-2"></div>
        <div class="col-sm-2">
          <div class="card">
          <img src={rigoImage} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              <p class="card-text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
              <a href="#" class="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
          <img src={rigoImage} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              <p class="card-text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
              <a href="#" class="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
          <img src={rigoImage} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              <p class="card-text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
              <a href="#" class="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="card">
          <img src={rigoImage} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card Title</h5>
              <p class="card-text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
              <a href="#" class="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <div class="col-sm-2"></div>
      </div>
        </div>
        );
  }