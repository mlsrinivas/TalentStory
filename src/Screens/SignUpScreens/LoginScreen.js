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
import styles from '../../Styles/SignUpStyles/LoginStyle';
import ResponsiveImage from 'react-native-responsive-image';


export default class LoginScreen extends React.Component {

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
            <View style = {{flex:2, alignItems:'center', justifyContent:'space-between', flexDirection:'column'}}>
            <View >
                <ResponsiveImage source={require('../../../assets/Login.jpeg')} 
                                 initWidth="412" initHeight="300"
                                 //style = {{borderBottomLeftRadius:200, borderBottomRightRadius:200}}
                                 />
            </View>
            <View style={styles.login}>
                <View >
                <TextInput
                style = {styles.firstNameText}
                placeholder = 'Mobile Number'
                placeholderTextColor = '#c2c0c0'
                onChangeText = { (text) => this.setState({text})}
                />
                </View>
                <View style={{ marginTop:15 }}>
                <TextInput
                style = {styles.firstNameText}
                secureTextEntry = {true}
                placeholder = 'Enter Password'
                placeholderTextColor = '#c2c0c0'
                onChangeText = { (text) => this.setState({text})}
                />
                </View>

                <View style={{ marginTop:15 }}>
                <TouchableOpacity
                style = {styles.buttonlogin}>
                <Text style={styles.logintitle}>Login</Text>
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection:'row',marginTop:15, justifyContent:'center' }}>
                <Text style={{ color:'#c2c0c0',margin:5,fontSize: 12 }}>Not Register?</Text>
                <Text style={{ color:'#0073C0',margin:5,fontSize: 13 }}>Sign-Up</Text>
                <Text style={{ color:'#c2c0c0',margin:5,fontSize: 12 }}>or</Text>
                <Text style={{ color:'#0073C0',margin:5,fontSize: 13 }}>Forgot Password</Text>
                </View>
            </View>
            </View>
        </ScrollView>
        </View>

    
    );
  }
}
