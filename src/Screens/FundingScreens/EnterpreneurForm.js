import React, {useRef} from 'react';
import { View, Text, Dimensions, TextInput } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
//import RadioButton from 'react-native-radio-button' 
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Dropdown } from 'react-native-material-dropdown';
import ModalDropdown from 'react-native-modal-dropdown';


const screenWidth = Dimensions.get('window').width
export default class EnterPreneurForm extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
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
    //let textInput = useRef(null);
      return(
        <ScrollView style={{flex:1}}>
              <TextField
                label='Startup Name'
                tintColor = 'rgb(10,111,179)'
                characterRestriction = {50}
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'7%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (startup) => this.setState({ startup }) }
                animationDuration = {0}
              />
              <TextField
                label='Deal Maker Name'
                tintColor = 'rgb(10,111,179)'
                characterRestriction = {50}
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'3%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (dealMaker) => this.setState({ dealMaker }) }
              />
              <View style={{flexDirection:'column', alignItems: 'center', marginTop: '3%'}}>
                <Text style={{fontSize:22, fontWeight: 'bold', color: 'rgb(2,149,135)'}}>Startup Logo</Text>
                <FontAwesome name = "user-circle" size = {100} color = 'rgb(236,240,241)' style={{marginTop: 15}} />
                <TouchableOpacity style={{width: 100, height: 25, alignItems:'center', justifyContent: 'center', backgroundColor: 'rgb(0,115,192)', marginTop: 15}}>
                  <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 10}}>UPLOAD PHOTO</Text>
                </TouchableOpacity>
              </View>
              <TextField
                label='Linkedin Profile'
                tintColor = 'rgb(10,111,179)'
                characterRestriction = {100}
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'3%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (linkedIn) => this.setState({ linkedIn }) }
                
              />
              <View style={{marginLeft: '6%', marginRight: '6%', height: 60, marginTop: '3%'}}>
                <TextInput 
                  placeholder = 'Choose Sector'
                  style = {{fontSize: 17, color: 'rgb(111,111,111)'}}
                  value={this.state.inputValue}
                  onChangeText = {(inputValue) => {this.setState({ inputValue })}}
                />
                <View style={{borderWidth:1, borderColor: 'rgb(110,110,110)'}} />
              </View>
              <TextField
                label='Date of Funding'
                tintColor = 'rgb(10,111,179)'
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'1%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (date) => this.setState({ date }) }
                autoFocus={true}
              />
              <TextField
                label='About Idea(Elevator pitch)'
                tintColor = 'rgb(10,111,179)'
                characterRestriction = {500}
                multiline={true}
                numberOfLines={10}
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%', paddingBottom: '28%' }}
                inputContainerStyle={{backgroundColor:'rgb(240,240,240)', marginTop:'3%', paddingBottom: '28%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (aboutIdea) => this.setState({ aboutIdea }) }
                
              />
              <View style={{marginLeft: '6%', marginRight: '6%', height: 60, marginTop: '3%'}}>
                <TextInput 
                  placeholder = 'Technologies used(IT Operations,SaaS)'
                  style = {{fontSize: 17, color: 'rgb(111,111,111)'}}
                  value={this.state.inputValue}
                  onChangeText = {(inputValue) => {this.setState({ inputValue })}}
                />
                <View style={{borderWidth:1, borderColor: 'rgb(110,110,110)'}} />
              </View>
              <Dropdown
                dropdownOffset={{top:5}}
                containerStyle={{borderWidth:1, borderColor:'rgb(82,82,82)', marginLeft: '6%', marginRight: '6%', marginTop: 1}}
                rippleCentered={true}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                data={data}
                valueExtractor={({value})=> value}
                itemCount = {10}
                label='Select Product Stage'
                //onChangeText={(value)=>{this.onChangeTextPress(item.name, value)}}
              />
              <Dropdown
                dropdownOffset={{top:5}}
                containerStyle={{borderWidth:1, borderColor:'rgb(82,82,82)', marginLeft: '6%', marginRight: '6%', marginTop: 20}}
                rippleCentered={true}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                data={data}
                valueExtractor={({value})=> value}
                itemCount = {10}
                label='Select Business Model'
                //onChangeText={(value)=>{this.onChangeTextPress(item.name, value)}}
              />
              <TextField
                label='HQ Location'
                tintColor = 'rgb(10,111,179)'
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'3%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (hqLocation) => this.setState({ hqLocation }) }
                
              />
              <TextField
                label='Website'
                tintColor = 'rgb(10,111,179)'
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'3%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (website) => this.setState({ website }) }
                
              />
              <TextField
                label='No of Current Customers'
                tintColor = 'rgb(10,111,179)'
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'3%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                keyboardType='numeric'
                onChangeText={ (noOfCustomers) => this.setState({ noOfCustomers }) }
                
              />
              <TextField
                label='No of Employees'
                tintColor = 'rgb(10,111,179)'
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'3%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (noOfEmployees) => this.setState({ noOfEmployees }) }
                
              />
              <TextField
                label='Avg revenue per month(in lakhs)'
                tintColor = 'rgb(10,111,179)'
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'3%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (avgRevenue) => this.setState({ avgRevenue }) }
                
              />
              <TextField
                label='Funding Received(in USD)'
                tintColor = 'rgb(10,111,179)'
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'3%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (fundReceived) => this.setState({ fundReceived }) }
                
              />
              <TextField
                label='Funding Required(in USD)'
                tintColor = 'rgb(10,111,179)'
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'3%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (name) => this.setState({ name }) }
                
              />
              <TextField
                label='Achievements/Recognitions'
                tintColor = 'rgb(10,111,179)'
                characterRestriction = {500}
                multiline={true}
                numberOfLines={10}
                lineWidth = {2}
                activeLineWidth = {2}                 
                labelTextStyle={{paddingLeft: '5%', paddingBottom: '28%' }}
                inputContainerStyle={{backgroundColor:'rgb(240,240,240)', marginTop:'3%', paddingBottom: '28%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (achievements) => this.setState({ achievements }) }
                
              />
              <TouchableOpacity>
                <View style={{marginTop: 15, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, width: screenWidth-40, backgroundColor: 'rgb(2,149,135)', height: 50, marginBottom: 20}}>
                  <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>SAVE</Text>
                </View>
              </TouchableOpacity>
        </ScrollView>
      )
  }
}