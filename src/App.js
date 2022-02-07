import './style.scss';
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Col, Button, Row, Input, Radio } from 'antd';
import { UploadOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

function App() {

  const defaultUploadFile = {
    lastModified: 0,
    lastModifiedDate: new Date(),
    name: "",
    size: 0,
    type: "",
    uid: "",
    webkitRelativePath: "",
    duenumber: 0,
  }

  const [value, setvalue] = useState(1);
  const [uploadNewFile, setUploadNewFile] = useState([defaultUploadFile]);

  const renderFiles = () => {
    uploadNewFile.map((content, indexFile) => {
      <Row key={indexFile}>
        <Col>
          <p>Teste aqui</p>
        </Col>
      </Row>
    });
  }
  
  /*const removeInputFile = (e) => {
    e.preventDefault();
    setUploadNewFile([uploadNewFile]);
  }*/

  /*const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setvalue(e.target.value);
  }*/

  return (
    <div>
      {renderFiles()}
    </div>
  );
}

export default App;
