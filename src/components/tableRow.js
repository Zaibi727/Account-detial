import React, { Component } from 'react';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import './tableRow.css';

class Row extends Component {
   
    render() { 
        return ( 
            <div>
                <table>

                    <tr className="data-row">
                        <td className="personal-detial">
                            <img className="img" src={this.props.pic} />
                            <div>
                                <h3>{this.props.name}</h3>
                                <p className="dataa">{this.props.email}</p>
                            </div>
                        </td>
                        <td className="dataa">{this.props.accountType}</td>
                        <td className="dataa">{this.props.status}</td>
                        <td className="dataa">{this.props.coordinator}</td>
                        <td className="btn">
                            <Menu className="menu" menuButton={<MenuButton id="btn"><i class="fa fa-ellipsis-h"></i></MenuButton>}>
                                 <MenuItem className="first">Change account type</MenuItem>
                                 <MenuItem className="second">Deactive account</MenuItem>
                           </Menu>
                        </td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default Row;