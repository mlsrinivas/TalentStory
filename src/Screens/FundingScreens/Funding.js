import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import styles from '../../Styles/HomeStyles/TalentStoryStyles'
//import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 
import Feather from 'react-native-vector-icons/Feather'

export default class Funding extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    return (
        <View style={{flex:1}}>
          <View style={{flex:1,justifyContent:'center',marginLeft:15,marginRight:15}}>
            <Text style={{fontSize:23,color:'rgb(118,118,118)',fontWeight:'bold',marginBottom:'10%'}}>Are you a</Text>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center',borderColor:'rgb(118,118,118)',borderWidth: 0.5,borderRadius:12,width:Dimensions.get('window').width-30,height:'8.1%',marginBottom:'4%',
            shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 1,
          }}>
              <Text style={{fontSize:20,color:'rgb(118,118,118)',fontWeight:'bold'}}>Startup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center',borderColor:'rgb(118,118,118)',borderWidth: 0.5,borderRadius:12,width:Dimensions.get('window').width-30,height:'8.1%',
            shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 1,
          }}>
              <Text style={{fontSize:20,color:'rgb(118,118,118)',fontWeight:'bold'}}>Investor</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{alignItems:'center',justifyContent:'center',borderColor:'rgb(118,118,118)',borderWidth: 0.5,borderRadius:12,width:Dimensions.get('window').width-30,height:'8.1%',
            shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 1,
        bottom:'5%',
        marginLeft:15,
        marginRight:15
          }}>
              <Text style={{fontSize:15,color:'rgb(118,118,118)',fontWeight:'bold'}}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
      
    );
  }
}
//rgb(54,1,103) //blue
//rgb(118,118,118) //grey