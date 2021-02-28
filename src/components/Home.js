import React, { Component } from "react";
import { Link } from "react-router-dom";
import beersPic from "../assets/beers.png";
import randomBeerPic from "../assets/random-beer.png";
import newBeerPic from "../assets/new-beer.png";

class Home extends Component { 
  render() { 
    return (
      <div>
        <Link to={ "/beers" }> <img src={ beersPic } alt="beers"/> </Link>
        <h2> All Beers </h2>
        <Link to={ "/random-beer" }> <img src={ randomBeerPic } alt="beers"/> </Link>
        <h2> Random Beer </h2>
        <Link to={ "/new-beer" }> <img src={ newBeerPic } alt="beers"/> </Link>
        <h2 >New Beer </h2>
      </div>
    );
   }
 }

export default Home;