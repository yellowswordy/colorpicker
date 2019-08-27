import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import './Palette.css'

class Palette extends Component {
    render() {
        //here we render box all box component from individual palette
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name}/>
        ));
        return (
            <div className='Palette'>
                {/*Navbar goes here*/}
                <div  className='Palette-colors'>
                {colorBoxes}
                </div>
            {/*    Footer in future*/}
            </div>
        );
    }
}

export default Palette;