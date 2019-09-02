import React from 'react'
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
   
export const NavigationOptions = (options, screenName, category) => {
  const { navigation } = options
  return {
    headerTitle: (
      <View style={{ marginBottom: Platform === "ios" ? 30 : 25, marginLeft:5 }}>
        <Text
          style={{
            color: "gray",
            position: "absolute",
            right: Platform.OS === "ios" ? 20 : null,
            //fontWeight: "bold",
            fontSize: 17
          }}>
          {screenName}
        </Text>
      </View>
    ),
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 15 }}
        onPress={() => {
          navigation.openDrawer()
        }}
      >
        <MaterialCommunityIcons name="menu" size={26} color={"grey"} />
      </TouchableOpacity>
    ),
    headerRight: (
      <View
        style={{
          marginRight: 18,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <TouchableOpacity style={{ marginRight: 25 }}>
        <Ionicons name="ios-notifications" size={24} color={"grey"} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 25 }}>
        <Ionicons name="md-search" size={20} color={"grey"} />
        </TouchableOpacity>
        <TouchableOpacity >
        <Image style={{tintColor: 'grey', width: 30, height: 30}} source={require('../../../../assets/funding.png')} />
        </TouchableOpacity>
      </View>
    ),
    // headerBackground: (
    //   <LinearGradient
    //     colors={["#001a33", "#004f99"]}
    //     style={{ flex: 1 }}
    //     start={{ x: 0, y: 0 }}
    //     end={{ x: 1, y: 0 }}
    //   />
    // ),
    headerBackTitle: null,
    headerTintColor: "black",
    tabBarOnPress: ({ navigation, defaultHandler }) => {
      navigation.state.params.onTabFocus();
      defaultHandler();
    }
  }
}