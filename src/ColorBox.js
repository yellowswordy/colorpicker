import React, {Component} from 'react';
import './ColorBox.css'
import  { CopyToClipboard } from 'react-copy-to-clipboard'
class ColorBox extends Component {
    render() {
        //extracting what in props
        const {name, background} = this.props;
        return (
            <CopyToClipboard text={background}>
                <div style={{background}} className='Color-box'>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    <span className='see-more'>More</span>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;
