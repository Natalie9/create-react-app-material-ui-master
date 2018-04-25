import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem';
import { indigo400, red500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from "material-ui/List";
import { BrowserRouter, Route, Link } from 'react-router';

import 'typeface-roboto';




const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',

};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo400,
    accent1Color: red500
  }
})
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpned: false
    };
  }

  _toggleDrawer (){
    this.setState({
      drawerOpned: !this.state.drawerOpned
    })
  }
 
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>


        <AppBar
          title="Pozzzo"
          styles={style}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={() => this._toggleDrawer()}>
        </AppBar>

        <Drawer open={this.state.drawerOpned} 
         docked={false}
         onRequestChange={() => this._toggleDrawer()}>

        
          <List>
            <ListItem> <Link to="/"> Home </Link> </ListItem>
            <ListItem> <Link to="/reservas"> Reservas </Link> </ListItem>
            <ListItem> <Link to=""> Check-in / Check-out </Link> </ListItem>
            <ListItem> Financeiro</ListItem>
            <ListItem> Cadastro de Hospedes</ListItem>
            <ListItem> Integração</ListItem>
        </List>

          
       </Drawer>  

       <span> Olá </span>
       

        
      </MuiThemeProvider>
    )
  }
}

export default App
