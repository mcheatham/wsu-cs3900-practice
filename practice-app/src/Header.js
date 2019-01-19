import React, { Component } from 'react';
import IMG from "./c.jpg";

class Header1 extends Component {
    render() {
        return <div>
            <h1 className="PlainText">Ceasar Cipher</h1>
            <img src={IMG} atl={""} class="myPicture"/>
        </div>;
    }
}
export default Header1;