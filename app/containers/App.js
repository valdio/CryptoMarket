import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import GLOBALS from '../lib/globals';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions';
import {NativeRouter, BackButton, Switch, Route} from 'react-router-native';
import {ROUTE} from '../lib/routing/routes';
import {globalRoutes} from '../lib/routing/globalRoute';
import {DEVICE} from '../lib/device';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalRoute: ROUTE.INDEX,
    };

    this._setGlobalRoute = this._setGlobalRoute.bind(this);
    this._renderRoutes = this._renderRoutes.bind(this);
  }


  render() {
    return (
      <NativeRouter>
        <BackButton>
          <View style={{flex: 1, backgroundColor: GLOBALS.COLOR.BACKGROUND}}>
            {this._renderRoutes()}
          </View>
        </BackButton>
      </NativeRouter>
    );
  }

  _renderRoutes() {
    return <Switch>
      {globalRoutes.map(tab =>
        <Route exact key={tab.route} path={tab.route} render={(props) => {
          const PROPS = {...this.props, ...props};
          const Component = tab.component;
          return <Component {...PROPS}/>;
        }}/>)}
    </Switch>;
  }

  _setGlobalRoute = (route) =>
    setTimeout(() => this.setState({globalRoute: route}), 1);
}

//bind the redux actions to the app pros to we can dispatch redux actions thought props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

//map portions of the redux state to this component's props
function mapStateToProps(state) {
  return {
    // user: state.user,
  };
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
export default connect(mapStateToProps, mapDispatchToProps)(App);
