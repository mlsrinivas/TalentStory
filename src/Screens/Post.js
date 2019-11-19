import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'native-base'
import  FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Post extends React.Component{
//    static navigationOptions = ({ navigation }) => ({
//       return(
//       headerright:( 

//       )
//       )
//   })
render(){
    return(
    <View style={{ width:'100%', height:'100%' }}>
    <ScrollView> 
   <View style={{ flex:1,flexDirection: 'column'}}>
   <TouchableOpacity style={{ flex:1,flexDirection:'row' }}>
      <Image source={require('../../assets/QR-Code.png')}
             style={styles.profileimage}/>
              <View style={styles.profilenamesview}>
                  <Text style={{ fontSize:17,color:'#808080',fontWeight:'bold'}}>User Name</Text>
                  <TouchableOpacity style={{ borderRadius:12, backgroundColor:'white',borderColor:'#0073C0', borderWidth:1, marginTop:"3%", width:90 }}>
                   <View style={{ flexDirection:'row' }}>
                   <Icon name='ios-add' style={{ fontSize:18,color:'#0073C0',paddingLeft:6 }}/>
                  <Text style={{ fontSize:10,color:'#0073C0',fontWeight:'bold',paddingLeft:6,marginTop:2 }}>Add Location</Text>
                   </View>
                  </TouchableOpacity>
              </View>
         </TouchableOpacity>
         </View>
         <View style={{ marginTop:'6%', paddingLeft:'4%',paddingRight:'4%'}}>
            <TextInput style={{ height:520, width:"100%",borderColor:"white",borderWidth:2,fontSize:16 }}
                       editable={true}
                       multiline={true}
                       placeholderTextColor = 'gray'
                       placeholder='Share your thoughts with friends'
                       textAlignVertical={'top'}/>
           </View>
      </ScrollView>
      <View style={{ justifyContent:'flex-end', flex:1 }}>
            <View style={{ width:'100%',backgroundColor:'#fff',height:50,borderTopColor:'#f2f2f2',borderTopWidth:2 }}>
            <View style={{ margin:'3%',flexDirection:'row' }}>
            <FontAwesome5 size={18} name='user-tag' color='#0073C0' />
            <MaterialCommunityIcons size={24} name='image' color='#0073C0' style={{marginLeft:'10%'}}/>
            <MaterialCommunityIcons size={24} name='library-video' color='#0073C0' style={{marginLeft:'10%'}}/>
            <MaterialIcons size={24} name='picture-as-pdf' color='#0073C0' style={{marginLeft:'10%'}}/>
            <MaterialCommunityIcons size={24} name='file-export' color='#0073C0' style={{marginLeft:'10%'}}/>
            </View>
            </View>
      </View>
      </View> 
 );
}
}
const styles = StyleSheet.create({
 profileimage:{
   borderRadius:22.5,
   height:40,
   width:40,
   marginLeft:'4%',
   marginTop:'5%'
},
profilenamesview:{
   flexDirection:'column',
   marginLeft:'6%', 
   marginTop:'3%'
}
});

