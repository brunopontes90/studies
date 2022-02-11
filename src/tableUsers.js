import { Input, Button, message } from "antd";
import React, { useState } from "react";
import './tableUsers.scss';
import 'antd/dist/antd.css';

function Users(){

    const users = [
        ["Moises"], 
        ["Vinicius"], 
        ["Bruno"],
        ["Gabriel"]
    ];

    const [developer, setDeveloper] = useState([users]);

    const developerName = (eventName) => {
        if(eventName.keyCode === 13) {
            const valueName = eventName.target.value;
            console.log(valueName);
        }      
    }

    return(
        <div className="ant-div">

            <h1 className="ant-title-h1">Tabela de Desenvolvedores</h1>

            <table border="2" className="ant-table">
                <tr className="ant-tr">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Office</th>
                </tr>

                {users.map((contentUsers, indexUsers) => 
                <tr className="ant-tr">
                    <td>{indexUsers}</td>
                    <td>{contentUsers}</td>
                    {contentUsers == "Moises" ? (
                        <td>Tech Lead</td>
                    ) : <td>Desenvolvedor da ElloX Digital</td>}
                </tr>
                )}
            </table>
            <div className="ant-dev">
                <label>Nome do Desenvolvedor:</label>
                <Input placeholder="Digite o nome" onKeyDown={(eventName) => developerName(eventName)} />
            </div>

            {/*<div className="ant-button">
                <Button
                type="primary"
                size="medium"
                onClick={developerName}
                >
                Avançar
                </Button>
            </div>*/}

            <div className="ant-h2">
                <h2>{developerName}</h2>
            </div>
        </div>
    );
}

export default Users;