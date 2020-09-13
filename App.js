import React, {Component} from 'react'
import {View, Platform,ImageBackground} from 'react-native'
import {Button} from 'react-native-elements'
import {StackNavigator} from 'react-navigation'
import {Memory} from './game/Memory.js'
import {Addition} from './game/Addition.js'
import {Maths} from './game/Maths.js'

const Index = ({ navigation }) => (
  <ImageBackground style={{width: '100%',height: '100%',flex: 1}}
                   resizeMode='cover'
                   source={require('./game/background.jpg')}>

    <View style={{flex: 1, justifyContent: 'center',marginBottom: 220}}>

    <ImageBackground style={{width: 200,height: 100, alignSelf:'center'}}
                     source={require('./game/PRAXI.png')}
    />

    <Button
      buttonStyle={{marginVertical: 20}}
      title={'Memory'}
      onPress={() => navigation.navigate('Memory')}
    />

    <Button
      buttonStyle={{marginVertical: 20}}
      title={'Addition'}
      onPress={() => navigation.navigate('Addition')}
    />

    <Button
      buttonStyle={{marginVertical: 20}}
      title={'Math Max'}
      onPress={() => navigation.navigate('Maths')}
    />

  </View>
  </ImageBackground>

)

const RouteConfigs = {
  Index: {
    screen: Index
  },
  Memory: {
    screen: Memory
  },
  Addition: {
    screen: Addition
  },
  Maths: {
    screen: Maths
  }
}

const StackNavigatorConfig = {
  headerMode: 'none',
  mode: Platform.OS === 'ios' ? 'modal' : 'card'
}

const MainScreen = StackNavigator(RouteConfigs, StackNavigatorConfig)

export default MainScreen
