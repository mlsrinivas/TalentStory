import React from 'react'
import { View,
    ScrollView,
    TextInput,
    Text,
    colors,
    StyleSheet,
    Image, 
    TouchableOpacity,  
    ImageBackground,
    } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../Styles/Profile/Topics'



export default class Language extends React.Component{
    render(){
        return(
        <View>

            <View style = {styles.buttonView}>
                    <TouchableOpacity style={[styles.button, {backgroundColor:'blue'}]}>
                        <Text style={styles.buttonText}>English</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Bengali</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Gujarati</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Hindi</Text>
                    </TouchableOpacity>
            </View>

            <View style = {styles.buttonView}>
                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Kannada</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Malayalam</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Marathi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Punjabi</Text>
                    </TouchableOpacity>
            </View>

            <View style = {styles.buttonView}>
                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Sanskrit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Tamil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Telugu</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Urdu</Text>
                    </TouchableOpacity>
            </View>

            <View style = {{borderWidth:0.5, width:'100%', borderColor:'#BeBeBe', marginTop:'5%'}}>
            </View>

            <LinearGradient colors={['#4dd2ff', '#4dffdb']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                            style = {{height:45, width:'50%',  marginTop:'5%', borderRadius:30, marginLeft:'25%'}}>
                <TouchableOpacity >
                    <Text style = {{fontSize:20, color:'white', textAlign:'center', marginTop:'4%'}}>SUBMIT</Text>
                </TouchableOpacity>
            </LinearGradient>



        </View>
        );
    }
} 