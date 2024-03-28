import React, { Component } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import {Nav, RecipeCardCollection, RecipeCard, RecipeCreateForm, RecipeUpdateForm, NEWHOME, NEWREQUEST} from "./ui-components";
import {Routes, Route} from 'react-router-dom'
import NewRecipe from './NewRecipe'
import EditRecipe from './EditRecipe';

//import EditRecipe from './EditRecipe';


class App extends Component {

  render() {
  return (
    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/' element={<NEWHOME/>} />
<Route exact path='/col' element={<div><Nav/><RecipeCardCollection/></div>} />
<Route exact path='/req' element={<div><Nav/><NEWREQUEST/></div>} />
<Route exact path='/new' element= {<NewRecipe/>} />
<Route exact path='/cr' element= {<div><Nav/><RecipeCreateForm/></div>} /> 
<Route exact path='/up' element= {<div><Nav/><RecipeUpdateForm/></div>} />
<Route exact path='/edit/:cid' element= {<div><EditRecipe/></div>} />
</Routes>
</header></div>


    );
  
}

}
export default withAuthenticator(App);