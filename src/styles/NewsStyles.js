import {StyleSheet} from 'react-native';

const NewsStyles = StyleSheet.create({
  newsContainer: {
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
  sizeLogoNews: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  itemCountryContainer: {
    backgroundColor: '#AC5555',
    flexWrap: 'nowrap',
    padding: 14,
    borderRadius: 10,
  },
  titleNews: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  statusNewsContainer: {
    backgroundColor: '#e18381',

    borderRadius: 10,
    marginBottom: 14,
  },
  textDateNews: {
    fontSize: 14,
  },
  textTitleNews: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDescNews: {
    fontSize: 14,
  },
});

export default NewsStyles;
