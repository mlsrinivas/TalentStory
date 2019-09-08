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
import { TextField } from 'react-native-material-textfield';
//import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Apply extends React.Component{
    render(){
        return(
            <View >
                
                <View >
                <MaterialCommunityIcons size={20} color='black' name='rhombus-medium' />
                <View style = {{marginLeft:'20%'}}>
                <TextField
                    label='Community Name'
                    //baseColor = 'red'
                    tintColor = '#B5B5B5'
                    style  = {{activeLineWidth : 1, lineWidth : 0.7, }}
                    
                    //onChangeText={ (name) => this.setState({ name }) }
                    />
                    </View>
                </View>                
            </View>
        );
    }
} 