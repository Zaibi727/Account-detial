import React, { Component } from 'react';
import './tableHead.css';

class Head extends Component {
    render() { 
        return ( 
            <div>
                    <table className="head-table">
                    <tr className="head-row">
                         <th>
                             USER
                         </th>
                         <th className="tt">
                             ACCOUNT TYPE
                         </th>
                         <th>
                             STATUS
                         </th>
                         <th>
                             COORDINATION
                         </th>
                     </tr>
                    </table>
            </div>
         );
    }
}
 
export default Head;