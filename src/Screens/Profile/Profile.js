import React  from 'react'
import { View,
        ScrollView,
        TextInput,
        Text,
        colors,
        StyleSheet,
        Image, 
        TouchableOpacity,  
        ImageBackground,
        Dimensions } from 'react-native'
import styles from '../../Styles/Profile/Profile'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default class Profile extends React.Component{

    render(){
        return(
            // <View>
            
            
            
        <View style = {{ flex:1, backgroundColor:'#BeBeBe' }}>
        
                <TouchableOpacity style={{position: 'absolute', bottom: 20, right:20}}>
                <View style={{backgroundColor:'#00897D', width:60, height:60, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                    <MaterialCommunityIcons name='pencil' size={30} color='#fff' onPress={()=>this.props.navigation.navigate('Edit')} />
                </View>
                </TouchableOpacity>
            
            <ScrollView>
                <View style = {{height:200, width:'98%', backgroundColor:'white', margin:'1%', borderRadius:3}}>
                <TouchableOpacity style = {{height:100, width:100,borderRadius:50, backgroundColor:'#BeBeBe', marginLeft:'40%', marginTop:'5%'}}>
                    </TouchableOpacity>
                </View>
                <View style = {{height:35, width:'100%', backgroundColor:'white' }}>
                    <Text style = {{fontSize:20, color:'#38006B', textAlign:'center', alignContent:'center'}}>User Name</Text>
                </View>

                <View style = {{height:250, width:'96%', borderRadius:5, backgroundColor:'white', margin:'2%'}}>
                    <View style = {{flexDirection:'row', justifyContent:'space-between', margin:'5%'}}>
                        <Text style = {{fontSize:17, color:'black', textAlign:'center', alignContent:'center'}}>Personal Details</Text>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Timeline')}}
                                        style = {{height:30, width:'25%', borderRadius:20, backgroundColor:'#00897D', justifyContent:'center'}}>
                            <Text style = {{fontSize:12, color:'white', textAlign:'center'}}>My Timeline</Text>
                        </TouchableOpacity>                        
                    </View>
                    <View style = {{borderWidth:0.7, width:'100%', borderColor:'#BeBeBe'}}>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                        <Entypo size={20} color='#38006B' name='mail' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Email ID</Text>
                        <Text style = {{fontSize:15, color:'#38006B', marginLeft:'3%'}}>user@gmailcom</Text>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                        <MaterialCommunityIcons size={20} color='green' name='contacts' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Gender</Text>
                        <Text style = {{fontSize:15, color:'#38006B', marginLeft:'3%'}}>Male</Text>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                    <MaterialCommunityIcons size={20} color='#ff33ff' name='calendar-check-outline' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Born</Text>
                        <Text style = {{fontSize:15, color:'#38006B', marginLeft:'3%'}}>15-07-2020</Text>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                    <MaterialCommunityIcons size={20} color='red' name='phone' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Phone Number</Text>
                        <Text style = {{fontSize:15, color:'#38006B', marginLeft:'3%'}}>9876543214(UserName)</Text>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                    <MaterialCommunityIcons size={20} color='green' name='phone' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Other Number</Text>
                        <Text style = {{fontSize:15, color:'#38006B', marginLeft:'3%'}}>9876543212</Text>
                    </View>
                </View>

                <View style = {{height:250, width:'96%', borderRadius:5, backgroundColor:'white', margin:'2%'}}>
                    <View style = {{flexDirection:'row', justifyContent:'space-between', margin:'5%'}}>
                        <Text style = {{fontSize:17, color:'black', textAlign:'center', alignContent:'center'}}>Gender Details</Text>
                    </View>
                    <View style = {{borderWidth:0.7, width:'100%', borderColor:'#BeBeBe'}}>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                        <MaterialIcons size={20} color='#38006B' name='my-location' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>From</Text>
                        <Text style = {{fontSize:15, color:'#38006B', marginLeft:'3%'}}>Paris</Text>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                        <Ionicons size={20} color='blue' name='md-briefcase' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Profession</Text>
                        <Text style = {{fontSize:15, color:'#38006B', marginLeft:'3%'}}>Employee</Text>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                    <FontAwesome size={20} color='#ff33ff' name='university' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Studied at</Text>
                        <Text style = {{fontSize:15, color:'#38006B', marginLeft:'3%'}}>So College</Text>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                    <FontAwesome5 size={20} color='orange' name='book-open' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Went to</Text>
                        <Text style = {{fontSize:15, color:'#38006B', marginLeft:'3%'}}>So School</Text>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                    <FontAwesome size={20} color='green' name='briefcase' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Skills</Text>
                        <Text style = {{fontSize:15, color:'#38006B', marginLeft:'3%'}}>etc..</Text>
                    </View>
                </View>

                <View style = {{height:120, width:'96%', borderRadius:5, backgroundColor:'white', margin:'2%'}}>
                    <View style = {{flexDirection:'row', justifyContent:'space-between', margin:'5%'}}>
                        <Text style = {{fontSize:17, color:'black', textAlign:'center', alignContent:'center'}}>Interested Topics</Text>
                        <TouchableOpacity style = {{height:30, width:'25%', borderRadius:20, backgroundColor:'#00897D', justifyContent:'center'}}
                                        onPress = {() => {this.props.navigation.navigate('Topics')}}>
                            <Text style = {{fontSize:12, color:'white', textAlign:'center'}}>Edit</Text>
                        </TouchableOpacity>                         
                    </View>
                    <View style = {{borderWidth:0.7, width:'100%', borderColor:'#BeBeBe'}}>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Employment, Entertainment & Movies, Startups</Text>
                    </View>                  
                </View>

                <View style = {{height:120, width:'96%', borderRadius:5, backgroundColor:'white', margin:'2%', marginBottom:'5%'}}>
                    <View style = {{flexDirection:'row', justifyContent:'space-between', margin:'5%'}}>
                        <Text style = {{fontSize:17, color:'black', textAlign:'center', alignContent:'center'}}>Languages Known</Text>
                        <TouchableOpacity style = {{height:30, width:'25%', borderRadius:20, backgroundColor:'#00897D', justifyContent:'center'}}
                                          onPress = {() => {this.props.navigation.navigate('Language')}}>
                            <Text style = {{fontSize:12, color:'white', textAlign:'center'}}>Edit</Text>
                        </TouchableOpacity>                       
                    </View>
                    <View style = {{borderWidth:0.7, width:'100%', borderColor:'#BeBeBe'}}>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>English</Text>
                    </View>                  
                </View>
                </ScrollView>
            </View>
            
            // </View>
        );
    }
}