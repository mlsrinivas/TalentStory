import React from "react";
import {
  TouchableOpacity
} from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
} from "react-navigation";

import TalentStory from '../../Screens/HomeScreens/TalentStory'
import Researches from '../../Screens/HomeScreens/Researches'
import Chat from '../../Screens/HomeScreens/Chat'
import AddCommunity from '../../Screens/HomeScreens/AddCommunity/AddCommunity'
import TalentStoryStar from '../../Components/TalentStoryStar'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const bottomTabIcon = (options, icon) => {
  const { focused, tintColor } = options
  if(icon=="home"||icon=="squared-plus"){
      icon = <Entypo size={21} color={tintColor} name={icon} />
  }
  else if(icon=="message-processing"){
      icon = <MaterialCommunityIcons size={21} color={tintColor} name={icon} />
  }
  else if(icon=="user-friends"){
    icon = <FontAwesome5 size={21} color={tintColor} name={icon} />
  }
  else if(icon=="star"){
    return <TouchableOpacity><TalentStoryStar/></TouchableOpacity>
  }
  return icon
}

const TalenStoryStatck = createStackNavigator({
  TalentStories: {
    screen: TalentStory,
  },
})

const FriendStack = createStackNavigator({
  Researches: {
    screen: Researches,
  },
})

const ChatStack = createStackNavigator({
  Chating: {
    screen: Chat,
  },
})

const AddCommunityStack = createStackNavigator({
    AddCommunities: {
      screen: AddCommunity,
    },
  })

export const HomeScreenBottomTabs = createBottomTabNavigator({
    // Bottom tab navigation screens
    TalentStory: {
      screen: TalenStoryStatck,
      navigationOptions: {
        tabBarIcon: (options) => bottomTabIcon(options, "home"),
      }
    },
    Chat: {
      screen: ChatStack,
      navigationOptions: {
       tabBarIcon: (options) => bottomTabIcon(options, "message-processing")
     }
   },
    StarButton: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: (options) => bottomTabIcon(options, "star"),
        tabBarOnPress: () => {}
      }
    },
    Researches: { 
    screen: FriendStack,
    navigationOptions: {
      tabBarIcon: (options) => bottomTabIcon(options, "user-friends")
    }
  },
   AddCommunity: {
      screen: AddCommunityStack,
      navigationOptions: {
       tabBarIcon: (options) => bottomTabIcon(options, "squared-plus")
     }
   },   
  }
  , {
    tabBarOptions: {
      scrollEnabled: false,
      activeTintColor: '#0073C0',
      inactiveTintColor: "rgb(92,92,92)",
      showLabel: false,
      style: {}
    },
    initialRouteName: "TalentStory",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => { defaultHandler() }
    })
  }
)
