import React from 'react'
import { View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native'
import styles from '../Styles/Aboutusstyles' 

export default class Aboutus extends React.Component {

    render(){ 
        return(
            <View style={{ alignItems:'center', justifyContent:'center' }}>
                  <Image
                       style={styles.tsimage}
                       source={require('../../assets/ts.png')}/>
                  
                  <Text style={{ fontWeight:'bold',fontSize:20,color:'#808080' }}>Talent Story</Text>
                  
                  <View style={styles.soibtn}>
                      <Text style={{ color:'white',alignSelf:'center',marginTop:4,fontWeight:'bold' }}>Story of Innovations</Text>
                  </View>
                  
                  <Text style={{ marginTop:'3%',color:'gray' }}>This is social media plaform will enable startups,</Text>
                   <Text style={{ color:'gray' }}>msme's and students towards the common goal</Text>
                   <Text style={{ color:'gray' }}>of nation building bu sharing various resources like</Text> 
                   <Text style={{ color:'gray' }}>technologies,business contacts and</Text>
                   <Text style={{ color:'gray' }}>Human Resources.</Text>  
                   <Text style={{ color:'gray' }}>Along with entertaining features like knowing the status</Text>
                   <Text style={{ color:'gray' }}>of the friends,networking with friends,finding new</Text>
                   <Text style={{ color:'gray' }}>friends,posting of photos,videos etc it also provides</Text>
                   <Text style={{ color:'gray' }}> more features likes Scholarships,T-Star,Funding and</Text>
                   <Text style={{ color:'gray' }}>Wallet(Loyalty Program).</Text>
                   
                   <View style={styles.btns}>
                      <Image style={styles.tsimage1} source={require('../../assets/ts.png')}/>             
                      <Text style={styles.textStyle}>Version: 1.0.12</Text>
                   </View>
                    
                   <TouchableOpacity style={styles.btns}>
                       <Image style={styles.tsimage1} source={require('../../assets/ts.png')}/>             
                       <Text style={styles.textStyle}>Report</Text>
                   </TouchableOpacity>
                    
                   <TouchableOpacity style={styles.btns}>
                      <Image style={styles.tsimage1} source={require('../../assets/ts.png')}/>             
                      <Text style={styles.textStyle}>Privacy Policy</Text>
                   </TouchableOpacity> 
                    
                   <TouchableOpacity style={styles.btns}>
                      <Image style={styles.tsimage1} source={require('../../assets/ts.png')}/>             
                      <Text style={styles.textStyle}>Contact Us</Text>
                   </TouchableOpacity>
            </View>
        )
    }

}

