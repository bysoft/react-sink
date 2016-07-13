import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
// import styles from './Tweets.scss'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyAwesomeReactComponent from 'components/sample/MyAwesomeReactComponent'
import injectTapEventPlugin from 'react-tap-event-plugin'

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AutoComplete from 'material-ui/AutoComplete';

const libs = ['Material UI', 'Elemental UI', 'Grommet', 'Mui', 'Rebass'];

injectTapEventPlugin()

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export default class Tweets extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {

    const App = () => (
      <MuiThemeProvider>
      <MyAwesomeReactComponent />
      </MuiThemeProvider>
    )

    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (<div className={styles.wrapper}>

      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
        <AutoComplete
          floatingLabelText="Type something ..."
          filter={AutoComplete.fuzzyFilter}
          dataSource={libs}
          maxSearchResults={3}
          menuStyle={{ background: '#fff' }}
          />
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>

    </div>)
  }
}
