import React, {useRef} from 'react';
import { View, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
//import RadioButton from 'react-native-radio-button' 
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import { Dropdown } from 'react-native-material-dropdown';
import ModalDropdown from 'react-native-modal-dropdown';



export default class EnterPreneurForm extends React.Component {
  constructor() {
    super();
    this.state = {
      autoFocus : false,
    };
    //this.textInput = React.createRef();
    //this.focusTextInput = this.focusTextInput.bind(this);
  }

  render() {
    //let textInput = useRef(null);
      return(
        <View>
            <TouchableOpacity style={{backgroundColor:'rgb(240,240,240)'}} onPress={() => {
          this.setState({
              autoFocus: true
          })
        }}>
            <TextField
        label='Tell about your community'
        tintColor = '#B5B5B5'
        style  = {{activeLineWidth : 0, lineWidth : 0}}
        multiline={true}
        numberOfLines={10}
        lineWidth={0}
        activeLineWidth={0}
        //autoFocus={this.state.autoFocus?true:false}
        onChangeText={ (name) => this.setState({ name }) }
        //inputRef={textInput} 
        focus={this.state.autoFocus}
        />
         <View style={{marginTop:30,borderWidth:2,borderColor:'rgb(110,110,110)'}}/>
            </TouchableOpacity>
        </View>
      )
  }
}