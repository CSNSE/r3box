import React, { Component } from 'react'
import { Nav, RecipeEdit } from "./ui-components";
import {useParams } from "react-router-dom";
import "./App.css";

function EditRecipe() {
  return <Put />;
}

  function Put() {
    const { cid } = useParams();
    console.log("found " +(cid));
    return (
      <div><header className="App-header">
        <Nav/>
        <RecipeEdit idProp= {cid}/>
        </header></div>
      );
    }

export default EditRecipe