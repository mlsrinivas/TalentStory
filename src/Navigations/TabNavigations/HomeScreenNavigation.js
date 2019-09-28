import React from "react";
import {
  Image,
} from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
} from "react-navigation";

import { NavigationOptions } from '../../Components/ReUsableComponents/HomeScreenHeader/HomeScreenHeader'

import TalentStory from '../../Screens/HomeScreens/TalentStory'
import Friend from '../../Screens/HomeScreens/Friend'
import Chat from '../../Screens/HomeScreens/Chat'
import AddCommunity from '../../Screens/HomeScreens/AddCommunity'
import TalentStoryStar from '../../Components/TalentStoryStar'

import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const bottomTabIcon = (options, icon) => {
  const { focused, tintColor } = options
  if(icon=="home"||icon=="squared-plus"){
      icon = <Entypo size={21} color={tintColor} name={icon} />
  }
  else if(icon=="user-friends"){
      icon = <FontAwesome5 size={21} color={tintColor} name={icon} />
  }
  else if(icon=="message-processing"){
      icon = <MaterialCommunityIcons size={21} color={tintColor} name={icon} />
  }
  else if(icon=="star"){
    return <TalentStoryStar />
  }
  //console.log("tintColor is",tintColor)
  return icon
}

const TalenStoryStatck = createStackNavigator({
  TalentStories: {
    screen: TalentStory,
    //navigationOptions: (options) => NavigationOptions(options, "TalentStory", "talentStory")
  },
})

const FriendStack = createStackNavigator({
  Friends: {
    screen: Friend,
    //navigationOptions: (options) => NavigationOptions(options, "Friends", "friends")
  },
})

const ChatStack = createStackNavigator({
  Chating: {
    screen: Chat,
    //navigationOptions: (options) => NavigationOptions(options, "Chat", "chat")
  },
})

const AddCommunityStack = createStackNavigator({
    AddCommunities: {
      screen: AddCommunity,
      //navigationOptions: (options) => NavigationOptions(options, "Add Community", "addCommunity")
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
    Friends: { 
      screen: FriendStack,
      navigationOptions: {
        tabBarIcon: (options) => bottomTabIcon(options, "user-friends")
      }
    },
    StarButton: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: (options) => bottomTabIcon(options, "star"),
        tabBarOnPress: () => {}
      }
    },
    Chat: {
      screen: ChatStack,
      navigationOptions: {
       tabBarIcon: (options) => bottomTabIcon(options, "message-processing")
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
      inactiveTintColor: "grey",
      showLabel: false,
    //   labelStyle: {
    //     fontSize: 12
    //   },
      style: {}
    },
    // tabBarComponent: props => <TalentStoryStar {...props}/>,
    // tabBarPosition: "bottom",
    // animationEnabled: true,
    // swipeEnabled: true,
    initialRouteName: "TalentStory",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => { defaultHandler() }
    })
  }
)
