# CryptoMarket
Cryptocurrency stats monitor and coin details react-native app.

|![Screenshot](https://github.com/valdio/CryptoMarket/blob/master/__screenshots__/coinList.png)|![Screenshot](https://github.com/valdio/CryptoMarket/blob/master/__screenshots__/coinDetails.png)|
| ------------- | ------------- |

### NOTE! 
Starter React Native project.

[Demo Android APK](https://github.com/valdio/CryptoMarket/blob/master/__apk__/CryptoMarket.apk)

#### Used libraries:
* redux
* react-redux
* redux-logger
* redux-thunk
* redux-persist
* react-router-native
* react-native-fast-image - Image caching
* react-native-wave - functional animation package

#### Testing configured with:
* jest
* enzyme
```shell script
#to run tests
npm test
```

## How to run the app?

```shell script
git clone repo

cd ProjectFolder/
```

Start the JS server
```shell script
react-native start --reset-cache
```

Run the app
```shell script
react-native run-android

//or
react-native run-ios
```


Run logs in console
```shell script
react-native log-android

//or
react-native log-ios
```

Build Android APK
```shell script
cd android
./gradlew clean #clean cached android data
./gradlew assembleRelease #build for release
./gradlew assembleDebug #build for debun

#APK generated under folder
# /android/app/build/outputs/apk
```
