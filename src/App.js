import React from 'react';
import logo from './logo.svg';
import './App.css';
import Palette from "./Palette";
import seedColors from './SeedColors'
import {generatePalette} from "./colorHelpers";

function App() {
    console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
        {/*with ... we unpack all values from palette 5th element*/}
        <Palette {...seedColors[5]}/>
    </div>
  );
}

export default App;
