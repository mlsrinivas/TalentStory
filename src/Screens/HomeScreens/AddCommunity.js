import React from 'react';
import { View, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
//import RadioButton from 'react-native-radio-button' 
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


export default class AddCommunity extends React.Component {
  constructor() {
    super();
    this.state = {
      name : '',
    };
  }

  render() {
    const name = this.state;
    const radio_props = [{label: 'Public', value: 0 }, {label: 'Private', value: 0 }];
    return (
        <View style={{ flex: 1 }}>
        <ScrollView>
        <View style = {{marginLeft:'6%', marginRight:'6%'}}>
        <TextField
        label='Community Name'
        //baseColor = 'red'
        tintColor = '#c2c0c0'
        style  = {{activeLineWidth : 1, lineWidth : 0.7}}
        onChangeText={ (name) => this.setState({ name }) }
        />
        </View>
        <View style = {{marginLeft:'6%', marginRight:'6%'}}>
        <TextField
        label='Tell about your community'
        tintColor = '#c2c0c0'
        style  = {{activeLineWidth : 1, lineWidth : 0.7}}
        numberOfLines={10}
        multiline={true}
        onChangeText={ (name) => this.setState({ name }) }
        />
        </View>

        <View style = {{flexDirection: 'row',marginTop:'5%', justifyContent:'space-between'}}>
        <TouchableOpacity style = {{marginLeft:'22%', }}>
        <View style = {{height:50, width:120, borderRadius:14, backgroundColor:'#0073C0'}}>
        <Text style = {{color:'white', marginTop:'2%', alignSelf:'center', fontSize:15}}>Select</Text>
          {/* {`    Select \n Category`} */}
        <Text style = {{color:'white', alignSelf:'center', fontSize:15}}>Category</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style = {{marginRight:'15%', }}>
        <View style = {{height:50, width:120, borderRadius:14, backgroundColor:'#0073C0'}}>
        <Text style = {{color:'white', marginTop:'2%', alignSelf:'center', fontSize:15}}>Select </Text>
          {/* {`      Select \nSub-Category`} */}
        <Text style = {{color:'white', alignSelf:'center', fontSize:15}}>Sub-Category</Text> 
        </View>
        </TouchableOpacity>
        </View>
        
        <View style = {{marginLeft:'6%', marginRight:'6%'}}>
        <TextField
        label='Select City'
        tintColor = '#c2c0c0'
        style  = {{activeLineWidth : 1, lineWidth : 0.7}}
        onChangeText={ (name) => this.setState({ name }) }
        />
        </View>
        <View style = {{marginLeft:'6%', marginRight:'6%'}}>
        <TextField
        label='Select State'
        tintColor = '#c2c0c0'
        style  = {{activeLineWidth : 1, lineWidth : 0.7}}
        onChangeText={ (name) => this.setState({ name }) }
        />
        </View>
        <View style = {{marginLeft:'6%', marginRight:'6%'}}>
        <TextField
        label='Area'
        tintColor = '#c2c0c0'
        style  = {{activeLineWidth : 1, lineWidth : 0.7}}
        onChangeText={ (name) => this.setState({ name }) }
        />
        </View>

        <View style = {{marginTop:'5%',justifyContent:'flex-start'}}>    
        <RadioGroup 
        //onSelect = {(index, value) => this.onSelect(index, value)}
        size={24}
        style = {{flexDirection:'row'}}
        thickness={2}
        color='black'
        //highlightColor='#ccc8b9'
        >
        <RadioButton value={'item1'} style = {{marginLeft:'28%'}} >
          <Text>Public</Text>
        </RadioButton>

        <RadioButton value={'item2'} style = {{marginLeft:'15%'}}>
          <Text>Private</Text>
        </RadioButton>
 
        </RadioGroup>      
        <Text >{this.state.text}</Text>      
        </View>

        <View style = {{flexDirection: 'row',marginTop:'5%', justifyContent:'space-between'}}>
        <TouchableOpacity style = {{marginLeft:'22%', }}>
        <View style = {{height:40, width:120, borderRadius:14, backgroundColor:'#0073C0'}}>
        <Text style = {{color:'white', marginTop:'5%', alignSelf:'center', fontSize:15}}>Save</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style = {{marginRight:'15%', }}>
        <View style = {{height:40, width:120, borderRadius:14, backgroundColor:'#0073C0'}}>
        <Text style = {{color:'white', marginTop:'5%', alignSelf:'center', fontSize:15}}>Cancel </Text>
        </View>
        </TouchableOpacity>
        </View>

        </ScrollView> 
        </View>
        
        
    );
  }
}