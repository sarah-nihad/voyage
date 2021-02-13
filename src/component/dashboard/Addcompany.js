import React, { Component } from 'react';

import { Row,Col} from 'react-bootstrap';
import {TextInput,Select,Button,toaster,FilePicker } from 'evergreen-ui';
// import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';
import Cookies from 'universal-cookie';

// import moment from 'moment';

 const cookies =new Cookies();






class Addcompany extends Component {
    constructor(props){
        super(props);
    this.state={
      data:[],
      email:'',
      
      phone:'',
  name:'',
        password:'',
        discount:'',
        file:[]
        ,date:(''),
         startDate: new Date(),
      
        location:'',
        section_id:''
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
     
   


<div id='rr'>
 <Row style={{marginRight:'0px'}} className="justify-content-md-center">
  <Col id="colimg" xs={12} md={12} lg={12}> 
  {/* <img src={require('./poerd by.png')} id="im" /> */}
  </Col></Row>
<Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="tt" >
  {/* <img src={require('./ss.png')} id="tab" />  */}
  
  </Col> </Row>

  <Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="tt" >
  <div id='account'>Add User</div></Col> </Row> 
 <div id="form">

<Row style={{marginRight:'0px'}}  className="justify-content-md-center"id="row1">
<Col  id='c2' sm="12" lg="6" >


<div id='dd'>

      <p>Email :</p>
      <TextInput id='width'
  name="text-input-name"
  placeholder="email" 
  required value={this.state.email} onChange={(e)=>{
    this.setState({email:e.target.value})
      }}/>
      </div>

    
     
     
<div id='dd'>
<p> Name :</p>
 <TextInput id='width'
  name="text-input-name"
  placeholder="User Name" 
  required value={this.state.name} onChange={(e)=>{
    this.setState({name:e.target.value})
      }}
/>
      
      </div>
    



 </Col>
 <Col  id='cc' sm="12" lg="6" >



<div id='d1'>
      <p>discount :</p>
<TextInput id='width' 
  name="text-input-name"
  placeholder="discount"  required
  value={this.state.discount} onChange={(e)=>{
    this.setState({discount:e.target.value})
      }} />
      </div>
      <div id='d1'>
      <p>Phone:</p>
          <TextInput id='width'
  name="text-input-name"
  placeholder="phone" 
  required value={this.state.phone} onChange={(e)=>{
    this.setState({phone:e.target.value})
      }}/>
      </div>
     

  

   
    
      
 
</Col>

</Row>

<Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="t11" sm={12} >
     <div id='d3'>
  


     <p >Insert Logo :</p>
<FilePicker  id='width'
  multiple
 
 
  onChange={files => 
    this.setState({file:files[0]})
  }
/>



      </div> 

      
   </Col> </Row>



<Row  style={{marginRight:'0px'}} className="justify-content-md-center"> 
 <Col id="t1" >
 <Button  appearance="primary" intent="warning" id='blogin'
         onClick={()=>this.login()}>Save</Button> 
   </Col> </Row>



</div>
    

    
</div>



    );
  }
}

export default Addcompany;
