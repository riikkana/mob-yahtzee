import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    paddingTop: 40,
    marginBottom: 15,
    backgroundColor: '#af53bd',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  iconContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 20, 
  },
  footer: {
    marginTop: 'auto',
    margin: 10,
    padding: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  goodLuck: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  textInput: {
    height: 50,
    width: '90%',
    marginBottom: 20,
    alignSelf: 'center',
  },
  rules: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 24,
  },
  playButton: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 5,
  },
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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
    fontSize: 16,
    padding: 10,
    margin: 10,
    fontWeight: 'bold'
  },
  throwsLeft: {
    padding: 0,
    margin: 5,
    fontStyle: 'italic',
  },
  playerName: {
    fontSize: 16,
  },
  totalPoints: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: 5,
  },
  safeArea: {
    flex: 1,
    //backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  headerCell: {
    backgroundColor: '#dfd4e1', // Voit vaihtaa väriä halutessasi
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  cell: {
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 16,
  },

});
  