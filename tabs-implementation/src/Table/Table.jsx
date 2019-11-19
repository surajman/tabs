import React from 'react';
import './Table.css';

const Table = (props) => {
    const { columns, rows } = props;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map(column => <th>{column.name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {/* <tr className="table-rows">
                        {rows.map(row => {
                        return (<td>{row}</td>)
                        })}
                    </tr> */}
                    {rows.map(row => (
                        <tr>
                            {columns.map(column => (<td>
                                {row[column.value]}
                            </td>))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default Table;