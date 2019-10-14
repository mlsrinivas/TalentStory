import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    profileimage:{
        borderRadius:22.5,
        height:45,
        width:45,
        marginLeft:'4%',
        marginTop:'8%'
    },
    profilenamesview:{
        flexDirection:'column',
        marginLeft:'6%', 
        marginTop:'10%'
    },
    iconarrowstyle:{
        color:'black',
        marginTop:'12%',
        marginLeft:'35%'
        //justifyContent:'flex-end'
    },
    imageAndText:{
        flex:1,
        justifyContent:'flex-start',
        flexDirection:'row',
        margin:'5%'
   },
   circleBorder:{
        height:32,
        width:32,
        borderRadius:16,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#DADADA'
  },
  imagestyle:{
        height:15,
        width:15,
        position:'absolute',
        marginLeft:'2.2%', 
        marginTop:'2%'
  },
  linestyle:{
        borderBottomColor:'#f2f2f2',
        borderBottomWidth:1,
        marginLeft:'18%'
  },
  listview:{
       margin:'2%'
  }   

})

export default styles;