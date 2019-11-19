import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import styles from '../Styles/ForgetPasswordStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class ForgetPassword extends React.Component{

    static navigationOptions = ({ navigation }) => ({
		header: null,
    })

    constructor(props){
        super(props);
        this.setState = {
            text : '', 
        }
    }
    render() {
        const dimensions = Dimensions.get('window');
        //const imageHeight = Math.round(dimensions.width * 2 / 2);
        const imageWidth = dimensions.width;

        return(
            <View style = {{height:'100%', width:'100%'}}>
            {/* <ImageBackground  source={require('../../assets/Splash.png')} resizeMode = 'cover'
                          style={{ height: 250, width: imageWidth }}/> */}
            <View style = {{backgroundColor:'#0073C0', height:'40%', width:'100%'}}>
            {/* <MaterialCommunityIcons size={50} color='white' name='rhombus-medium' 
                            style = {{ alignSelf:'center', marginTop:'66%'}}/> */}
            </View>
            <Image source = {require('../../assets/key.png')} style = {{position:'absolute', tintColor:'white', alignSelf:'center', marginTop:'10%', height:'20%', width:'30%'}}/>
            <TouchableOpacity style = {{ position:'absolute', marginLeft:'5%', marginTop:'8%' }}
                              onPress={()=>{this.props.navigation.navigate('Login')}}>
              <AntDesign size={24} color="white" name="arrowleft" />
            </TouchableOpacity>
            {/* <View style = {{ position:'absolute', alignSelf:'center', marginTop:'40%' }}>
            <MaterialCommunityIcons size={50} color='white' name='rhombus-medium' />
            </View> */}
                <View style={styles.container}>
                    <Text style={{ color:'#515151', fontSize:25}}>Reset Password?</Text>
                    <Text style={{ color:'#B5B5B5',marginTop:10 }}>Enter phone number below to recieve</Text>
                    <Text style={{ color:'#B5B5B5',marginLeft:17 }}>otp to reset your password</Text>

                    <TextInput
                    style= {styles.txtinput}
                    placeholder= 'Phone number'
                    placeholderTextColor = '#B5B5B5'
                    onChangeText = {(text) => this.setState({text})}/>

                    <TouchableOpacity style= {styles.buton}>
                        <Text style={styles.txt}>Continue</Text>
                    </TouchableOpacity>
                </View>        
            </View>

        )
    }


} 