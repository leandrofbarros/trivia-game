import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 18,
    marginHorizontal: 16,
    padding: 8,
    minHeight: 350,
    elevation: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  contentNumber: {
    alignItems: 'center',
  },
  number: {
    fontSize: 18,
    fontWeight: '500',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 50,
    marginHorizontal:40,
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    width: 100,
    textAlign: 'center',
  },
  buttonGreen: {
    backgroundColor: 'green',
  },
  buttonRed: {
    backgroundColor: 'red',
  },
  contentButton: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  }
})
