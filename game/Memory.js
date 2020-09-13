import React, {Component} from 'react'
import {WebView, Platform} from 'react-native'
import {Button} from 'react-native-elements'
import {StackNavigator} from 'react-navigation'

const isAndroid= Platform.OS==='android'

const Memory = ({ navigation }) => (
    <WebView source={{uri:isAndroid?'file:///android_asset/widget/memory/index.html':'./widget/memory/index.html'}}/>
)

export {Memory}
