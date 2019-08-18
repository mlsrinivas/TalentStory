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
  Dimensions
} from 'react-native';
import styles from '../../Styles/SignUpStyles/LoginStyle';
//import ResponsiveImage from 'react-native-responsive-image';

 
export default class Login extends React.Component {

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
            <View style = {{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                {/* <ResponsiveImage source={require('../../../assets/login.png')} 
                                style = {{justifyContent:'flex-start'}}
                                 initWidth="300" initHeight="300"
                                 //style = {{borderBottomLeftRadius:200, borderBottomRightRadius:200}}
                                 /> */}
                    <Image source={require('../../../assets/login.png')}
                          style={{ height: 375, width: imageWidth }}/>
            <View style={[styles.login, {justifyContent:'flex-end'}]}>
                <TextInput
                style = {styles.firstNameText}
                placeholder = 'Mobile Number'
                placeholderTextColor = '#c2c0c0'
                onChangeText = { (text) => this.setState({text})}
                />
               
                <TextInput
                style = {styles.firstNameText}
                secureTextEntry = {true}
                placeholder = 'Enter Password'
                placeholderTextColor = '#c2c0c0'
                onChangeText = { (text) => this.setState({text})}
                />
                
                <TouchableOpacity
                style = {styles.buttonlogin}>
                <Text style={styles.logintitle}>Login</Text>
                </TouchableOpacity>

                
                <View style={{ flexDirection:'row',marginTop:15, justifyContent:'center' }}>
                  <Text style={{ color:'#c2c0c0',margin:5,fontSize: 12 }}>Not Register?</Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={{ color:'#0073C0',margin:5,fontSize: 13 }}>Sign-Up</Text>
                  </TouchableOpacity>
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
