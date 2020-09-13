import React, {Component} from 'react'
import {WebView, Platform} from 'react-native'
import {Button} from 'react-native-elements'
import {StackNavigator} from 'react-navigation'

const isAndroid= Platform.OS==='android'

const Maths = ({ navigation }) => (
    <WebView source={{uri:isAndroid?'file:///android_asset/widget/maths/index.html':'./widget/maths/index.html'}}/>
)

export {Maths}
