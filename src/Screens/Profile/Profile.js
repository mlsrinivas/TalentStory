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

export default class Profile extends React.Component{

    render(){
        return(
            <View style = {{height:'100%', width:'100%', backgroundColor:'#BeBeBe'}}>
                <View style = {{height:'30%', width:'98%', backgroundColor:'white', margin:'1%', borderRadius:3}}>
                </View>
                <View style = {{height:'5%', width:'100%', backgroundColor:'white' }}>
                    <Text style = {{fontSize:20, color:'#5900b3', textAlign:'center', alignContent:'center'}}>User Name</Text>
                </View>
                <View style = {{height:'40%', width:'96%', borderRadius:3, backgroundColor:'white', margin:'2%'}}>
                    <View style = {{flexDirection:'row', justifyContent:'space-between', margin:'5%'}}>
                        <Text style = {{fontSize:17, color:'black', textAlign:'center', alignContent:'center'}}>Personal Details</Text>
                        <View style = {{height:30, width:'25%', borderRadius:20, backgroundColor:'green', justifyContent:'center'}}>
                            <Text style = {{fontSize:12, color:'white', textAlign:'center'}}>My Timeline</Text>
                        </View>                        
                    </View>
                    <View style = {{borderWidth:1, width:'100%', borderColor:'#BeBeBe'}}>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                        <Entypo size={20} color='#5900b3' name='mail' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Email ID</Text>
                        <Text style = {{fontSize:15, color:'#5900b3', marginLeft:'3%'}}>user@gmailcom</Text>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                        <MaterialCommunityIcons size={20} color='green' name='contacts' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Gender</Text>
                        <Text style = {{fontSize:15, color:'#5900b3', marginLeft:'3%'}}>Male</Text>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                    <MaterialCommunityIcons size={20} color='#ff33ff' name='calendar-check-outline' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Born</Text>
                        <Text style = {{fontSize:15, color:'#5900b3', marginLeft:'3%'}}>15-07-2020</Text>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                    <MaterialCommunityIcons size={20} color='red' name='phone' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Phone Number</Text>
                        <Text style = {{fontSize:15, color:'#5900b3', marginLeft:'3%'}}>9876543214(UserName)</Text>
                    </View>
                    <View style = {{flexDirection:'row', margin:'2%'}}>
                    <MaterialCommunityIcons size={20} color='green' name='phone' />
                        <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>Other Number</Text>
                        <Text style = {{fontSize:15, color:'#5900b3', marginLeft:'3%'}}>9876543212</Text>
                    </View>
                </View>
                    
            </View>
        );
    }
}