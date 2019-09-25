import React from 'react'
import { View, Text, TouchableOpacity, Platform, Image, Dimensions } from 'react-native'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

export default class BottomTabsHeader extends React.Component {
    constructor(props) {
      super(props);
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    
    
    handleBackButtonClick() {
      console.log("game id is :::::",this.props.game_id)
      this.props.navigation.navigate("GameInfo",{game_id:this.props.game_id});
    }
    render() {
      return (
        <View style={{flex: 1,
            flexDirection:'row',
            alignItems: 'center',
            // position:'absolute',
            // left:0,
            // top:0,
            width:Dimensions.get('window').width,
            height:50,
            elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * 3 },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 3,
    backgroundColor: 'white',
            }}>
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
            <TouchableOpacity
              style={{ marginLeft: '8%' }}
              onPress={() => {
                this.props.navigation.openDrawer()
              }}
            >
              <MaterialCommunityIcons name="menu" size={26} color={"grey"} />
            </TouchableOpacity>
            <Text style={{color: 'gray', marginLeft: '8%', fontSize: 17}}>TalentStory</Text>
              
            </View>
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{ marginRight: '20%' }}
                          onPress={()=>this.props.navigation.navigate('Notifications')}>
        <Ionicons name="ios-notifications" size={24} color={"grey"} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: '20%' }} onPress={()=>this.props.navigation.navigate('SearchScreen')}>
        <Ionicons name="md-search" size={24} color={"grey"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Funding')}>
        <Image style={{tintColor: 'grey', width: 30, height: 30}} source={require('../../../../assets/funding.png')} />
        </TouchableOpacity>
              </View>
            </View>
        </View> 
      );
    }
  }
  

// export const NavigationOptions = (screenName, category) => {
//   const { navigation } = options
//   return {
//     header: (category == "homeScreen" && null),
//     headerTitle: (
//       <View style={{ marginBottom: Platform.OS === "ios" ? 30 : 25, marginLeft:5 }}>
//         <Text
//           style={{
//             color: "gray",
//             position: "absolute",
//             right: Platform.OS === "ios" ? '20%' : null,
//             //fontWeight: "bold",
//             fontSize: 17
//           }}>
//           {screenName}
//         </Text>
//       </View>
//     ),
//     headerLeft: (
//       ( category != "sideMenu" && <TouchableOpacity
//         style={{ marginLeft: 15 }}
//         onPress={() => {
//           navigation.openDrawer()
//         }}
//       >
//         <MaterialCommunityIcons name="menu" size={26} color={"grey"} />
//       </TouchableOpacity>)
//     ),
//     headerRight: (
//       ( category != "sideMenu" && <View
//         style={{
//           marginRight: 18,
//           flexDirection: "row",
//           alignItems: "center"
//         }}
//       >
//         <TouchableOpacity style={{ marginRight: 28 }}
//                           onPress={()=>navigation.navigate('Notifications')}>
//         <Ionicons name="ios-notifications" size={24} color={"grey"} />
//         </TouchableOpacity>
//         <TouchableOpacity style={{ marginRight: 28 }} onPress={()=>navigation.navigate('SearchScreen')}>
//         <Ionicons name="md-search" size={20} color={"grey"} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>navigation.navigate('Funding')}>
//         <Image style={{tintColor: 'grey', width: 30, height: 30}} source={require('../../../../assets/funding.png')} />
//         </TouchableOpacity>
//       </View>)
//     ),
//     // headerBackground: (
//     //   <LinearGradient
//     //     colors={["#001a33", "#004f99"]}
//     //     style={{ flex: 1 }}
//     //     start={{ x: 0, y: 0 }}
//     //     end={{ x: 1, y: 0 }}
//     //   />
//     // ),
//     headerBackTitle: null,
//     headerTintColor: "black",
//     tabBarOnPress: ({ navigation, defaultHandler }) => {
//       navigation.state.params.onTabFocus();
//       defaultHandler();
//     }
//   }
// }