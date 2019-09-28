import React from 'react'
import { View, Text, TouchableOpacity, Platform, Image, Dimensions, TextInput } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"

const container = {
  elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * 5 },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 5,
}

export default class BottomTabsHeader extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        text: '',
        autoFocus: true
      }
      this.onChangeText = this.onChangeText.bind(this)
    }
   
    onChangeText(text) {
      this.setState({text:text})
    }
   
    render() {
      return (
        <View style={[{
                flexDirection:'row',
                alignItems: 'center',
                width:Dimensions.get('window').width,
                height:50,  
                backgroundColor: 'white',
                },this.props.search == false ? container:{}
        ]}>
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
              {this.props.search == false && 
              <TouchableOpacity
                style={{ marginLeft: '10%', width: 28 }}
                onPress={() => {
                  this.props.navigation.openDrawer()
                }}>
                <MaterialCommunityIcons name="menu" size={27} color={"rgb(92,92,92)"} />
              </TouchableOpacity>}
              {this.props.search == true && 
              <TouchableOpacity
                style={{ marginLeft: '10%', width: 34 }}
                onPress={() => {
                  this.props.updateParentComponent(false)
                }}>
                <Ionicons name={Platform.OS == 'ios' ? "ios-arrow-back": "md-arrow-back"} size={29} color={"rgb(92,92,92)"} />
              </TouchableOpacity>}
              <View style={{marginLeft: '9%', padding: Platform.OS == 'ios' ? 2 : 0, marginBottom: Platform.OS == 'ios' ? null : 4, flex: 1, width: '100%' }}>
                {this.props.search == false && <Text style={{color: 'rgb(92,92,92)', fontSize: 17}}>{this.props.screenName}</Text>}
                {this.props.search == true && 
                  <TextInput
                    style={{  color: 'rgb(92,92,92)', fontSize: 19 }}
                    onChangeText={text => this.onChangeText(text)}
                    value={this.state.text}
                    placeholder='Search'
                    autoFocus={this.state.autoFocus}
                    selectionColor={'rgb(92,92,92)'}
                  />
                }
              </View>
            </View>
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <View style={{flexDirection: 'row'}}>
                {this.props.search == true && this.state.text.length > 0 && 
                <TouchableOpacity 
                  style={{ marginRight: '22%' }}
                  onPress={()=>this.setState({text:'',autoFocus: true})}>
                  <Entypo name="cross" size={26} color={"rgb(92,92,92)"} />
                </TouchableOpacity>}
                <TouchableOpacity 
                  style={{ marginRight: '22%' }}
                  onPress={()=>this.props.navigation.navigate('Notifications')}>
                  <Ionicons name="ios-notifications" size={26} color={"rgb(92,92,92)"} />
                </TouchableOpacity>
                {this.props.search == false && 
                <TouchableOpacity style={{ marginRight: '20%', width: 27}} onPress={()=>this.props.updateParentComponent(true)}>
                  <Ionicons name="md-search" size={26} color={"rgb(92,92,92)"} />
                </TouchableOpacity>}
                <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Funding')}>
                  <Image style={{tintColor: 'rgb(92,92,92)', width: 30, height: 30}} source={require('../../../../assets/funding.png')} />
                </TouchableOpacity>
              </View>
            </View>
        </View> 
      );
    }
  }
  