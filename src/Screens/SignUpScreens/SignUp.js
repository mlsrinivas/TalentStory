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
  Dimensions,
  ImageBackground,
} from 'react-native';
import styles from '../../Styles/SignUpStyles/SignUpStyles';
//import ResponsiveImage from 'react-native-responsive-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import Icon from 'react-native-vector-icons/Foundation';




export default class SignUp extends React.Component {

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
            <ImageBackground  source={require('../../../assets/login.png')} resizeMode = 'cover'
                          style={{ height: 250, width: imageWidth }}/>
            <View style = {{marginBottom:30}}>
            <Icon size={24}  name="rhombus-outline" color = "black" style = {{alignSelf:'center'}} />
            </View>
            <View style = {{flexDirection:"row", justifyContent:'space-around', marginTop:'5%'}}>
                <View >
                <Text>First Name</Text>
                <TextInput
                style = {styles.viewFname}
                placeholderTextColor = '#c2c0c0'
                onChangeText = { (text) => this.setState({text})}
                />
                </View>
                <View >
                <Text>Last Name</Text>
                <TextInput
                style = {styles.viewLname}
                placeholderTextColor = '#c2c0c0'
                onChangeText = { (text) => this.setState({text})}
                />
                </View>                
            </View>
            <View style = {{flexDirection:"row", justifyContent:'space-around', marginTop:'5%'}}>
                <View >
                <Text>Mobile Number</Text>
                <TextInput
                style = {styles.viewMnumber}
                placeholderTextColor = '#c2c0c0'
                onChangeText = { (text) => this.setState({text})}
                />
                </View>                
            </View>
            <View>
            <View style = {{flexDirection:"column", justifyContent:'space-around', marginLeft:'5%', marginTop:'5%'}}>
            <Text>Gender</Text>
            </View>

            <View style = {{flexDirection:"row", justifyContent:'space-around'}}>                
                <View >
                {/* <Icon size={24} color="black" name="male-symbol" /> */}
                <TextInput
                style = {styles.viewMale}
                placeholderTextColor = '#c2c0c0'
                placeholder = 'Male'
                onChangeText = { (text) => this.setState({text})}
                />                
                </View>
                <View >
                <TextInput
                style = {styles.viewFemale}
                placeholderTextColor = '#c2c0c0'
                placeholder = 'Female'

                onChangeText = { (text) => this.setState({text})}
                />
                </View>                
            </View>
            </View>
            <View style = {{flexDirection:"row", justifyContent:'space-around', marginTop:'5%'}}>
                <View >
                <Text>Password</Text>
                <TextInput
                style = {styles.viewPassword}
                secureTextEntry = {true}
                placeholderTextColor = '#c2c0c0'
                onChangeText = { (text) => this.setState({text})}
                />
                </View>                
            </View>
            <View style = {{flexDirection:"row", justifyContent:'space-around', marginTop:'5%'}}>
                <View >
                <Text>Confirm Password</Text>
                <TextInput
                style = {styles.ViewCPassword}
                secureTextEntry = {true}
                placeholderTextColor = '#c2c0c0'
                onChangeText = { (text) => this.setState({text})}
                />
                </View>                
            </View>
            
            <View style={styles.login}>
                
                <View style={{ flexDirection:'row',marginTop:15, justifyContent:'center' }}>
                    <Text style={{ color:'#c2c0c0',margin:5,fontSize: 12 }}>I agree to</Text>
                    <Text style={{ color:'#0073C0',margin:5,fontSize: 13 }}>Privacy Policy</Text>
                    <Text style={{ color:'#c2c0c0',margin:5,fontSize: 12 }}>and</Text>
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
