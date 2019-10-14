import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import {
  HeaderBackButton
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons"
   
export const NavigationOptions = (options, screenName, category) => {
  const { navigation } = options
  return {
    header: (category == "homeScreen" && null),
    headerRight: (
      ( category != "sideMenu" && 
        <View
          style={{
            marginRight: 18,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <TouchableOpacity style={{ marginRight: 28 }}
                            onPress={()=>navigation.navigate('Notifications')}>
            <Ionicons name="ios-notifications" size={24} color={"grey"} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 28 }} onPress={()=>navigation.navigate('SearchScreen')}>
            <Ionicons name="md-search" size={20} color={"grey"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Startups')}>
            <Image style={{tintColor: 'grey', width: 20, height: 20 }} source={require('../../../../assets/scholarship.png')} />
          </TouchableOpacity>
        </View>
      )
    ),
    headerLeft: (
      <HeaderBackButton
        title={screenName}
        titleStyle={{ fontSize: 17, marginLeft: 10 }}
        tintColor="rgb(92,92,92)"
        backTitleVisible={true}
        onPress={() => navigation.goBack()}
      />
    ),
    headerBackTitle: null,
    headerTintColor: "rgb(92,92,92)",
  }
}