import React from 'react';
import { View, Text, Dimensions, TextInput } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Dropdown } from 'react-native-material-dropdown';

const screenWidth = Dimensions.get('window').width
export default class InvestorForm extends React.Component {
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
                label='Investor Name'
                tintColor = 'rgb(10,111,179)'
                characterRestriction = {50}
                lineWidth = {2}
                activeLineWidth = {2}                                  
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'7%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (startup) => this.setState({ startup }) }
                animationDuration = {0}
                autoFocus={true}
              />
              <Dropdown
                dropdownOffset={{top:5}}
                containerStyle={{borderWidth:1, borderColor:'rgb(82,82,82)', marginLeft: '6%', marginRight: '6%', marginTop: 1}}
                rippleCentered={true}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                data={data}
                valueExtractor={({value})=> value}
                itemCount = {10}
                label='Select Investor Type'
                //onChangeText={(value)=>{this.onChangeTextPress(item.name, value)}}
              />
              <TextField
                label='IFVC, Name of VC'
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
                <Text style={{fontSize:22, fontWeight: 'bold', color: 'rgb(2,149,135)'}}>Investor Image</Text>
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
              <TextField
                label='No of Investments(till date)'
                tintColor = 'rgb(10,111,179)'
                lineWidth = {2}
                activeLineWidth = {2}                                  
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'1%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (date) => this.setState({ date }) }
                
              />
              <TextField
                label='Amount Invested(In USD)'
                tintColor = 'rgb(10,111,179)'
                lineWidth = {2}
                activeLineWidth = {2}                                  
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'3%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (hqLocation) => this.setState({ hqLocation }) }
                
              />
              <TextField
                label='No of Exists Made'
                tintColor = 'rgb(10,111,179)'
                lineWidth = {2}
                activeLineWidth = {2}                                  
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'3%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                onChangeText={ (website) => this.setState({ website }) }
                
              />
              <TextField
                label='Startups Funded'
                tintColor = 'rgb(10,111,179)'
                lineWidth = {2}
                activeLineWidth = {2}                                  
                labelTextStyle={{paddingLeft: '5%' }}
                inputContainerStyle={{backgroundColor: 'rgb(240,240,240)', marginTop:'3%', paddingLeft: '5%'}} 
                containerStyle={{marginLeft: '6%', marginRight: '6%'}}
                keyboardType='numeric'
                onChangeText={ (noOfCustomers) => this.setState({ noOfCustomers }) }
                
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
              <Dropdown
                dropdownOffset={{top:5}}
                containerStyle={{borderWidth:1, borderColor:'rgb(82,82,82)', marginLeft: '6%', marginRight: '6%', marginTop: 1}}
                rippleCentered={true}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                data={data}
                valueExtractor={({value})=> value}
                itemCount = {10}
                label='Select Funding Stage'
                //onChangeText={(value)=>{this.onChangeTextPress(item.name, value)}}
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