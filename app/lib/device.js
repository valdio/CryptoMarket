import {Dimensions, Platform} from 'react-native';

export const DEVICE = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
  PLATFORM: Platform.OS, // ios || android
  isDeviceIOS: Platform.OS === 'ios',
  isDeviceAndroid: Platform.OS === 'android',
  isIphoneX: Platform.OS === 'ios' && Dimensions.get('window').height === 812 && Dimensions.get('window').width === 375,
  isIphoneXs: Platform.OS === 'ios' && Dimensions.get('window').height === 896 && Dimensions.get('window').width === 414,
  isIphoneXsMax: Platform.OS === 'ios' && Dimensions.get('window').height === 896 && Dimensions.get('window').width === 414,
  isIphoneXFamily: this.isIphoneX || this.isIphoneXs || this.isIphoneXsMax,
};

