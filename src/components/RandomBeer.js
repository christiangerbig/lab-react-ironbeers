import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

class RandomBeer extends Component {

  state = {
    beer: {}
}

  getBeer = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(
        (response) => {
          let beer = {
            name: response.data.name,
            image: response.data.image_url,
            tagline: response.data.tagline,
            firstBrewed: response.data.first_brewed,
            attenuationLevel: response.data.attenuation_level,
            description: response.data.description,
            contributedBy: response.data.contributed_by
          };
          this.setState(
            {
              beer: beer
            }
          );
        }
      );
  }

  componentDidMount() {
    this.getBeer();
  }

  render() {
    const { beer } = this.state;
    return (
      <div>
        <Header/>
        <div className="containerMarginTop">
          <img className="smallPicSize" src={ beer.image } alt="beer"/>
          <h3> { beer.name } { beer.attenuationLevel }</h3>
          <h5> { beer.tagline }  {beer.firstBrewed }  </h5>
          <p> { beer.description } </p>
          <h6> { beer.contributedBy } </h6>
        </div>
      </div>
    );
  }

}

export default RandomBeer;