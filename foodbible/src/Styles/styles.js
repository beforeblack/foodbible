import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  foodlistCont: {
    flex: 1,
    width: '90%'
  },
  FoodlistText: {
    fontSize: 20,
    textAlign: 'center'
  },
  container: {
    flex: 1,
  },
  subCont: {
    flex:1,
    alignItems: 'center'
  },
  btnContainer: {
    margin: 10,
    width:20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 60
  },
  foodCardLayout: {
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  foodCardText: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    padding: 10,
    fontSize: 20
  },
  foodCardTextBtn: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
