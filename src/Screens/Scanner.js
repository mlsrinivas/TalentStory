import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default class Scanner extends React.Component{
    render(){
        return(
            <View style={{ width:'100%',height:'100%' }}>
                <Text style={{ color:'gray',marginTop:'2%',alignSelf:'center',fontSize:17 }}>Scan and view your details</Text>
                <Image source={require('../../assets/Dense-QR-Code.png')}
                       style={{ marginTop:'30%',height:250,width:250,alignSelf:'center' }} />
                <View style={{ flex:1,justifyContent: 'flex-end' }}>
                <TouchableOpacity
                                style={{ width:'100%',height:55,backgroundColor:'#0073C0' }}>
                <Text style={{color:'white', fontSize: 16,marginHorizontal:125,marginTop:'4%',fontWeight:'bold' }}>SCAN OTHERS</Text>
                </TouchableOpacity>
                </View>    
            </View>
        );
    }
}