import React, { Component} from "react";
import { Route, Switch, withRouter} from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Beers from "./components/Beers";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

class App extends Component {
  
  state = {
    beers: []
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(
        (response) => {
          this.setState(
            {
            beers: response.data
            }
          );
        }
      )
      .catch(
        () => {
          console.log("Error while getting beers");
        }
      );
  }

  componentDidUpdate() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(
        (response) => {
          this.setState(
            {
            beers: response.data
            }
          );
        }
      )
      .catch(
        () => {
          console.log("Error while getting beers");
        }
      );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value
    };
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then(
        (response) => {
          console.log(response);
          this.setState(
            {
            beers: [newBeer, ...this.state.beers]
            }, 
            () => {
              this.props.history.push("/beers");
            }
          );
        }
      )
      .catch(
        (err) => {
          console.log("Create failed", err);
        }
      );
  }

  render() { 
    const { beers } = this.state
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/beers" 
            render={
              () => {
                return <Beers beers={ beers }/>
              } 
            }    
          />
            <Route path="/singlebeer/:beerId" component={ SingleBeer }/>
          <Route path="/random-beer" component={ RandomBeer }/>
          <Route path="/new-beer" 
            render={
              () => {
                return <NewBeer onAdd={ this.handleSubmit }/>
              }
            }
          />
        </Switch>
      </div>
    );
  }

}

export default withRouter(App);