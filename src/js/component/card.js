import React from "react";
function Card (){
    return(
        <div className="card  my-5 mx-3 col-sm-7 col-lg-2 "  >
  <img src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    );
}
export default Card;
//style={{ width: "15rem"}}