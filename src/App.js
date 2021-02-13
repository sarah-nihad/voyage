import React,{Component} from 'react';
import './App.css';
import './assets/test.scss';
import './assets/css/dash.css';
import './assets/css/css.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Route , Switch} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './component/main/Home';
import Admin from './component/dashboard/Admin';
import Si from './component/dashboard/Si'
import Context from './assets/js/Context';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        number: 1,
        cart:[],
        resultCart:[],
        summed:'',
        Lang:'en'
    }
}


async  componentDidMount(){
  var Lang = localStorage.getItem('Lang')
  if (Lang!==null) {
    this.setState({Lang:Lang})
  }
 
  setTimeout(() => {
    console.log(this.state.Lang);
  }, 200);
  var result = JSON.parse(localStorage.getItem('cart'))
  this.setState({resultCart:result})
  var arr=[]
  if (result!==null) {
    for (let index = 0; index < result.length; index++) {
      const total = result[index].price*result[index].count
      arr.push(total)
    }

    for (var i = 0, sum = 0; i < arr.length; sum += Number(arr[i++]));
    console.log('suuumed',sum);
    this.setState({summed:sum})
  }
 









}


render() {
  return (
    <ParallaxProvider>
      <Context.Provider value={{
        value: this.state, action: {
          ss:()=>{this.componentDidMount()}
        }
      }}>
    <BrowserRouter>
    <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
    <Route exact path ='/' component={Home} />
    <Route  path ='/Admin' component={Admin} />
    <Route  path ='/Main' component={Si} />
    <Route  path ='/Orders' component={Si} />
    <Route  path ='/Show' component={Si} />
    <Route  path ='/AllProduct' component={Si} />
    </BrowserRouter>

    </Context.Provider>
    </ParallaxProvider>
  );
}
}
export default App;
