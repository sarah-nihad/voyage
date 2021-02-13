import React, { Component } from 'react';
import { TextInput, Select, Button, toaster } from 'evergreen-ui';
import "react-datepicker/dist/react-datepicker.css";
import {Table} from 'react-bootstrap';
import FaceIcon from '@material-ui/icons/Face';
import PhoneIcon from '@material-ui/icons/Phone';
import PinDropIcon from '@material-ui/icons/PinDrop';
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment from 'moment';
const cookies = new Cookies();

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            startDate: new Date(),


        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date,
            date
        });
    }



    render() {
        return (

            <div id='orderContainer' style={{flexDirection:'column'}} >
                    <div id='orderCard' >
                        <div id='statusOrder' style={{backgroundColor:'#66668c'}} > User Information</div>
                        <div id='inerCardOrder' >
                            <div><FaceIcon /> : Sarah N Hadi </div>
                            <div><PhoneIcon /> : 07701237896 </div>
                        </div>
                        <div>  <PinDropIcon /> : Baghdad aldorah       </div>
                    </div>



                    <Table striped bordered hover style={{marginTop:15}} >
  <thead>
    <tr>
      <th>#</th>
      <th>Photo</th>
      <th>Name</th>
      <th>Price</th>
      <th>Counts Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
     <td><img src={require('../../assets/img/line2.jpg')} alt='img'  style={{height:100}}/></td> 
                            <td> eye Liner </td>
                            <td>13</td>
                            <td>2</td>
    </tr>
   
 
  </tbody>
</Table>








            
            </div>

        );
    }
}

export default Show;
