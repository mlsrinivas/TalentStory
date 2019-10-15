import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../Styles/StartupsStyles'
import Entypo from 'react-native-vector-icons/Entypo'
import Dash from 'react-native-dash';

export default class Startups extends React.Component{
  
  constructor(props){
      super(props);
      this.state = {
          startUpList:[ {},{},{},{},{},{},{} ] 
      }
  }
    render(){
        return(
            <ScrollView>
            <View style={{ flex:1,flexDirection: "row",backgroundColor:'#f2f2f2' }}>
                <View style={{ borderStyle: 'dotted', borderWidth: 1, borderRadius: 1,marginLeft:'3%' }}/>
                {/* <Dash style={{ width:1,height:'100%',flexDirection:'column',marginLeft:'3%' }}/> */}
                <View style={{ flexDirection:'column' }}>
                { this.state.startUpList.map((lists,index) => (
                        <View key={index} style={styles.cardviewstyle}>
                            <View style={{ flexDirection:'row' }}>
                                <View style={styles.circleStyle}>
                                    <Image style={styles.imageCircle} source={require('../../assets/jionedcommunity.png')}/>
                                </View>
                                    <View style={{ flexDirection:'column' }}>
                                        <TouchableOpacity>
                                        <Entypo size={18} color='rgb(176, 171, 171)' style={{ marginLeft:'82%',marginTop:'2%',color:'black' }} name="dots-three-vertical"/> 
                                        </TouchableOpacity>
                                        <Text style={{ marginLeft:'8%', fontWeight:'bold',fontSize:16 }}>Cyber Security</Text>
                                            <View style={{ height:40,width:'75%',borderRadius:4,borderColor:'#D3D3D3',borderWidth:1,marginLeft:'8%',fontSize:10,marginTop:'2%' }}>
                                            <Text style={{ color:'#D3D3D3',fontSize:14,marginLeft:'3%',marginBottom:'4%',marginTop:'1%' }}>Science&techonology,start-ups,MIME & entrepreneurship </Text> 
                                            </View>
                                            <View style={{ height:25,width:'30%',borderRadius:4,borderColor:'#D3D3D3',borderWidth:1,marginLeft:'8%',fontSize:10,marginTop:'2%' }}>
                                            <Text style={{ fontWeight:'bold',fontSize:12,alignSelf:'center',marginTop:'2.5%' }}># hyderbad</Text> 
                                            </View>                                         
                                    </View>
                            </View>
                         </View>
                ))}
            </View>
            </View>
            </ScrollView>
        )
    }
}