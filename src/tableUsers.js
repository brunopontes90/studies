import React from "react";
import './tableUsers.scss';

function Users(){
    const users = [
        ["Moises"], 
        ["Vinicius"], 
        ["Bruno"],
        ["Gabriel"]
    ];

    return(
        <div className="ant-div">
            <h1 className="ant-title-h1">Tabela de Desenvolvedores</h1>
            <table border="1" className="ant-table">
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
                    ) : <td>Desenvolvedores abaixo de Moises</td>}
                </tr>
                )}
            </table>
        </div>
    );
}

export default Users;