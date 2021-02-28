import React, { Component } from "react";
import Header from "./Header";

class NewBeer extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="containerMarginTop">
            <form onSubmit={ this.props.onAdd }>
              <label htmlFor="name"> Name </label><br/>
              <input type="text" name="name" id="name"/><br/>
              <label htmlFor="tagline"> Tagline </label><br/>
              <input type="text" name="tagline" id="tagline"/><br/>
              <label htmlFor="description"> Description </label><br/>
              <textarea name="description" id="description" rows="5"/><br/>
              <label htmlFor="firstBrewed"> First Brewed </label><br/>
              <input type="text" name="first_brewed" id="firstBrewed"/><br/>
              <label htmlFor="brewersTips"> Brewers Tips </label><br/>
              <input type="text" name="brewers_tips" id="brewersTips"/><br/>
              <label htmlFor="attenuationLevel"> Attenuation Level </label><br/>
              <input type="number" name="attenuation_level" id="attenuationLevel"/><br/>
              <label htmlFor="contributedBy"> Contributed By </label><br/>
              <input type="text" name="contributed_by" id="contributedBy"/><br/>
              <button type="submit"> ADD NEW </button>
            </form>
          </div>
      </div>
    );
  }
}

export default NewBeer;