import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Screen3 = ({ navigation, route }) => {
  const { shop } = route.params
  useEffect(() => {
    navigation.setOptions({
      title: 'Drinks',
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
    <View style={{ flex: 1, alignItems: 'center' }}>
      <FlatList
        data={shop.product}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            width: '95%',
            padding: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 8,
            alignItems: 'center'
          }}>
            <Image
              source={require('../Data/Image5pr.png')}
              style={{
                width: 60,
                height: 60,
                marginRight: 20
              }}
            />
            <View style={{
              width: 180
            }}>
              <Text>
                {item.name}
              </Text>
              <Text>
                {item.price}
              </Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: 60
            }}>
              <Pressable>
                <Image
                  source={require('../Data/minus.png')}
                  style={{ width: 20, height: 20 }}
                />
              </Pressable>
              <Pressable>
                <Image
                  source={require('../Data/plus.png')}
                  style={{ width: 20, height: 20 }}
                />
              </Pressable>
            </View>
          </View>
        )}
        style ={{
          
        }}
      />
    <Pressable
      onPress={()=> navigation.navigate('Screen4')}
        style={{
            width : '90%',
            height : 50,
            backgroundColor : 'orange',
            justifyContent:'center',
            alignItems : 'center',
            borderRadius : 8
        }}
      >
        <Text style={{
            color : 'white',
            fontSize : 20,
            fontWeight : 700
        }}>GO TO CART</Text>
      </Pressable>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({})