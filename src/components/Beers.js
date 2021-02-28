import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class Beers extends Component {
  render() {
    const { beers } = this.props;
    return (
      <div>
        <Header/>
        {
          beers.map(
            (beer, index) => {
              return (
                <div className="flexbox containerMarginTop" key={ index }>
                  <div>
                    <Link to={ `/singlebeer/${ beer._id }` }>
                      <img className="smallPicSize" src={ beer.image_url } alt={ index }/>
                    </Link>
                  </div>
                  <div>
                    <h2> { beer.name } </h2>
                    <h3> { beer.tagline } </h3>
                    <h5> Created by { beer.contributed_by } </h5>
                  </div>
                </div>
              );
            }            
          )
        }
      </div>
    );
  }
}

export default Beers;