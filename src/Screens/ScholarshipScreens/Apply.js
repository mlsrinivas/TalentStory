import React from 'react'
import { 
    View,
    ScrollView,
    Text, 
    TouchableOpacity,  
    Dimensions
    } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Dropdown } from 'react-native-material-dropdown'

export default class Apply extends React.Component{
    render(){
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
                <View style={{borderWidth:3, borderColor: 'rgb(0,115,192)'}}>
                <View>
                    <TextField
                        label = 'Full Name'
                        labelFontSize = {14}
                        fontSize = {14}
                        labelTextStyle={{ paddingLeft: 42 }}
                        inputContainerStyle={{ paddingLeft: 42 }}
                        containerStyle={{marginRight: '5%'}}
                        tintColor = 'rgb(200,200,198)'
                        InputLabelProps={{
                            style: { color: 'rgb(82,82,82)' },
                        }}
                        autoFocus={true}
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
                        containerStyle={{marginRight: '5%'}}
                        tintColor = 'rgb(200,200,198)'
                        InputLabelProps={{
                            style: { color: 'rgb(82,82,82)' },
                        }}
                    />
                    <Octicons style={{
                        position: 'absolute',
                        top: 30,
                        left: 7,
                        }} size={28} color='rgb(200,200,198)' name='mail' />
                </View>
                <View>
                    <TextField
                        label = 'Email'
                        labelFontSize = {14}
                        fontSize = {14}
                        labelTextStyle={{ paddingLeft: 42 }}
                        inputContainerStyle={{ paddingLeft: 42 }}
                        containerStyle={{marginRight: '5%'}}
                        tintColor = 'rgb(200,200,198)'
                        InputLabelProps={{
                            style: { color: 'rgb(82,82,82)' },
                        }}
                    />
                    <AntDesign style={{
                        position: 'absolute',
                        top: 30,
                        left: 7,
                        }} size={28} color='rgb(200,200,198)' name='lock' />
                </View>
                <View>
                    <TextField
                        label = 'Mobile Number'
                        labelFontSize = {14}
                        fontSize = {14}
                        labelTextStyle={{ paddingLeft: 42 }}
                        inputContainerStyle={{ paddingLeft: 42 }}
                        containerStyle={{marginRight: '5%'}}
                        tintColor = 'rgb(200,200,198)'
                        InputLabelProps={{
                            style: { color: 'rgb(82,82,82)' },
                        }}
                    />
                    <AntDesign style={{
                        position: 'absolute',
                        top: 30,
                        left: 7,
                        }} size={28} color='rgb(200,200,198)' name='lock' />
                </View>
                <View>
                    <TextField
                        label = 'Age'
                        labelFontSize = {14}
                        fontSize = {14}
                        labelTextStyle={{ paddingLeft: 42 }}
                        inputContainerStyle={{ paddingLeft: 42 }}
                        containerStyle={{marginRight: '5%'}}
                        tintColor = 'rgb(200,200,198)'
                        InputLabelProps={{
                            style: { color: 'rgb(82,82,82)' },
                        }}
                    />
                    <AntDesign style={{
                        position: 'absolute',
                        top: 30,
                        left: 7,
                        }} size={28} color='rgb(200,200,198)' name='lock' />
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center', marginTop: '5%'}}>
                    <Text style={{color: 'rgb(200,200,198)'}}>Select Gender</Text>
                    <RadioGroup 
                        size={24}
                        style = {{flexDirection:'row', marginTop: '5%'}}
                        thickness={2}
                        color='black'
                    >
                        <RadioButton value={'item1'}  >
                            <Text>Male</Text>
                        </RadioButton>
                        <RadioButton  sytle={{marginLeft: '30%'}} value={'item2'} >
                            <Text>Female</Text>
                        </RadioButton>
    
                    </RadioGroup> 
                </View>    
                <View>
                    <Dropdown
                        label='Select Caste'
                        data={data}
                        itemCount = '10'
                        containerStyle={{marginLeft: '5%', marginRight: '5%'}}
                    />
                </View>
                <View>
                    <Dropdown
                        label='Current Education Details'
                        data={data}
                        itemCount = '10'
                        containerStyle={{marginLeft: '5%', marginRight: '5%'}}
                    />
                </View>
                <View>
                    <Dropdown
                        label='Current Education Details'
                        data={data}
                        itemCount = '10'
                        containerStyle={{marginLeft: '5%', marginRight: '5%'}}
                    />
                </View>
                <View>
                    <Dropdown
                        label='Select State'
                        data={data}
                        itemCount = '10'
                        containerStyle={{marginLeft: '5%', marginRight: '5%'}}
                    />
                </View>
                <View>
                    <Dropdown
                        label='Select State'
                        data={data}
                        itemCount = '10'
                        containerStyle={{marginLeft: '5%', marginRight: '5%'}}
                    />
                </View>
                <View>
                    <TextField
                        label = 'Percentage'
                        labelFontSize = {14}
                        fontSize = {14}
                        labelTextStyle={{ paddingLeft: 42 }}
                        inputContainerStyle={{ paddingLeft: 42 }}
                        containerStyle={{marginRight: '5%'}}
                        tintColor = 'rgb(200,200,198)'
                        InputLabelProps={{
                            style: { color: 'rgb(82,82,82)' },
                        }}
                    />
                    <AntDesign style={{
                        position: 'absolute',
                        top: 30,
                        left: 7,
                        }} size={28} color='rgb(200,200,198)' name='lock' />
                </View> 
                <View style={{marginTop: '13%', marginBottom: '5%', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity  style={{ alignItems: 'center', justifyContent: 'center', width: '30%', height: 40, backgroundColor: 'rgb(0,115,192)', borderRadius: 15 }}>
                        <Text style={{color: 'white'}}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{ alignItems: 'center', justifyContent: 'center', width: '30%', height: 40, backgroundColor: 'rgb(0,115,192)', borderRadius: 15, marginLeft: '10%'}}>
                        <Text style={{color: 'white'}}>Cancel</Text>
                    </TouchableOpacity> 
                </View>  
                </View>          
            </ScrollView>
        );
    }
} 