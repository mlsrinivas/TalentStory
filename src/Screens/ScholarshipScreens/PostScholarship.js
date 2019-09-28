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

export default class PostScholarship extends React.Component{
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
                        label = 'Organization Name'
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
                        label = 'Scholarship Name'
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
                        label = 'Description About Scholarship'
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
                        label = 'Contact Number'
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
                        label = 'Email Id'
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
                        label = 'Min Age'
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
                        label = 'Max Age'
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
                        label = 'Website Link'
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
                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 17}}>
                    <Text style={{color: 'rgb(200,200,198)'}}>Scholarship For</Text>
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
                        <RadioButton  sytle={{marginLeft: '30%'}} value={'item2'} >
                            <Text>Other</Text>
                        </RadioButton>
                    </RadioGroup> 
                </View>
                <View>
                    <TextField
                        label = 'Minimum Educational Qualification'
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
                        label = 'Percentage Required'
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
              
                    <Dropdown
                        label='Select Caste'
                        data={data}
                        itemCount = '10'
                        containerStyle={{marginLeft: '5%', marginRight: '5%', marginTop: 0}}
                    />
                
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
                        label = 'Address for Submission of Application'
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
                        label = 'Number of Scholarship Available'
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
                <View style={{marginTop: 50, marginBottom: '5%', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'rgb(200,200,198)'}}>Last Date to Apply</Text>
                    <TouchableOpacity  style={{ alignItems: 'center', justifyContent: 'center', width: '28%', height: 40, backgroundColor: 'rgb(0,115,192)', borderRadius: 15, marginTop: 5 }}>
                                <Text style={{color: 'white', fontSize: 12}}>Select Date</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row', marginTop: 40}}>
                        <TouchableOpacity  style={{ alignItems: 'center', justifyContent: 'center', width: '28%', height: 40, backgroundColor: 'rgb(0,115,192)', borderRadius: 15 }}>
                            <Text style={{color: 'white', fontSize: 12}}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{ alignItems: 'center', justifyContent: 'center', width: '28%', height: 40, backgroundColor: 'rgb(0,115,192)', borderRadius: 15, marginLeft: '10%'}}>
                            <Text style={{color: 'white', fontSize: 12}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>  
                </View>          
            </ScrollView>
        );
    }
} 