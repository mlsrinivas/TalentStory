import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../Styles/FundingStyles'

export default class Funding extends React.Component {
  static navigationOptions = ({ navigation }) => ({
		header: null,
  })
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    return (
        <View style={styles.container}>
          <View style={[{justifyContent:'center'}, styles.margins, styles.container]}>
            <Text style={[styles.fundingText, {fontSize:23, marginBottom:'10%'}]}>Are you a</Text>
            <TouchableOpacity style={[{marginBottom: '4%'}, styles.fundingButton]} onPress={()=>this.props.navigation.navigate('EnterPreneurForm')}>
              <Text style={styles.fundingText}>Startup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fundingButton}>
              <Text style={styles.fundingText}>Investor</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={[{
                bottom:'5%',
            },styles.fundingButton,styles.margins]}>
              <Text style={[styles.fundingText, {fontSize:15}]}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
      
    );
  }
}
//rgb(54,1,103) //blue
//rgb(118,118,118) //grey