import {Redirect} from 'react-router-native';
import {View} from 'react-native';

/**
 * Method to return a redirect component of react-router-native
 * @param route Route to redirect to
 * @param pushToHistory Flag to indicate if this route should be pushed on the routes history. Default set to true.
 * @returns {*} {@link Redirect} component or {@link View}
 */
export const redirectTo = (route, pushToHistory = true) => route && route.length > 0 &&
  <Redirect push={pushToHistory} to={route}/> || <View/>;

/**
 * Push a new route in the routing history of the app
 * @param route Route to be pushed
 * @param history Routing history present in the app till the point of calling this method.
 * @returns
 */
export const pushRouteToHistory = (route, history) =>
  route && route.length > 0 && history &&
  (typeof history.push === 'function') &&
  history.push(route);
