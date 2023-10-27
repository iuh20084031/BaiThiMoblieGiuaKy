import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { data } from './data'

const Screen2 = ({ navigation, route }) => {
    const [shops, setShops] = useState(data)

    useEffect(() => {
        navigation.setOptions({
            title: 'Shop Near Me',
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
                data={shops}
                renderItem={({ item }) => (
                    <Pressable 
                        onPress={() =>
                            navigation.navigate('Screen3', {shop : item})
                        }
                    >
                        <View style={{ width: '90%', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../Data/image5.jpeg')}
                                style={{
                                    width: 300,
                                    height: 100,
                                    borderRadius: 8
                                }}
                            />
                            <View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    width: 300,
                                    alignItems: 'center',
                                    margin: 10
                                }}>
                                    <Image
                                        source={item.status ? require('../Data/tick.png') : require('../Data/material-symbols_lock.png')}
                                        style={{
                                            width: 10,
                                            height: 10,
                                        }}
                                    />
                                    {item.status ? <Text style={{ color: 'green', fontSize: 15 }}>Accepting Orders</Text> : <Text style={{ color: 'red', fontSize: 15 }}>Tempory Urravaiable</Text>}
                                    <Image
                                        source={require('../Data/clock.png')}
                                        style={{
                                            width: 10,
                                            height: 10,
                                        }}
                                    />
                                    <Text style={{ color: 'violet', fontSize: 15 }}>5-10 minutes</Text>
                                    <Image
                                        source={require('../Data/location.png')}
                                        style={{
                                            width: 10,
                                            height: 10,
                                        }}
                                    />
                                </View>
                                <Text style={{ fontWeight: 700, fontSize: 17, paddingLeft: 10 }}>{item.name}</Text>
                                <Text style={{ fontSize: 15, paddingLeft: 10, color: 'gray' }}>{item.location}</Text>
                            </View>

                        </View>
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({})