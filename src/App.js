import React from 'react';

import './App.css';
import Palette from "./Palette";
import seedColors from './SeedColors'
import {generatePalette} from "./colorHelpers";

function App() {

  return (
    <div className="App">
        {/*with ... we unpack all values from palette 5th element*/}
        <Palette palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
