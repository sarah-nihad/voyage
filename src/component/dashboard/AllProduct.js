import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {Table} from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment from 'moment';

import Addcard from './Addcard';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const cookies = new Cookies();

class AllProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
          


        }
       
    }
   



    render() {
        return (

            <div id='AddProductrr'>
                 <div id='main_btnCard' style={{width:'100%',justifyContent:'flex-end'}}  >
                           <Addcard />
                        </div>
                <div id='AllProductTitle'>All Product</div>


                    <Table striped bordered hover style={{marginTop:15}} >
  <thead>
    <tr>
      <th>#</th>
      <th>Photo</th>
      <th>Name</th>
      <th>Price</th>
      <th>Counts Number</th>
      <th> Edit</th>
      <th> Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
     <td><img src={require('../../assets/img/line2.jpg')} alt='img'  style={{height:100}}/></td> 
                            <td> eye Liner </td>
                            <td>13</td>
                            <td>2</td>
                            <td><EditIcon id='dashEditIcon'  /> </td>
                            <td> < DeleteIcon  id='dashDeleteIcon'  /> </td>
    </tr>
   
 
  </tbody>
</Table>








            
            </div>

        );
    }
}

export default AllProduct;
