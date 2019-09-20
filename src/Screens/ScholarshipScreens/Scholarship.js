import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native'
import Styles from  '../../Styles/ScholarshipStyles/ScholarshipStyles'

export default class Scholarship extends React.Component{
    render(){
        return(
          <View style={{ marginTop:'40%' }}>
             <TouchableOpacity style={Styles.button} onPress={()=>{this.props.navigation.navigate('Apply')}}> 
                <Text style = {{marginLeft:'5%'}}>Apply Scholarship</Text>
                <Image source={require('../../../assets/postscholarship.png')}
                       style={{ height:30,width:30, marginRight:'5%'}}/>
             </TouchableOpacity>

            <View style={{marginTop:'5%'}}>
             <TouchableOpacity style={Styles.button} onPress={()=>{this.props.navigation.navigate('PostScholarship')}}>
                <Text style={{ marginLeft:'5%'}}>Post Scholarship</Text>
                <Image source={require('../../../assets/postscholarship.png')}
                       style={{ height:30,width:30, marginRight:'5%' }}/>
             </TouchableOpacity>
             </View>
             <View style={{ marginTop:'5%' }}>
             <TouchableOpacity style={Styles.button} onPress={()=>{this.props.navigation.navigate('ScholarshipHistory')}}>
                <Text style={{ marginLeft:'5%'}}>View Scholarship</Text>
                <Image source={require('../../../assets/postscholarship.png')}
                       style={{ height:30,width:30, marginRight:'5%' }}/>
             </TouchableOpacity>
             </View>
           
          </View>
        );
    }
}