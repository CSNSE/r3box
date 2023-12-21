import React, { Component } from 'react'
import { RecipeNew, Nav } from "./ui-components";
import "./App.css";

class NewRecipe extends Component {
    render(){
        return (<Put />);
    }
}

  function Put() {
    return (
      <div><header className="App-header">
        <Nav/>
        <RecipeNew style={{ textAlign: "left"}} />
        </header></div>
      );
    }

export default NewRecipe