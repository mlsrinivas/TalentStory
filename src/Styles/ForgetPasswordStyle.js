import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    setimage:{
      height:200,
      width:360
    },
    container:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:150
    },
    txtinput:{
        width:300,
        height:40,
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOffset:{ width:0, height:2 },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        elevation: 2,
        paddingHorizontal:20,
        borderRadius:3,
        marginTop:15
    },
    buton:{
      width: 300,
      height:40,
      backgroundColor:'#0073C0',
      borderRadius:3,
      marginTop:14
    },
    txt:{
      color: '#fff',
      textAlign: 'center',
      paddingTop:8
    },
  });

  export default styles;