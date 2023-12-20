import React, { Component } from 'react'
import { EditRecipe } from "./ui-components";
import "./App.css";

class EditRecipe extends Component {
    render(){
        return (<Put />);
    }
}

  function Put() {
    return (
      <div><header className="App-header">
        {/* <Nav/> */}
        <EditRecipe />
        </header></div>
      );
    }

export default EditRecipe