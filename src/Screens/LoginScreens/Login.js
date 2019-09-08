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
  Keyboard
} from 'react-native';
import styles from '../../Styles/SignUpStyles/LoginStyle';
//import ResponsiveImage from 'react-native-responsive-image';

 
export default class Login extends React.Component {

  static navigationOptions = ({ navigation }) => ({
		header: null,
  })
  
  constructor(props){
      super(props);
      // this.state={
      //   text : '',
      //   keyboardOffset: 0,
      // }
      // this._keyboardDidShow = this._keyboardDidShow.bind(this);
      // this._keyboardDidHide = this._keyboardDidHide.bind(this);

    } 

      // componentDidMount() {
      //     this.keyboardDidShowListener = Keyboard.addListener(
      //         'keyboardDidShow',
      //         this._keyboardDidShow,
      //     );
      //     this.keyboardDidHideListener = Keyboard.addListener(
      //         'keyboardDidHide',
      //         this._keyboardDidHide,
      //     );
      // }

      // componentWillUnmount() {
      //     this.keyboardDidShowListener.remove();
      //     this.keyboardDidHideListener.remove();
      // }

      // _keyboardDidShow(event) {
      //     this.setState({
      //         keyboardOffset: event.endCoordinates.height,
      //     })
      // }

      // _keyboardDidHide() {
      //     this.setState({
      //         keyboardOffset: 0,
      //     })
      // }

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
                placeholderTextColor = '#B5B5B5'
                onChangeText = { (text) => this.setState({text})}
                />
               
                <TextInput
                style = {styles.firstNameText}
                secureTextEntry = {true}
                placeholder = 'Enter Password'
                placeholderTextColor = '#B5B5B5'
                onChangeText = { (text) => this.setState({text})}
                />
                
                <View style={{ flexDirection:'row',marginTop:15, justifyContent:'center' }}>
                <Text style={{ color:'#B5B5B5',margin:5,fontSize: 12 }}>Not Register?</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                  <Text style={{ color:'#0073C0',margin:5,fontSize: 13 }}>Sign-Up</Text>
                </TouchableOpacity>
                <Text style={{ color:'#B5B5B5',margin:5,fontSize: 12 }}>or</Text>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('ForgetPassword')}>
                <Text style={{ color:'#0073C0',margin:5,fontSize: 13 }}>Forgot Password</Text>
                </TouchableOpacity>
                </View>

            </View>
            <View style={{ marginTop:15 }}>
                <TouchableOpacity
                style = {styles.buttonlogin} onPress={()=>{this.props.navigation.navigate('HomeScreenStack')}}>
                <Text style={styles.logintitle}>Login</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        </View>

    
    );
  }
}
