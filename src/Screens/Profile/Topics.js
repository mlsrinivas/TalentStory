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
import styles from '../../Styles/Profile/Topics'
import { LinearGradient } from 'expo-linear-gradient';



export default class Topics extends React.Component{
    render(){
        return(
        <View>
            <View style = {styles.buttonView}>
                    <TouchableOpacity style={[styles.button, {backgroundColor:'blue'}]}>
                        <Text style={styles.buttonText}>Startups</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>MSME's</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Entrepreneurship </Text>
                    </TouchableOpacity>
            </View>

            <View style = {styles.buttonView}>
                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Nation Building</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Science & Technology</Text>
                    </TouchableOpacity>
            </View>

            <View style = {styles.buttonView}>
                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Fight Poverty</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Fight Corruption</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Women Safety </Text>
                    </TouchableOpacity>
            </View>

            <View style = {styles.buttonView}>
                    <TouchableOpacity style={[styles.button, {backgroundColor:'blue'}]}>
                        <Text style={styles.buttonText}>Employment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Government Schemes</Text>
                    </TouchableOpacity>
            </View>

            <View style = {styles.buttonView}>
                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Motivational stories</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Health</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Education</Text>
                    </TouchableOpacity>
            </View>

            <View style = {styles.buttonView}>
                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Environment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Politics</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Business</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Sports</Text>
                    </TouchableOpacity>
            </View>

            <View style = {styles.buttonView}>
                    <TouchableOpacity style={[styles.button, {backgroundColor:'#BeBeBe'}]}>
                        <Text style={styles.buttonText}>Martial Arts</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor:'blue'}]}>
                        <Text style={styles.buttonText}>Entertainment & Movies</Text>
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