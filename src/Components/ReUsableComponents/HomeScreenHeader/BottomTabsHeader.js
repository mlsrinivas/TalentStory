import React from 'react'
import { View, Text, TouchableOpacity, Platform, Image, Dimensions, TextInput } from 'react-native'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
const container = {
  elevation: 3,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 0.5 * 3 },
  shadowOpacity: 0.3,
  shadowRadius: 0.8 * 3,
}
export default class BottomTabsHeader extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        text: '',
        autoFocus: true
      }
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
      this.onChangeText = this.onChangeText.bind(this)
    }
   
    onChangeText(text) {
      this.setState({text:text})
    }
    handleBackButtonClick() {
      console.log("game id is :::::",this.props.game_id)
      this.props.navigation.navigate("GameInfo",{game_id:this.props.game_id});
    }
    render() {
      return (
        <View style={[{
            flexDirection:'row',
            alignItems: 'center',
            // position:'absolute',
            // left:0,
            // top:0,
            width:Dimensions.get('window').width,
            height:50,
            
    backgroundColor: 'white',
    
            },this.props.search == false ? container:{}]}>
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
            {this.props.search == false && <TouchableOpacity
              style={{ marginLeft: '8%' }}
              onPress={() => {
                this.props.navigation.openDrawer()
              }}
            >
             <MaterialCommunityIcons name="menu" size={26} color={"gray"} />
             
            </TouchableOpacity>}
            {this.props.search == true && <TouchableOpacity
              style={{ marginLeft: '8%' }}
              onPress={() => {
                this.props.updateParentComponent(false)
              }}
            >
              <Ionicons name={Platform.OS == 'ios' ? "ios-arrow-back": "md-arrow-back"} size={26} color={"gray"} />
            </TouchableOpacity>}
            <View style={{marginLeft: '10%', padding: Platform.OS == 'ios' ? 2 : 0, marginBottom: Platform.OS == 'ios' ? null : 4, flex: 1, width: '100%' }}>
            {this.props.search == false && <Text style={{color: 'gray', fontSize: 17}}>{this.props.screenName}</Text>}
            {this.props.search == true && <TextInput
      style={{  color: 'gray', fontSize: 17 }}
      onChangeText={text => this.onChangeText(text)}
      value={this.state.text}
      placeholder='Search'
      autoFocus={this.state.autoFocus}
      selectionColor={'black'}
    />}
            </View>
            
            </View>
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <View style={{flexDirection: 'row'}}>
              {this.props.search == true && this.state.text.length > 0 && <TouchableOpacity style={{ marginRight: '22%' }}
                          onPress={()=>this.setState({text:'',autoFocus: true})}>
        <Entypo name="cross" size={24} color={"grey"} />
        </TouchableOpacity>}
              <TouchableOpacity style={{ marginRight: '22%' }}
                          onPress={()=>this.props.navigation.navigate('Notifications')}>
        <Ionicons name="ios-notifications" size={24} color={"grey"} />
        </TouchableOpacity>
        {this.props.search == false && <TouchableOpacity style={{ marginRight: '22%' }} onPress={()=>this.props.updateParentComponent(true)}>
        <Ionicons name="md-search" size={24} color={"grey"} />
        </TouchableOpacity>}
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Funding')}>
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