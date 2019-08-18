import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    flex:2,
    //backgroundColor:'black',
  },
  login: {
    // flex:1,
    // alignItems:'flex-end',
    margin:5,
    //marginTop: 100,
    //marginBottom:'10%'
    

  },
  firstNameText: { 
    width:330,
    height:40,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset:{ width:0, height:2 },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
    borderRadius:3,
    paddingHorizontal :10,
    marginTop:15
  },
  buttonlogin:{
    width:330,
    height:40,
    backgroundColor: '#0073C0',
    borderRadius:5,
    marginTop:15

  },
  logintitle:{
    color: '#fff',
    textAlign:'center',
    //paddingLeft: 200,
    paddingTop: 8,
  }
    
  });

  export default styles
