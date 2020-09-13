import React, {Component} from 'react'
import {WebView, Platform} from 'react-native'
import {Button} from 'react-native-elements'
import {StackNavigator} from 'react-navigation'

const isAndroid= Platform.OS==='android'

const Addition = ({ navigation }) => (
    <WebView scrollEnabled={false} source={{uri:isAndroid?'file:///android_asset/widget/addition/index.html':'./widget/addition/index.html'}}/>
)

export {Addition}
