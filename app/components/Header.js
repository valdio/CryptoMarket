import React from 'react'
import {Header, Left, Body, Right, Button, Title} from 'native-base'
import {Image, StatusBar, StyleSheet, View} from 'react-native'
import {DEVICE} from '../lib/device'
import {COLORS, Typography} from '../template'

/**
 * Header HOC
 * Higher Order Component for rendering app header.
 * @title Text title of the header
 * @image Image icon in case the the header is a image header
 * @isTextTitle Flag to set the header type, Icon header or text header
 * @leftImg Icon for the left header button
 * @rightImg Icon for the right header button
 * @rightText Text for the right header button
 * @leftOnPress On Press event listener for the left button
 * @rightOnPress On Press event listener for the right button
 * @background Background color to set to the header
 * @bgStyle Extra styles for the background
 * @backgroundImg Background image to set to the header
 */
export default AppHeader = ({title = '', image, isTextTitle = true, leftImg, rightImg, rightText, leftOnPress, rightOnPress, background, bgStyle, backgroundImg} = props) =>
  <Header style={[styles.container, {backgroundColor: background}, bgStyle ? bgStyle : {}]}>
    {background && <StatusBar backgroundColor={background}/>}
    {backgroundImg &&
    <Image style={{position: 'absolute', resizeMode: 'cover', width: DEVICE.WIDTH}} source={backgroundImg}/>}
    <Left style={styles.left}>
      {leftImg &&
      <Button transparent onPress={leftOnPress}>
        <Image source={leftImg} style={styles.leftIcon}/>
      </Button>
      }
    </Left>
    <Body style={styles.body}>
      {isTextTitle ? <Title style={styles.title}>{title}</Title> : <Image source={image} style={styles.logoIcon}/>}
    </Body>
    <Right style={styles.right}>
      {(rightImg || rightText) &&
      <Button transparent onPress={rightOnPress}>
        {rightText ? <Title style={styles.title}>{rightText}</Title> :
          <Image source={rightImg} style={styles.rightIcon}/>}
      </Button>}
    </Right>
  </Header>

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.TRANSPARENT,
    elevation: 0,
    shadowOpacity: 0,
    shadowOffset: {height: 0, width: 0},
    shadowRadius: 0,
    borderBottomWidth: 0
  },
  leftIcon: {
    resizeMode: 'contain',
    width: 25,
    height: 16
  },
  rightIcon: {
    resizeMode: 'contain',
    width: 23,
    height: 23
  },
  left: {
    // flex: 0.8// to center text in header
    flex: 1
  },
  right: {
    flex: 1
  },
  body: {
    flex: 1,
    flexGrow: 4
    // alignItems: 'center',
    // justifyContent:'center'
  },
  title: {
    ...Typography.appHeader,
    color: COLORS.WHITE
  },
  logoIcon: {
    alignSelf: 'center'
    // width: 210,
    // height: 28
  }
})
