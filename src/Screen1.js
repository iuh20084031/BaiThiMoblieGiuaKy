import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen1 = ({navigation, route}) => {
  return (
    <View style={{
        flex : 1,
        alignItems : 'center'
    }}>
      <Text style={{
        fontWeight : 700,
        fontSize : 25,
        margin : 30
      }}>Welcome to Cafe World</Text>
      <Image 
        source={require('../Data/image5.jpeg')}
        style={{
            width : 250,
            height : 100,
            borderRadius : 8,
            margin : 30
        }}
      />
      <Image 
        source={require('../Data/image5.jpeg')}
        style={{
            width : 250,
            height : 100,
            borderRadius : 8,
            margin : 30
        }}
      />
      <Image 
        source={require('../Data/image5.jpeg')}
        style={{
            width : 250,
            height : 100,
            borderRadius : 8,
            margin : 30
        }}
      />

      <Pressable
      onPress={()=> navigation.navigate('Screen2')}
        style={{
            width : '90%',
            height : 50,
            backgroundColor : 'blue',
            justifyContent:'center',
            alignItems : 'center',
            borderRadius : 8
        }}
      >
        <Text style={{
            color : 'white',
            fontSize : 20,
            fontWeight : 700
        }}>GET STATED</Text>
      </Pressable>

    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({})