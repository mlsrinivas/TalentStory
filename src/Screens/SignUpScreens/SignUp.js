import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  colors,
  StyleSheet,
  Image, 
  TouchableOpacity,  
  ImageBackground, 
  Dimensions,
  
} from 'react-native';
import styles from '../../Styles/SignUpStyles/SignUpStyles';
//import ResponsiveImage from 'react-native-responsive-image';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'native-base'

export default class SignUp extends React.Component {

    static navigationOptions = ({ navigation }) => ({
		header: null,
  })

    constructor(props){
        super(props);
        this.state={
          text : '',
        }
      } 

    render() {
        const dimensions = Dimensions.get('window');
        //const imageHeight = Math.round(dimensions.width * 2 / 2);
        const imageWidth = dimensions.width;
      return (
        <View style={styles.container}>
        <ScrollView>
            <View >
            <View >
            <ImageBackground  source={require('../../../assets/Splash.png')} resizeMode = 'cover'
                          style={{ height: 250, width: imageWidth }}/>
            <TouchableOpacity style = {{ position:'absolute', marginLeft:'5%', marginTop:'8%' }}
                              onPress={()=>{this.props.navigation.navigate('Login')}}>
              <AntDesign size={24} color="white" name="arrowleft" />
            </TouchableOpacity>
            {/* <View style = {{ position:'absolute', alignSelf:'center', marginTop:'57%' }}>
            <MaterialCommunityIcons size={50} color='white' name='rhombus-medium' />
            </View> */}
            </View>
            <View style = {{flexDirection:"row", justifyContent:'space-around'}}>
                <View>
                <Text style={{ color:'#515151' }}>First Name</Text>
                <TextInput
                style = {styles.viewFname}
                placeholderTextColor = ''
                onChangeText = { (text) => this.setState({text})}
                />
                </View>
                <View>
                <Text style={{ color:'#515151' }}>Last Name</Text>
                <TextInput
                style = {styles.viewLname}
                placeholderTextColor = '#B5B5B5'
                onChangeText = { (text) => this.setState({text})}
                />
                </View>                
            </View>
            <View style = {{flexDirection:"row", justifyContent:'space-around', marginTop:'5%'}}>
                <View >
                <Text style={{ color:'#515151' }}>Mobile Number</Text>
                <TextInput
                style = {styles.viewMnumber}
                placeholderTextColor = '#B5B5B5'
                onChangeText = { (text) => this.setState({text})}
                />
                </View>                
            </View>
            <View>
            <View style = {{flexDirection:"column", justifyContent:'space-around', marginLeft:'5%', marginTop:'5%'}}>
            <Text style={{ color:'#515151' }}>Gender</Text>
            </View>
            <View style = {{flexDirection:"row", justifyContent:'space-around'}}>
                <View style = {styles.gender}>
                  <TouchableOpacity style = {{flexDirection:'row'}}>
                  <Icon size={20} name="ios-male" style={{ color:'#DADADA',margin:'3%',marginLeft:'9%'}}/>
                  <Text style={{ color:'#DADADA', paddingHorizontal :10, marginTop:'10%'}}>Male</Text>
                  </TouchableOpacity>
                </View>
                <View style = {styles.gender}>
                  <TouchableOpacity style = {{flexDirection:'row'}}>
                  <Icon size={20} name="ios-female" style={{ color:'#DADADA',margin:'3%',marginLeft:'9%'}}/>
                  <Text style={{ color:'#DADADA', paddingHorizontal :10, marginTop:'8%' }}>Female</Text>
                  </TouchableOpacity>
                </View>                
            </View>

            </View>
            <View style = {{flexDirection:"row", justifyContent:'space-around', marginTop:'5%'}}>
                <View >
                <Text style={{ color:'#515151' }}>Password</Text>
                <TextInput
                style = {styles.viewPassword}
                secureTextEntry = {true}
                placeholderTextColor = '#B5B5B5'
                onChangeText = { (text) => this.setState({text})}
                />
                </View>                
            </View>
            <View style = {{flexDirection:"row", justifyContent:'space-around', marginTop:'5%'}}>
                <View >
                <Text style={{ color:'#515151' }}>Confirm Password</Text>
                <TextInput
                style = {styles.ViewCPassword}
                secureTextEntry = {true}
                placeholderTextColor = '#B5B5B5'
                onChangeText = { (text) => this.setState({text})}
                />
                </View>                
            </View>
            
            <View style={styles.login}>
                
                <View style={{ flexDirection:'row',marginTop:15, justifyContent:'center' }}>
                    <Text style={{ color:'#B5B5B5',margin:5,fontSize: 12 }}>I agree to</Text>
                    <Text style={{ color:'#0073C0',margin:5,fontSize: 13 }}>Privacy Policy</Text>
                    <Text style={{ color:'#B5B5B5',margin:5,fontSize: 12 }}>and</Text>
                    <Text style={{ color:'#0073C0',margin:5,fontSize: 13 }}>Terms</Text>
                </View>
            </View>
            </View>
        </ScrollView>
            <View >
                <TouchableOpacity
                style = {styles.loginButton}>
                <Text style={styles.loginTitle}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    
    );
  }
}
