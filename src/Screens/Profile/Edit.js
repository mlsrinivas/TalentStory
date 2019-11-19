import React from 'react'
import { View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default class Edit extends React.Component{
    render(){
        return(
           <ScrollView>
           <View style={{ flex:1, marginLeft:'2%',marginRight:'2%' }}>
              
              <View style={{ flexDirection:'row', marginTop: 20 }}>
              <Text style={{ fontWeight:'bold',fontSize:16 }}> Personal Details</Text>
              <EvilIcons name='user' size={24} color='#FF0000' style={{ margin:'1%',marginLeft:'55%' }}/>
              </View>
             
              <TextInput style={ styles.inputstyle1 } placeholder='First Name'/>
              <TextInput style={ styles.inputstyle2 } placeholder='Last Name'/>
              <TextInput style={ styles.inputstyle2 } placeholder='Date of Birth'/>
              <TextInput style={ styles.inputstyle2 } placeholder='Gender'/>
              <TextInput style={ styles.inputstyle2 } placeholder='Email'/>
             <View style={{ flexDirection:'row',justifyContent:'space-between',marginTop:'2%' }}>
              <TextInput style={{ width:'45%',height:35,borderColor:'#D3D3D3',borderWidth:1,paddingHorizontal:10 }} placeholder='Mobile'/>
              <TextInput style={{ width:'45%',height:35,borderColor:'#D3D3D3',borderWidth:1,paddingHorizontal:10 }} placeholder='Location'/>
              </View>
              <TextInput style={ styles.inputstyle2 } placeholder='College'/>
              <TextInput style={ styles.inputstyle2 } placeholder='School'/>
              <View style={{ flexDirection:'row', marginTop:  20 }}>
                  <Text style={{ fontSize:16,fontWeight:'bold' }}>My Interests</Text>
                  <EvilIcons name='user' color='#FF0000' size={24} style={{ margin:'1%',marginLeft:'65%' }}/>
               </View>
               <TextInput style={ styles.workinput } placeholder='Work'/>
               <TextInput style={ styles.inputstyle2 } placeholder='About Me'/>
               <TextInput style={ styles.inputstyle2 } placeholder='Personal Skills'/>
               <TouchableOpacity style = {{height:35, width:120, borderRadius:12, backgroundColor:'#0073C0',alignSelf:'center', justifyContent: 'center', marginTop: 20, marginBottom:20}}>
                   <Text style = {{ color:'white', alignSelf:'center', fontSize:14,fontWeight:'bold' }}>Submit</Text>
                   </TouchableOpacity>
              </View>
       </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
inputstyle1:{
    height:35,
    borderColor:'#D3D3D3',
    borderWidth:1,
    width:'100%',
    borderRadius:3,
    paddingHorizontal:10,
    marginTop:20
},
inputstyle2:{
    height:35,
    borderColor:'#D3D3D3',
    borderWidth:1,
    width:'100%',
    borderRadius:3,
    paddingHorizontal:10,
    marginTop: 7
},
workinput:{
    height:35,
    borderColor:'#D3D3D3',
    borderWidth:1,
    width:'100%',
    borderRadius:3,
    paddingHorizontal:10,
    marginTop: 20
}
})