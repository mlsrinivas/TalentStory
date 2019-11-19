import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    tsimage:{
        height :50,
        width:50,
        marginTop:'2%'
    },
    soibtn:{
      alignSelf:'flex-start',
      height:40,
      width:150, 
      backgroundColor:'#0073C0',
      marginTop:'3%',
    },
    btns:{
        marginTop:'3%', 
        backgroundColor:'white',
        height:50,
        width:'98%',
        shadowColor: '#000000',
        shadowOffset:{ width:0, height:2 },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        elevation: 2,
        flexDirection:'row'
    },
    tsimage1:{
      height:30,
      width:30,
      margin:'3%'
    },
    textStyle:{
        alignSelf:'center',
        paddingHorizontal:20,
        fontSize:18,
        color:'gray'
    }
})

export default styles