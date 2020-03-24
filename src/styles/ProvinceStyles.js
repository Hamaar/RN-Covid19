import {StyleSheet} from 'react-native';

const ProvinceStyles = StyleSheet.create({
  provinceContainer: {
    flex: 1,
    padding: 14,
  },
  logoContainer: {
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sizeLogo: {
    width: 175,
    height: 30,
  },
  searchCountryContainer: {
    padding: 14,
    backgroundColor: '#AC5555',
    marginTop: 14,
    marginBottom: 14,
    borderRadius: 10,
  },
  inputCountry: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#AC5555',
    backgroundColor: '#FFFFFF',
  },
  itemCountryContainer: {
    backgroundColor: '#AC5555',
    flexWrap: 'nowrap',
    padding: 14,
    borderRadius: 10,
  },
  titleprovince: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  statusprovinceContainer: {
    backgroundColor: '#e18381',
    padding: 4,
    borderRadius: 10,
    marginTop: 8,
  },
  textCountry: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStatus: {
    fontSize: 14,
  },
});

export default ProvinceStyles;
