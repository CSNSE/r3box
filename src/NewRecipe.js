import React, { Component } from 'react'
import { CreateRecipe } from "./ui-components";
import "./App.css";

class NewRecipe extends Component {
    render(){
        return (<Put />);
    }
}

  function Put() {
    return (
      <div><header className="App-header">
        {/* <Nav/> */}
        <CreateRecipe style={{ textAlign: "left"}} />
        </header></div>
      );
    }

export default NewRecipe