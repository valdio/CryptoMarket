import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../actions'
import {NativeRouter, BackButton, Switch, Route} from 'react-router-native'
import {globalRoutes} from '../lib/routing/globalRoute'
import styles from './styles/app'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._renderRoutes = this._renderRoutes.bind(this)
  }


  render() {
    return (
      <NativeRouter>
        <BackButton>
          <View style={styles.container}>
            {this._renderRoutes()}
          </View>
        </BackButton>
      </NativeRouter>
    )
  }

  _renderRoutes() {
    return <Switch>
      {globalRoutes.map(tab =>
        <Route exact key={tab.route} path={tab.route} render={(props) => {
          const PROPS = {...this.props, ...props}
          const Component = tab.component
          return <Component {...PROPS}/>
        }}/>)}
    </Switch>
  }
}

//bind the redux actions to the app pros to we can dispatch redux actions thought props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

//map portions of the redux state to this component's props
function mapStateToProps(state) {
  return {
    // test: state.test
  }
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
export default connect(mapStateToProps, mapDispatchToProps)(App)
