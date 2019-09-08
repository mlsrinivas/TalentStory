import React from 'react'
import { View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native'
import styles from '../Styles/Aboutusstyles'
import Entypo from 'react-native-vector-icons/Entypo' 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler';

export default class Aboutus extends React.Component {

    render(){ 
        return(
            // <ScrollView>
            <View style={{ alignItems:'center', justifyContent:'center' }}>
                  <Image
                       style={styles.tsimage}
                       source={require('../../assets/ts.png')}/>
                  
                  <Text style={{ fontWeight:'bold',fontSize:25,color:'#808080' }}>TalentStory</Text>
                  
                  <View style={styles.soibtn}>
                      <Text style={{ color:'white',alignSelf:'center', marginTop:'4%',fontWeight:'bold',fontSize:15 }}>Story of Innovations</Text>
                  </View>

                   <View>
                       <Text style = {{ color:'gray', textAlign:'center',  marginTop:'3%', fontSize:15}}> 
                        { `This is social media plaform will enable startups, \n  msme's and students towards the common goal \n of nation building bu sharing various resources like \n technologies,business contacts and \n Human Resources. \n Along with entertaining features like knowing the status \n of the friends,networking with friends,finding new \n friends,posting of photos,videos etc it also provides \n more features likes Scholarships,T-Star,Funding and \n Wallet(Loyalty Program).`} </Text>
                   </View>
                   
                   <View style={styles.btns}>
                      {/* <Image style={styles.tsimage1} source={require('../../assets/ts.png')}/>*/}
                      <Entypo size = {25} color = 'gray' name = 'back-in-time' style = {{ alignSelf:'center', marginLeft:'3%'}}/>
                      <Text style={styles.textStyle}>Version Code: 1.0.12</Text>
                   </View>
                    
                   <TouchableOpacity style={styles.btns}>
                       {/* <Image style={styles.tsimage1} source={require('../../assets/ts.png')}/>*/}
                       <MaterialCommunityIcons size = {25} color = 'black' name = 'bug' style = {{ alignSelf:'center', marginLeft:'3%'}}/>
                       <Text style={styles.textStyle}>Report</Text>
                   </TouchableOpacity>
                    
                   <TouchableOpacity style={styles.btns}>
                      {/* <Image style={styles.tsimage1} source={require('../../assets/ts.png')}/>*/}
                      <SimpleLineIcons size = {25} color = 'black' name = 'lock' style = {{ alignSelf:'center', marginLeft:'3%'}}/>
                      <Text style={styles.textStyle}>Privacy Policy</Text>
                   </TouchableOpacity> 
                    
                   <TouchableOpacity style={styles.btns}>
                      {/* <Image style={styles.tsimage1} source={require('../../assets/ts.png')}/>*/}
                      <AntDesign size = {25} color = 'black' name = 'mail' style = {{ alignSelf:'center', marginLeft:'3%'}}/>
                      <Text style={styles.textStyle}>Contact Us</Text>
                   </TouchableOpacity>
            </View>
            // </ScrollView>
        )
    }

}

