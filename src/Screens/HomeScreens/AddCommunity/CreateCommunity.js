import React from 'react';
import { View, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
//import RadioButton from 'react-native-radio-button' 
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Dropdown } from 'react-native-material-dropdown';
//import BottomTabsHeader from '../../../Components/ReUsableComponents/HomeScreenHeader/BottomTabsHeader'
//import SearchScreen from '../../SearchScreen'
import ModalDropdown from 'react-native-modal-dropdown';
import ToggleSwitch from 'toggle-switch-react-native'



export default class CreateCommunity extends React.Component {
  constructor() {
    super();
    this.state = {
      search: false,
      name: ''
    }
  }

  render() {
    const name = this.state;
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
    return (
      <View>
      <View style = {{marginLeft:'6%', marginRight:'6%'}}>
        <TextField
        label='Community Name'
        //baseColor = 'red'
        tintColor = '#B5B5B5'
        style  = {{activeLineWidth : 1, lineWidth : 0.7}}
        onChangeText={ (name) => this.setState({ name }) }
        />
        </View>
        <View style = {{marginLeft:'6%', marginRight:'6%'}}>
        <TextField
        label='Tell about your community'
        tintColor = '#B5B5B5'
        style  = {{activeLineWidth : 1, lineWidth : 0.7}}
        numberOfLines={10}
        multiline={true}
        //style={{}}
        onChangeText={ (name) => this.setState({ name }) }
        />
        </View>

        {/* <View>
          <Text style = {{color:'black', alignSelf:'center', marginTop:'2%', fontSize:13}}>Are you a startup</Text>
        </View> */}
        <View style = {{alignSelf:'center'}}>
        <ToggleSwitch
          isOn={false}
          onColor="#B5B5B5"
          offColor="gray"
          label="Are you a startup"
          labelStyle={{ color: "black", alignSelf:'center', fontSize:13 }}
          size="small"
          onToggle={isOn => console.log("changed to : ", isOn)}
        />
        </View>

        <View style = {{flexDirection: 'row',marginTop:'8%', justifyContent:'space-between'}}>
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
        <Dropdown
        label='Select City'
        data={data}
        itemCount = '10'
        />
        </View>

        <View style = {{marginLeft:'6%', marginRight:'6%'}}>
        <Dropdown
        label='Select State'
        data={data}
        itemCount = '10'
        />
        </View>

        {/* <View style = {{marginLeft:'6%', marginRight:'6%'}}>
        <ModalDropdown options={['option 1', 'option 2']}/>
        </View> */}

        
        {/* <View style = {{marginLeft:'6%', marginRight:'6%'}}>
        <TextField
        label='Select City'
        tintColor = '#B5B5B5'
        style  = {{activeLineWidth : 1, lineWidth : 0.7}}
        onChangeText={ (name) => this.setState({ name }) }
        />
        </View>
        <View style = {{marginLeft:'6%', marginRight:'6%'}}>
        <TextField
        label='Select State'
        tintColor = '#B5B5B5'
        style  = {{activeLineWidth : 1, lineWidth : 0.7}}
        onChangeText={ (name) => this.setState({ name }) }
        />
        </View> */}

        <View style = {{marginLeft:'6%', marginRight:'6%'}}>
        <TextField
        label='Area'
        tintColor = '#B5B5B5'
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
        </View>
    )
  }
}