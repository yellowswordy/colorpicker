import React from 'react';
import logo from './logo.svg';
import './App.css';
import Palette from "./Palette";
import seedColors from './SeedColors'

function App() {
  return (
    <div className="App">
        {/*with ... we unpack all values from palette 5th element*/}
        <Palette {...seedColors[2]}/>
    </div>
  );
}

export default App;
