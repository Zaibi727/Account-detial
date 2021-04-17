import React, { Component } from 'react';
import Head from './tableHead';
import Row from './tableRow';

class Table extends Component {
    state = { 
        Rows: [
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5}, 
            {id: 6},
            {id: 7},
            {id: 8},  
        ],
            profilePic: './images/p-1.jpeg',
            name: 'Debra Waren',
            email: 'email@gmail.com',
            accountType: 'Owner',
            status: 'Active',
            coordinator: '0 propjects',
     }


    render() { 
        return ( 
            <div>
             <Head />
                <ul>
                    {this.state.Rows.map(r => <Row 
                    key={r.id}
                    pic={this.state.profilePic}
                    name={this.state.name}
                    email={this.state.email}
                    accountType={this.state.accountType}
                    status={this.state.status}
                    coordinator={this.state.coordinator}
                     />)}
                </ul>
            </div>
         );
    }
}
 
export default Table;
