import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: '#303030',
    height: '100%',
  },
  appBar: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 65,
  },
  mainScreen: {
    backgroundColor: '#212121',
    paddingTop: 40,
    paddingHorizontal: 30,
    flex: 1,
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
  },
  line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginVertical: 50,
  },
  title: {
    color: 'lightgray',
    fontSize: 15,
    letterSpacing: 2,
    paddingBottom: 10,
  },
  textEntry: {
    color: 'lightgreen',
    fontSize: 28,
    letterSpacing: 2,
    paddingBottom: 28,
    fontWeight: 'bold',
  },
  emailBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  email: {
    color: 'lightgray',
    paddingLeft: 10,
    fontSize: 18,
    letterSpacing: 1,
  },
  button: {
    height: 60,
    width: 60,
    backgroundColor: '#424242',
    borderRadius: 30,
    position: 'absolute',
    bottom: 50,
    right: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    color: 'white',
    fontSize: 30,
  },
});

export default styles;
