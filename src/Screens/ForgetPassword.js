import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import styles from '../Styles/ForgetPasswordStyle';

export default class ForgetPassword extends React.Component{

    constructor(props){
        super(props);
        this.setState = {
            text : '',
        }
    }
    render() {
        return(
            <View>
            <Image style={styles.setimage} source= {require('../../assets/login.png')} />
                <View style={styles.container}>
                    <Text style={{ color:'#000000' }}>Reset Password?</Text>
                    <Text style={{ color:'#DADADA',marginTop:10 }}>Enter phone number below to recieve</Text>
                    <Text style={{ color:'#DADADA',marginLeft:17 }}>otp to reset your password</Text>

                    <TextInput
                    style= {styles.txtinput}
                    placeholder= 'Phone number'
                    onChangeText = {(text) => this.setState({text})}/>

                    <TouchableOpacity style= {styles.buton}>
                        <Text style={styles.txt}>continue</Text>
                    </TouchableOpacity>
                </View>        
            </View>

        )
    }


} 