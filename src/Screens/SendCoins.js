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
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Styles/sentCoinsStyles'
import { LinearGradient } from 'expo-linear-gradient';


export default class Apply extends React.Component{

    static navigationOptions = ({ navigation }) => ({
		header: null,
    })

    constructor(props){
        super(props);
        this.setState = {
            text : '', 
        }
    }

    render(){        
        return(
            <View style = {{flex:1, height:'100%', width:'100%'}}>
            <View style = {{backgroundColor:'#0073C0', height:'25%', width:'100%'}}>
            </View>
            <TouchableOpacity style = {{ position:'absolute', marginLeft:'5%', marginTop:'8%' }}
                              onPress={()=>{this.props.navigation.navigate('Mywallet')}}>
              <AntDesign size={24} color="white" name="arrowleft" />
            </TouchableOpacity>
            <View>
                <View style = {{flexDirection:'column', alignItems:'center', marginTop:'30%'}}>
                        <View style = {{height:35, width:125, backgroundColor:'white', borderRadius:30, borderWidth:1, borderColor:'orange', alignContent:'center'}}>
                            <TouchableOpacity style = {{justifyContent:'center', marginTop:'5%', flexDirection:'row'}}>
                            <AntDesign size={15} color='green' name='caretdown' />
                            <Text style = {{fontSize:15, color:'black', marginLeft:'3%'}}>TCS 1000</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style = {{fontSize:15, color:'black'}}>Available balance</Text>
                        <TextInput
                            style= {styles.txtinput}
                            placeholder= 'To'
                            placeholderTextColor = '#c2c0c0'
                            onChangeText = {(text) => this.setState({text})}/>
                        <TextInput
                            style= {styles.txtinput}
                            placeholder= 'Amount(in TCS)'
                            placeholderTextColor = '#c2c0c0'
                            onChangeText = {(text) => this.setState({text})}/>
                        <TextInput
                            style= {styles.txtinput}
                            placeholder= 'Message(Optional)'
                            placeholderTextColor = '#c2c0c0'
                            onChangeText = {(text) => this.setState({text})}/>
                        
                        <LinearGradient colors={['#4dd2ff', '#4dffdb']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style = {{height:45, width:'65%',  marginTop:'20%', borderRadius:30}}>
                        <TouchableOpacity >
                        <Text style = {{fontSize:15, color:'white', textAlign:'center', marginTop:'5%'}}> SEND COINS</Text>
                        </TouchableOpacity>
                        </LinearGradient>
                </View>
            </View>
               
            </View>
        );
    }
} 