import React, { useState } from "react";
import {Row, Col, Input} from 'antd';

function Test(){

    const numbers = [1, 2, 3, 4, 5];

    const [valores, setValores] = useState([numbers]);


    return (
        <ul>
            {valores.map( (number) => <li>{ number }</li>)}    
        </ul>
    );
}

export default Test;