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
    //TextInput,
    Dimensions
    } from 'react-native';
import { TextField } from 'react-native-material-textfield';
//import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Dropdown } from 'react-native-material-dropdown';

const screenWidth = Dimensions.get('window').width
const styles = {
    floatingLabelFocusStyle: {
        color: "rgb(82,82,82)"
    }
}


export default class Apply extends React.Component{


    render(){
        const radio_props = [{label: 'Public', value: 0 }, {label: 'Private', value: 0 }];

        let data = [{
                    value: 'Lorium Ipsum',
                  },{
                    value: 'Lorium Ipsum',
                  },{
                    value: 'Lorium Ipsum',
                  },{
                    value: 'Lorium Ipsum',
                  },{
                    value: 'Lorium Ipsum',
                  },{
                    value: 'Lorium Ipsum',
                  },{
                    value: 'Lorium Ipsum',
                  },{
                    value: 'Lorium Ipsum',
                  },{
                    value: 'Lorium Ipsum',
                  }, 
                ];
    

        return(
            <ScrollView>
                <View style={{borderWidth:4, borderColor: 'rgb(0,115,192)'}}>
                <View>
                    <TextField
                        label = 'Full Name'
                        labelFontSize = {14}
                        fontSize = {14}
                        labelTextStyle={{ paddingLeft: 42 }}
                        inputContainerStyle={{ paddingLeft: 42 }}
                        containerStyle={{marginRight:20, width:screenWidth-20}}
                        tintColor = 'rgb(200,200,198)'
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        InputLabelProps={{
                            style: { color: 'rgb(82,82,82)' },
                        }}
                    />
                    <Ionicons style={{
                        position: 'absolute',
                        top: 30,
                        left: 7,
                        }} size={28} color='rgb(200,200,198)' name='md-contact' />
                </View> 
                <View>
                    <TextField
                        label = 'Father/Guardian Name'
                        labelFontSize = {14}
                        fontSize = {14}
                        labelTextStyle={{ paddingLeft: 42 }}
                        inputContainerStyle={{ paddingLeft: 42 }}
                        containerStyle={{marginRight:20, width:screenWidth-20}}
                        tintColor = 'rgb(200,200,198)'
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        InputLabelProps={{
                            style: { color: 'rgb(82,82,82)' },
                        }}
                    />
                    <Ionicons style={{
                        position: 'absolute',
                        top: 30,
                        left: 7,
                        }} size={28} color='rgb(200,200,198)' name='md-contact' />
                </View>
                <View>
                    <TextField
                        label = 'Email'
                        labelFontSize = {14}
                        fontSize = {14}
                        labelTextStyle={{ paddingLeft: 42 }}
                        inputContainerStyle={{ paddingLeft: 42 }}
                        containerStyle={{marginRight:20, width:screenWidth-20}}
                        tintColor = 'rgb(200,200,198)'
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        InputLabelProps={{
                            style: { color: 'rgb(82,82,82)' },
                        }}
                    />
                    <Ionicons style={{
                        position: 'absolute',
                        top: 30,
                        left: 7,
                        }} size={28} color='rgb(200,200,198)' name='md-contact' />
                </View>
                <View>
                    <TextField
                        label = 'Mobile Number'
                        labelFontSize = {14}
                        fontSize = {14}
                        labelTextStyle={{ paddingLeft: 42 }}
                        inputContainerStyle={{ paddingLeft: 42 }}
                        containerStyle={{marginRight:20, width:screenWidth-20}}
                        tintColor = 'rgb(200,200,198)'
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        InputLabelProps={{
                            style: { color: 'rgb(82,82,82)' },
                        }}
                    />
                    <Ionicons style={{
                        position: 'absolute',
                        top: 30,
                        left: 7,
                        }} size={28} color='rgb(200,200,198)' name='md-contact' />
                </View>
                <View>
                    <TextField
                        label = 'Age'
                        labelFontSize = {14}
                        fontSize = {14}
                        labelTextStyle={{ paddingLeft: 42 }}
                        inputContainerStyle={{ paddingLeft: 42 }}
                        containerStyle={{marginRight:20, width:screenWidth-20}}
                        tintColor = 'rgb(200,200,198)'
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        InputLabelProps={{
                            style: { color: 'rgb(82,82,82)' },
                        }}
                    />
                    <Ionicons style={{
                        position: 'absolute',
                        top: 30,
                        left: 7,
                        }} size={28} color='rgb(200,200,198)' name='md-contact' />
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center', marginTop: '5%'}}>
                    <Text style={{color: 'rgb(200,200,198)'}}>Select Gender</Text>
                <RadioGroup 
        //onSelect = {(index, value) => this.onSelect(index, value)}
        size={24}
        style = {{flexDirection:'row', marginTop: '5%'}}
        thickness={2}
        color='black'
        //highlightColor='#ccc8b9'
        >
        <RadioButton value={'item1'}  >
          <Text>Male</Text>
        </RadioButton>

        <RadioButton  value={'item2'} >
          <Text>Female</Text>
        </RadioButton>
 
        </RadioGroup> 
                </View>
                   
                <View>
                    <Dropdown
                        label='Select Caste'
                        data={data}
                        itemCount = '10'
                        containerStyle={{marginLeft: 20, width: screenWidth-40, marginRight: 20}}
                    />
                </View>
                <View>
                    <Dropdown
                        label='Current Education Details'
                        data={data}
                        itemCount = '10'
                        containerStyle={{marginLeft: 20, width: screenWidth-40, marginRight: 20}}
                    />
                </View>
                <View>
                    <Dropdown
                        label='Current Education Details'
                        data={data}
                        itemCount = '10'
                        containerStyle={{marginLeft: 20, width: screenWidth-40, marginRight: 20}}
                    />
                </View>
                <View>
                    <Dropdown
                        label='Select State'
                        data={data}
                        itemCount = '10'
                        containerStyle={{marginLeft: 20, width: screenWidth-40, marginRight: 20}}
                    />
                </View>
                <View>
                    <Dropdown
                        label='Select State'
                        data={data}
                        itemCount = '10'
                        containerStyle={{marginLeft: 20, width: screenWidth-40, marginRight: 20}}
                    />
                </View>
                <View>
                    <TextField
                        label = 'Percentage'
                        labelFontSize = {14}
                        fontSize = {14}
                        labelTextStyle={{ paddingLeft: 42 }}
                        inputContainerStyle={{ paddingLeft: 42 }}
                        containerStyle={{marginRight:20, width:screenWidth-20}}
                        tintColor = 'rgb(200,200,198)'
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        InputLabelProps={{
                            style: { color: 'rgb(82,82,82)' },
                        }}
                    />
                    <Ionicons style={{
                        position: 'absolute',
                        top: 30,
                        left: 7,
                        }} size={28} color='rgb(200,200,198)' name='md-contact' />
                </View> 
                <View style={{marginTop: '13%', marginBottom: '5%', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                    {/* <View style={{flexDirection:'row'}}> */}
                    <View  style={{ alignItems: 'center', justifyContent: 'center', width: '30%', height: 40, backgroundColor: 'rgb(0,115,192)', borderRadius: 15 }}>
                        <Text style={{color: 'white'}}>Save</Text>
                    </View>
                    <View  style={{ alignItems: 'center', justifyContent: 'center', width: '30%', height: 40, backgroundColor: 'rgb(0,115,192)', borderRadius: 15, marginLeft: '10%'}}>
                        <Text style={{color: 'white'}}>Save</Text>
                    </View>
                    {/* </View> */}
                    
                </View>  
                </View>          
            </ScrollView>
        );
    }
} 