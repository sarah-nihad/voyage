import React from 'react';
import Component from '@reactions/component';

import { toaster ,Pane,Dialog} from 'evergreen-ui';

import Host from '../../assets/js/Host';
import Context from '../../assets/js/Context';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class Addcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      description: '',
      file: [],
      name: '',


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
      <Context.Consumer>
           {ctx => {
      
            return (

      <Component initialState={{ isShown: false }}>
        {({ state, setState }) => (
          <Pane>
            <Dialog
              isShown={state.isShown}
              title="Dialog title"
              onCloseComplete={() => setState({ isShown: false })}
              confirmLabel="Add Product"
              hasHeader={false}
            >
              <div id='AddProductrr'>
                <div id='AddProductTitle'>Add account</div>
                <div id="AddProductForm">
                  <div className='AddProductInputMain'>
                    <p>Name :</p>
                    <input className='AddProductInput'
                      type="text"
                      placeholder="Name"
                      required value={this.state.name} onChange={(e) => {
                        this.setState({ name: e.target.value })
                      }} />
                  </div>
                 <div className='AddProductInputMain'>
                    <p> Price :</p>
                    <input className='AddProductInput'
                      type='number'
                      placeholder="Price"
                      required value={this.state.phone} onChange={(e) => {
                        this.setState({ phone: e.target.value })
                      }}
                    />
                  </div>
                  <div className='AddProductInputMain'>
                    <p>Image1 :</p>
                    <input
                      type='file' className='AddProductInput'
                      placeholder="email"
                      required value={this.state.email} onChange={(e) => {
                        this.setState({ email: e.target.value })
                      }} />
                  </div>
                  <div className='AddProductInputMain'>
                    <p>Image2 :</p>
                    <input className='AddProductInput'
                      type='file'
                      placeholder="password" required
                      value={this.state.password} onChange={(e) => {
                        this.setState({ password: e.target.value })
                      }} />
                  </div>
                  <div className='AddProductInputMain'>
                    <p>Discount :</p>
                    <input className='AddProductInput'
                      type='number'
                      placeholder="Discount" required
                      value={this.state.password} onChange={(e) => {
                        this.setState({ password: e.target.value })
                      }} />
                  </div>
                </div>               
              </div>
            </Dialog>
            <div id='btn_AddProductDash' onClick={() => setState({ isShown: true })}>
              <div>Add Product</div>
            </div>
          </Pane>
        )}
      </Component>
            )}}
            </Context.Consumer>
    );
  }
}

export default Addcard;