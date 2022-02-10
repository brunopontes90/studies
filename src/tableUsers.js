import { Input, Button } from "antd";
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
                    ) : <td>Desenvolvedores da ElloX Digital</td>}
                </tr>
                )}
            </table>
            <div className="ant-dev">
                <label>Nome do Desenvolvedor:</label>
                <Input placeholder="Nome do Desenvolvedor" value={developer.value}/>
            </div>

            <div className="ant-button">
                <Button
                type="primary"
                size="medium"
                onClick={() => console.log(setDeveloper(developer))}
                >
                Avançar
                </Button>
            </div>

            <div className="ant-h2">
                {developer.value == 'Moises' ? (
                    <h2>{developer.value} é Tech Lead</h2>
                ) : null}
            </div>
        </div>
    );
}

export default Users;