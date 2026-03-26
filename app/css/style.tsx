import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'column',
  },
  input:{
    padding: 10,
    margin:10,
    borderColor:"#ccc",
    borderWidth: 1,
    borderRadius:10,
    width:350,
  },
  direita:{
    width:350,
    display:'flex',
    justifyContent:'flex-start',
  },
  esquerda:{
    width:350,
    display:'flex',
    justifyContent:'flex-end',
  },
  form:{
    display: 'flex',
    justifyContent:'center',
    width:350,
  },
  btn:{
width:150,
height:50,
backgroundColor:'blue',
borderRadius:10,
display:'flex',
alignItems:'center',
justifyContent:'center',
color:'white'
  },
  img:{
    width:300,
    height:45,
  }
});

export default styles;