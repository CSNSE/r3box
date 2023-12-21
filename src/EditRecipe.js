import React, { Component } from 'react'
import { Nav, MyEditComponent } from "./ui-components";
import "./App.css";

class EditRecipe extends Component {
    render(){
        return (<Put />);
    }
}

  function Put() {
    return (
      <div><header className="App-header">
        <Nav/>
        <MyEditComponent />
        </header></div>
      );
    }

export default EditRecipe