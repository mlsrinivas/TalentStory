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
} from 'react-native';
import styles from '../../Styles/SignUpStyles/SignUpStyles';
import ResponsiveImage from 'react-native-responsive-image';
import Icon from 'react-native-vector-icons/Foundation';



export default class SignUp extends React.Component {

    constructor(props){
        super(props);
        this.state={
          text : '',
        }
      } 

    render() {
      return (
        <View style={styles.container}>
        <ScrollView>
            <View >
            <View >
                <ResponsiveImage source={require('../../../assets/Login.jpeg')} 
                                 initWidth="412" initHeight="150"/>
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
            <View style={{ marginTop:'10%', alignItems:'flex-end' }}>
                <TouchableOpacity
                style = {styles.loginButton}>
                <Text style={styles.loginTitle}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
        </View>

    
    );
  }
}
