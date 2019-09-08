import React from 'react'
import { View,
    ScrollView,
    TextInput,
    Text,
    colors,
    StyleSheet,
    Image, 
    TouchableOpacity,  
    ImageBackground,
    Dimensions
    } from 'react-native';
import { TextField } from 'react-native-material-textfield';
//import AntDesign from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Styles/MywalletStyles'


export default class Mywallet extends React.Component{
    render(){
        return(
            <View style = {{flex:1, height:'100%', width:'100%'}}>
                <View style = {{height:'41%', width:'94%', backgroundColor: '#0073C0', margin:'3%', borderRadius:5}}>
                    <Text style = {{textAlign:'center', fontSize:15, color:'white', marginTop:'5%', fontWeight:'bold'}}>Srinivas ML</Text>
                    <View style = {{height:100, width:100,borderRadius:50, backgroundColor:'white', alignSelf:'center', marginTop:'5%'}}>

                    </View>
                    <View style = {{justifyContent:'space-between', flexDirection:'row',  margin:'7%'}}>
                        <Text style = {{fontSize:15, color:'white', fontWeight:'bold'}}>Available balance</Text>
                        <View style = {{height:35, width:125, backgroundColor:'white', borderRadius:30, borderWidth:1, borderColor:'#F7A502', alignContent:'center'}}>
                            <TouchableOpacity style = {{justifyContent:'center', marginTop:'5%', flexDirection:'row'}}>
                            <AntDesign size={15} color='#7CD41C' name='caretdown' />
                            <Text style = {{fontSize:15, color:'black', marginLeft:'3%', fontWeight:'bold'}}>TCS 10000</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {{alignItems:'center'}}>
                    <TouchableOpacity style = {{height:23, width:125, backgroundColor:'#00897D', borderRadius:30, borderWidth:2, borderColor:'white', alignItems:'center'}}>
                    <Text style = {{fontSize:12, color:'white',alignItems:'center', fontWeight:'bold' }}>Terms and Conditions</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    <View style = {{height:50, width:'100%', backgroundColor:'#0073C0'}}>
                        <View style = {{ justifyContent:'space-around', flexDirection:'row', alignContent:'center', marginTop:'4%'}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize:15, color:'white', fontWeight:'bold'}}>RECEIVED</Text>
                        </TouchableOpacity>
                        <TouchableOpacity> 
                        <Text style = {{fontSize:15, color:'white', fontWeight:'bold'}}>SENT</Text>
                        </TouchableOpacity>
                        </View>
                    </View> 
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SendCoins')}}
                                style = {{alignItems:'flex-end', margin:'7%', marginTop:'60%'}}>
                    <Image source = {require('../../assets/accepts.png')} />
                    </TouchableOpacity>         
            </View>
        );
    }

//     renderTabs() {
//         const half = Dimensions.get('window').width / 2;
//         var pendingStyle, pendingText;
//         var finishedStyle, finishedText;
    
//         // if (this.props.selectedTab === 'pending') {
//         //   pendingStyle = styles.selectedTab;
//         //   pendingText = styles.selectedText;
//         // } else {
//         //   finishedStyle = styles.selectedTab;
//         //   finishedText = styles.selectedText;
//         // }

// return (
//     // <View style={styles.tabsContainer}>
//     //   <TouchableOpacity style={[styles.tab, pendingStyle, { width: half }]} onPress={() => this.props.changeTab({ tab: 'pending' })}>
//     //     <Text style={[styles.tabText, pendingText]}>Pending</Text>
//     //   </TouchableOpacity>
//     //   <TouchableOpacity style={[styles.tab, finishedStyle, { width: half }]} onPress={() => this.props.changeTab({ tab: 'finished' })}>
//     //     <Text style={[styles.tabText, finishedText]}>Joined</Text>
//     //   </TouchableOpacity>
//     // </View>
//     <View style={styles.tabsContainer}>        
//         <TouchableOpacity style={[styles.tab, pendingStyle, { width: half }]}>
//             <Text>RECEIVED</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.tab, finishedStyle, { width: half }]}>
//             <Text>SENT</Text>
//         </TouchableOpacity>
//     </View>
//   );
// }
}
