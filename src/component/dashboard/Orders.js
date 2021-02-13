import React, { Component } from 'react';
import { Checkbox, SelectMenu, Button } from 'evergreen-ui';
import "react-datepicker/dist/react-datepicker.css";
import FaceIcon from '@material-ui/icons/Face';
import PhoneIcon from '@material-ui/icons/Phone';
import PinDropIcon from '@material-ui/icons/PinDrop';
import axios from 'axios';
import Cookies from 'universal-cookie';
import moment from 'moment';
const cookies = new Cookies();

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            startDate: new Date(),
            checked3:false,
            checked2:false,
            checked1:true,
            status1:'',
            status2:'',
            status3:'',


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

            <div id='orderContainer' >

<div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center',width:'100%' }} >

<Checkbox
  label="New"
  checked={this.state.checked1}
  onChange={e => {
    this.setState({ checked1: e.target.checked })
    // console.log(this.state.checked);

    if (this.state.checked1 === false) {
      this.setState({ status1: 'new' })
      // console.log(this.state.status1);
    } else {
      this.setState({ status1: '' })
      // console.log(this.state.status1 === undefined);
    }
    // setTimeout(() => {
    //   this.filterResult();
    // }, 200);
  }}
/>
<Checkbox
  label="In Progress"
  checked={this.state.checked2}
  onChange={e => {
    // console.log(this.state.checked2);
    this.setState({ checked2: e.target.checked })
    if (this.state.checked2 === false) {
      this.setState({ status2: 'in progress' })
    } else {
      this.setState({ status2: '' })
    }
    // setTimeout(() => {
    //   this.filterResult();
    // }, 200);
  }}
/>
<Checkbox
  label="Closed"
  checked={this.state.checked3}
  onChange={e => {

    // console.log(e.target.checked);
    this.setState({ checked3: e.target.checked })
    if (this.state.checked3 === false) {
      this.setState({ status3: 'closed' })
    } else {
      this.setState({ status3: '' })
    }
    // setTimeout(() => {
    //   this.filterResult();
    // }, 200);
  }}
/>
</div>



                <div id='ordermain'  >
                    <div id='orderCard' >
                        <div id='statusOrder' > New</div>
                        <div id='inerCardOrder' >
                            <div><FaceIcon /> : Sarah N Hadi </div>
                            <div><PhoneIcon /> : 07701237896 </div>
                        </div>
                        <div>  <PinDropIcon /> : Baghdad aldorah       </div>
                    </div>

                    <div id='orderCard'   onClick={() => {
                  window.location.href = `/Show?id=${this.state.data}`;
                }} >
                        <div id='statusOrder' > New</div>
                        <div id='inerCardOrder' >
                            <div><FaceIcon /> : Sarah N Hadi </div>
                            <div><PhoneIcon /> : 07701237896 </div>
                        </div>
                        <div>  <PinDropIcon /> : Baghdad aldorah       </div>
                    </div>


                </div>
            </div>

        );
    }
}

export default Orders;
