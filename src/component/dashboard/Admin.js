import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Context from '../../assets/js/Context';
import Host from '../../assets/js/Host';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cookies = new Cookies();
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: ''

    }
  }

  login(e) {
    e.preventDefault()
    window.location.href = '/Main'
    // axios.post(Host + `auth/login`, {
    //   email: this.state.email,
    //   password: this.state.password
    // })

    //   .then(response => {

    //     console.log(response.data.token);

    //     localStorage.setItem('token', response.data.token);
    //     localStorage.setItem('auth', 'lgoin')
    //     cookies.set("Authorization", response.data.token, {

    //       expires: new Date(Date.now() + 60480000),
    //       path: '/Dashbourd',
    //     }
    //     );

    //     window.location.href = '/Dashbourd'

    //   })
    //   .catch(function (message) {


    //   });
  }



  render() {

    return (

      <Context.Consumer>{ctx => {
        return (
          <div id='adminMain'>
            <div id='admincontainer'>
             
              <div id='field1_ah' style={{ fontSize: '24px', fontWeight: '400', color: 'rgb(56 56 56)', paddingTop: '3%',textAlign:'center',marginBottom:'5%' }}>
                    Login Your Account
                   </div>
              
                 
                
                    <input id='adminInput' style={{ paddingLeft: '10px' }}
                      name="text-input-name"
                      placeholder="E-mail"
                      required value={this.state.email} onChange={(e) => {
                        this.setState({ email: e.target.value })
                      }}
                    />
                 
                
                    <input id='adminInput' style={{ paddingLeft: '10px' }}
                      name="text-input-name" type='password'
                      placeholder=" Password "
                      required value={this.state.password} onChange={(e) => {
                        this.setState({ password: e.target.value })
                      }}
                    />
                 
                  <div id='log1_ah' onClick={(e)=>{
                    this.login(e)
                  }} >
                    <button id='BtnContactUSHome' >  Log In  </button>
                  </div>
               


             
            </div>

          </div>




        )
      }}

      </Context.Consumer>
    );

  }
}
export default Admin;