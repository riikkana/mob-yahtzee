import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 40,
    marginBottom: 15,
    backgroundColor: '#af53bd',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  footer: {
    margin: 20,
    backgroundColor: '#af53bd',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 0,
    padding: 10
  },

  pointsRow: {
    fontWeight: 'bold',
    paddingTop: 20,
  },
  flex: {
    flexDirection: "row"
  },
  
  textStatus: {
    padding: 10,
    margin: 10
  },

  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73347c",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#cbcbf3",
    fontSize: 20
  }
});