import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <h1>React colors!</h1>
                {
                    palettes.map(p => (

                        <p><Link to={`/palette/${p.id}`}>{p.paletteName}</Link></p>
                    ))
                }
            </div>
        );
    }
}

export default PaletteList;