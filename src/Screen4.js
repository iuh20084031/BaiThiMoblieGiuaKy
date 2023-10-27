import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Screen4 = ({navigation, route}) => {
  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => (
        <View>
          <Pressable

          >
            <Image
              source={require('../Data/ic_outline-search.png')}
              style={{
                width: 25,
                height: 25
              }}
            />
          </Pressable>
        </View>
      )
    })
  }, [navigation])
  return (
    <View>
      <Text>Screen4</Text>
    </View>
  )
}

export default Screen4

const styles = StyleSheet.create({})