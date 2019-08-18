import React from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'

import 
    Icon
   from "react-native-vector-icons/MaterialCommunityIcons"


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
        <Icon name="menu" size={28} color={"grey"} />
      </TouchableOpacity>
    ),
    // headerRight: (
    //   <View
    //     style={{
    //       marginRight: 20,
    //       flexDirection: "row",
    //       alignItems: "center"
    //     }}
    //   >
    //     <TouchableOpacity style={{ marginRight: 20 }}>
    //       <EvilIcons name="search" size={28} color={"white"} />
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => navigation.navigate("WriteReview", { category: category })}>
    //       <Ionicons name="ios-add" size={28} color={"white"} />
    //     </TouchableOpacity>
    //   </View>
    // ),
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