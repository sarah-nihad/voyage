
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { Navbar } from 'react-bootstrap';
import { Popover, Pane, Avatar } from 'evergreen-ui';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Orders from './Orders';
import Show from './Show';
import AllProduct from './AllProduct';
import Main from './Main';

const cookies = new Cookies();
function rendericon(props) {


  if (props.match.path === '/Addcompany') {
    return (<Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }

  else if (props.match.path === '/Addcard') {
    return (<Link to='./Home' id='ll'> <i className="fas fa-arrow-circle-left" id='ic'></i></Link>)
  }

}



const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,

    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#b15f6c'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };


  render() {
    const { classes, theme } = this.props;

    return (
      // <Context.Consumer>
      //   {ctx => {
      //     if (ctx.value.session.role === 1) {
      //       return (

      <div className={classes.root} >

        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} id='abr' >
          <Navbar expand="lg" id="navmain">

            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Navbar.Brand >{rendericon(this.props)}</Navbar.Brand>
            <div id='SiHeader'>
              <Link to='/'>
                <img src={require('../../assets/img/Untitled-1.png')} id='SiHeaderImg' />
              </Link>
              <div id='SiLogbtn'>
                <div id='p1'>Logout</div>
                <Popover
                  content={
                    <Pane
                      width={200}
                      height={100}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <button id='out' onClick={() => {
                        cookies.remove("token");
                        window.location.href = "/"
                      }}>Log out</button>
                    </Pane>
                  }
                >
                  <Avatar
                    //  src={require('./d.jpg' )} 
                    name=""
                    size={30}
                    id='hh'
                  />
                </Popover>
              </div>
            </div>
          </Navbar>
        </AppBar>

        <nav className={classes.drawer}>

          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}

            >
              <div id='jj'>
                <div ></div>
                <div className={classes.toolbar} />
                <Link to='/Orders'>
                  <List>
                    <ListItem button>
                      <ListItemIcon style={{ color: '#fff', paddingLeft: 30 }}>
                        <i className="fas fa-table" ></i>        </ListItemIcon>
                      <ListItemText ><span style={{ color: '#fff', fontWeight: '500', fontSize: '20px' }}>Orders</span></ListItemText>
                    </ListItem>
                  </List>
                </Link>
                <Link to='/AllProduct'>
                  <List>
                    <ListItem button>
                      <ListItemIcon style={{ color: '#fff', paddingLeft: 30 }}>
                        <i className="fas fa-user-plus"></i>       </ListItemIcon>
                      <ListItemText ><span style={{ color: '#fff', fontWeight: '500', fontSize: '20px' }}>Product</span></ListItemText>
                    </ListItem>
                  </List>
                </Link>

              </div>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open

            >
              <div id='jj' >
                <div className={classes.toolbar} />
                <Link to='/Orders'>
                  <List>
                    <ListItem button>
                      <ListItemIcon style={{ color: '#fff', paddingLeft: 30 }}>
                        <i className="fas fa-table" ></i>        </ListItemIcon>
                      <ListItemText ><span style={{ color: '#fff', fontWeight: '500', fontSize: '20px' }}>Orders</span></ListItemText>
                    </ListItem>
                  </List>
                </Link>
                <Link to='/AllProduct'>
                  <List>
                    <ListItem button>
                      <ListItemIcon style={{ color: '#fff', paddingLeft: 30 }}>
                        <i className="fas fa-user-plus"></i>       </ListItemIcon>
                      <ListItemText ><span style={{ color: '#fff', fontWeight: '500', fontSize: '20px' }}>Product</span></ListItemText>
                    </ListItem>
                  </List>
                </Link>


              </div>
            </Drawer>
          </Hidden>

        </nav>

        <main className={classes.content}>

          <div className={classes.toolbar} />
          {renderPage(this.props)}

        </main>
      </div>

    )
  }

}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,

  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
const renderPage = (props) => {




  if (props.match.path === '/Orders') {
    return (<Orders />)
  }
  else if (props.match.path === '/Show') {
    return (<Show />)
  }
  else if (props.match.path === '/AllProduct') {
    return (<AllProduct />)
  }
  else if (props.match.path === '/Main') {
    return (<Main />)
  }




}
export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);



