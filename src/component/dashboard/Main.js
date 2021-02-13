import React, { Component } from 'react'
import Context from '../../assets/js/Context';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
     

    }
  }

 
  render() {

    return (

      <Context.Consumer>{ctx => {
        return (
        <div ID='mainDash'>

        </div>




        )
      }}

      </Context.Consumer>
    );

  }
}
export default Main;