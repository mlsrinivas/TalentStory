import React from 'react'
import { View, TextInput, Text, TouchableOpacity,ScrollView } from 'react-native'


export default class CreateResearch extends React.Component{
 
    render(){
        return(
            <ScrollView>
            <View style={{ flex:1, flexDirection:"column" }}>
                <TextInput style={{ marginTop:"3%", marginLeft:"3%", marginRight:"3%", height:60, width:"94%", borderColor:"#D3D3D3", borderWidth:1, paddingHorizontal:"5%", borderRadius:4 }} 
                           placeholder="Research Name"/>
                <TextInput style={{ marginTop:"3%", marginLeft:"3%", marginRight:"3%", height:40, width:"94%", borderColor:"#D3D3D3", borderWidth:1, paddingHorizontal:"5%", borderRadius:4 }} 
                           placeholder="Duration"/>
                <TextInput style={{ marginTop:"3%", marginLeft:"3%", marginRight:"3%", height:100, width:"94%", borderColor:"#D3D3D3", borderWidth:1, paddingHorizontal:"5%", borderRadius:4 }} 
                           placeholder="Description"/>
                <TextInput style={{ marginTop:"3%", marginLeft:"3%", marginRight:"3%", height:60, width:"94%", borderColor:"#D3D3D3", borderWidth:1, paddingHorizontal:"5%", borderRadius:4 }} 
                           placeholder="Qualification Required"/>
                <TextInput style={{ marginTop:"3%", marginLeft:"3%", marginRight:"3%", height:60, width:"94%", borderColor:"#D3D3D3", borderWidth:1, paddingHorizontal:"5%", borderRadius:4 }} placeholder="Skills Required"/>
                <View style={{ flexDirection:"row",justifyContent:"space-between",marginLeft:"3%",marginRight:"3%" }}>
                <TextInput style={{ marginTop:"3%", height:32, width:"47%", borderColor:"#D3D3D3", borderWidth:1, paddingHorizontal:"5%", borderRadius:4 }} placeholder="Cost"/>
                <TextInput style={{ marginTop:"3%", height:32, width:"47%", borderColor:"#D3D3D3", borderWidth:1, paddingHorizontal:"5%", borderRadius:4 }} placeholder="Members"/>
                </View>
                <TextInput style={{ marginTop:"3%", marginLeft:"3%", marginRight:"3%", height:70, width:"94%", borderColor:"#D3D3D3", borderWidth:1, paddingHorizontal:"5%", borderRadius:4 }} placeholder="Technology Partners(i.e. Company names)"/>
                <Text style={{ color:'#0073C0',marginTop:"3%",textAlign:"center",fontSize:14,fontWeight:"bold" }}>Deadline to apply</Text>
                <View style={{ marginTop:"3%", marginLeft:"3%", marginRight:"3%", height:40, width:"94%", borderColor:"#D3D3D3", borderWidth:1, borderRadius:4,backgroundColor:"#f5f5f5" }}/>
                <TouchableOpacity style={{ marginTop:"6%",backgroundColor:'#0073C0', alignSelf:"center", height:40,width:"40%",borderRadius:12,marginBottom:"5%"  }}>
                    <Text style={{ color:"#fff", textAlign:"center",fontSize:14,fontWeight:'bold',marginTop:"6%" }}>Submit</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
        )
    }
}