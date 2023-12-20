import logo from "./logo.svg";
import React, { Component } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import {RecipeCard} from "./ui-components";
import {Routes, Route} from 'react-router-dom'
import NewRecipe from './NewRecipe'
//import EditRecipe from './EditRecipe';


class App extends Component {

  render() {
  return (
    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/' element={<div><p>hi</p><RecipeCard/></div>} />
<Route exact path='/create' element= {<NewRecipe/>} />
</Routes>
</header></div>


    );
  
}

}
export default withAuthenticator(App);