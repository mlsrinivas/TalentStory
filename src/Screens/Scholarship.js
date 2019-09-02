import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native'
import Styles from  '../Styles/ScholarshipStyles'

export default class Scholarship extends React.Component{
    render(){
        return(
          <View style={{ marginBottom:'40%',marginTop:'40%' }}>
             <TouchableOpacity style={Styles.button1}>
                <Text style={{ margin:'5%'}}>Apply Scholarship</Text>
                <Image source={require('../../assets/postscholarship.png')}
                       style={{ height:30,width:30,margin:'3%',marginHorizontal:125 }}/>
             </TouchableOpacity>

             <TouchableOpacity style={Styles.button2}>
                <Text style={{ margin:'5%'}}>Post Scholarship</Text>
                <Image source={require('../../assets/postscholarship.png')}
                       style={{ height:30,width:30,margin:'3%',marginHorizontal:130 }}/>
             </TouchableOpacity>

             <TouchableOpacity style={Styles.button3}>
                <Text style={{ margin:'5%'}}>View Scholarship</Text>
                <Image source={require('../../assets/postscholarship.png')}
                       style={{ height:30,width:30,margin:'3%',marginHorizontal:130 }}/>
             </TouchableOpacity>
           
          </View>
        );
    }
}