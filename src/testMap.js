import React, { useState } from "react";
import {Row, Col, Input, Button} from 'antd';
import 'antd/dist/antd.css';

function Test(){

    const numbers = [1, 2, 3, 4, 5];

    const [valores, setValores] = useState([numbers]);
    const [count, setCount] = useState(0);

    return (
        <Row>
            <Col>
                <ul>
                    {valores.map( (number) => <li>{ number }</li>)}
                </ul>
            </Col>
            <Col>
                <Button 
                type="primary"
                onClick={() => setCount(count + 1)}
                >
                +
                </Button>
            </Col>
            <Col>
                <h1>{count}</h1>
            </Col>
            <Col>
                <Button 
                type="danger"
                onClick={() => setCount(count - 1)}
                >
                -
                </Button>
            </Col>
        </Row>
    );
}

export default Test;