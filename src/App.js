import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Palette from "./Palette";
import seedColors from './SeedColors'
import {generatePalette} from "./colorHelpers";

function App() {

  return (
        <Switch>
            <Route exact path='/' render={() => <h1>Palette list ges here</h1>}/>
            <Route exact path='/palette/:id' render={() => <h1>Individual palette</h1>}/>
        </Switch>
    // <div className="App">
    //     {/*with ... we unpack all values from palette 5th element*/}
    //     <Palette palette={generatePalette(seedColors[4])}/>
    // </div>
  );
}

export default App;
