import React from 'react'
import { View,Image,Text,TouchableOpacity } from 'react-native'
import styles from '../Styles/CompanyProfileStyles'

export default class CompanyProfile extends React.Component{
    render(){
       return(
       <View style={{ flex:1 }}>
       <View>
           <View style={{ justifyContent:'center',alignItems:'center' }}>
                <View style={styles.circleStyle}>
                        <Image style={styles.imageCircle} source={require('../../assets/jionedcommunity.png')}/>
                </View>
                <Text style={{ fontWeight:'bold',fontSize:20,marginTop:'2%' }}>Company Name</Text>
          </View>
          <View style={{marginLeft:'4%',marginRight:'4%' }}>
                <View style={{ height:25,width:100,backgroundColor:'#0073C0',marginTop:'1%' }}>
                    <Text style={{ alignSelf:'center',color:'white',fontWeight:'bold',marginTop:'3%',fontSize:12 }}>Members:</Text>
                </View>
                <View style={{ marginTop:'5%',flexDirection:'row' }}>        
                <Text style={{ color:'#696969' }}>Categories:</Text>  
                <Text style={{ color:'black',fontSize:14,marginLeft:'13%' }}>Startup,MSMT &{"\n"}Interpreneurship,Student</Text>
                </View>
          </View>
          <View style={{ borderBottomColor:'#f2f2f2',borderBottomWidth:1,marginTop:'5%' }} />
          
          <View style={{marginLeft:'4%',marginRight:'4%' }}>
                <View style={{ marginTop:'5%',flexDirection:'row' }}>        
                        <Text style={{ color:'#696969' }}>Sub Categories:</Text>  
                        <Text style={{ color:'black',fontSize:14,marginLeft:'3%' }}>Computer Vision,Natural{"\n"}languages,Speech{"\n"}recognizion,Electrical&Elec-{"\n"}tronics Texh,IT services,Collge{"\n"}club_UG,Academics</Text>
                </View>
          </View>          
          <View style={{ borderBottomColor:'#f2f2f2',borderBottomWidth:1,marginTop:'5%' }} />
           
          <View style={{marginLeft:'4%',marginRight:'4%',marginTop:'5%' }}>
              <Text style={{ color:'#696969' }}>Sub Categories:</Text>  
              <Text style={{ color:'black',fontSize:14 }}>our community is about group of people who want to{"\n"}
                                                         take their ideas to next level by building startups and{"\n"}
                                                         become entrepreneurs</Text>
          </View>
          <View style={{ borderBottomColor:'#f2f2f2',borderBottomWidth:1 }} />

          <View style={{marginLeft:'4%',marginRight:'4%',marginTop:'5%' }}>
                <View style={{ height:25,width:100,backgroundColor:'#0073C0' }}>
                    <Text style={{ alignSelf:'center',color:'white',fontWeight:'bold',marginTop:'3%',fontSize:12 }}>Telangana</Text>
                </View>
                <View style={{ marginTop:'5%',flexDirection:'row' }}>        
                <Text style={{ color:'#696969' }}>City:</Text>  
                <Text style={{ color:'black',fontSize:14,marginLeft:'25%' }}>Hyderabad</Text>
                </View>
          </View>
          <View style={{ borderBottomColor:'#f2f2f2',borderBottomWidth:1,marginTop:'3%' }} />
       </View>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate("Profile")}
                         style={{justifyContent:'flex-end',height:40,marginLeft:'2%',marginRight:'2%',backgroundColor:'#0073C0',marginTop:'2%' }}>
           <Text style={{ alignSelf:'center',fontSize:14,color:'white',marginBottom:'2%' }}>Admin Profile</Text>
        </TouchableOpacity>
       </View>         
       );    
    }
}