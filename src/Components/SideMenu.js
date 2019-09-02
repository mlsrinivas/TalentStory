import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Icon } from 'native-base';
import styles from '../Styles/Sidebar';


export default class SideMenu extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ScrollView>
        <View style={{ flex:1,flexDirection: 'column'}}>
             <TouchableOpacity style={{ flex:1,flexDirection:'row' }}
                               onPress={()=>{this.props.navigation.navigate('Login')}}>
                <Image source={require('../../assets/Splash.png')}
                       style={styles.profileimage}/>
                        <View style={styles.profilenamesview}>
                            <Text style={{ fontSize:15,color:'#808080',fontWeight:'bold'}}>amazomprime</Text>
                            <Text style={{ fontSize:10,color:'#BeBeBe' }}>View Your Profile</Text>
                        </View>
                <Icon name='ios-arrow-forward' 
                      style={styles.iconarrowstyle}
                      onPress={()=>{this.props.navigation.navigate('Login')}}/>
             </TouchableOpacity>
            <View style={{ borderBottomColor:'#f2f2f2',borderBottomWidth:1,marginTop:'4%' }} />
        
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/feedback.png')}
                           style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black' }}>
                                Feedback
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
             
             <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Scholarship')}}
                               style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/scholarship.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black' }}>
                                    Scholarship
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/scholarship.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black' }}>
                                    My Wallet
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('JoinedCommunity')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/jionedcommunity.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black' }}>
                                    Joined Communities
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CreatedCommunity')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/createdcommunity.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black' }}>
                                    Created Communities
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/rating.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black' }}>
                                    Rate the App
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/rating.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black' }}>
                                    Share with Friends
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Aboutus')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/aboutus.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black' }}>
                                    About Us
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/logout.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                            <Text style={{ color:'black' }}>
                                Logout
                            </Text>
                     </View>
                </View>
            </TouchableOpacity>
            <View style={{ borderBottomColor:'#DADADA',borderBottomWidth:1 }} />
            
            <View style={{ height:110 }}>
                <View style={{ height:90,backgroundColor:'#F5F5F5',alignItems:'center',justifyContent:'center',flexDirection:'column' }}>
                    <Text style={{ color:'#696969' }}>Version: 1.0.12</Text>
                    <Text style={{ color:'#808080' }}>Powered by: TalentStory</Text>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Scanner')}}>
                            <Image source={require('../../assets/qrcode.png')} 
                                    style={{height:50,width:20,marginTop:'1%'}}/>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
      </ScrollView>
    );
  }
}
