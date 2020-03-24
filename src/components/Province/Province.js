import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import {getAllApiReport} from '../../utils/apiFunction';
import ProvinceStyles from '../../styles/ProvinceStyles';
import i18n from '../../i18n/i18n';

class Province extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAllProvince: [],
      textProvinsi: '',
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    getAllApiReport().then(res => {
      this.setState({
        dataAllProvince: res.wilayah,
      });

      this.arrayholder = res.wilayah;
    });
    console.log('Masuk CDM');
  }

  OrderListBy = prop => {
    return function(a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  };

  SearchFilterFunction = text => {
    const newData = this.arrayholder.filter(function(item) {
      const itemData = item.provinsi
        ? item.provinsi.toUpperCase()
        : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataAllProvince: newData,
      textProvinsi: text,
    });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={ProvinceStyles.provinceContainer}>
          <View style={ProvinceStyles.logoContainer}>
            <Image
              style={ProvinceStyles.sizeLogo}
              source={require('../../assets/title-logo.png')}
            />
          </View>
          <View style={ProvinceStyles.searchCountryContainer}>
            <TextInput
              style={ProvinceStyles.inputCountry}
              onChangeText={text => this.SearchFilterFunction(text)}
              value={this.state.text}
              underlineColorAndroid="transparent"
              placeholder={i18n.PROVINSI.PLACEHOLDER_SEARCH_PROVINSI}
            />
          </View>

          <View style={ProvinceStyles.itemCountryContainer}>
            <Text style={ProvinceStyles.titleprovince}>
              {i18n.PROVINSI.TITLE_PROVINSI_REPORT}
            </Text>
            <FlatList
              style={{marginTop: 8}}
              // data={this.state.dataAllProvince.sort(
              //   this.OrderListBy('provinsi'),
              // )}
              data={this.state.dataAllProvince}
              renderItem={({item}) => (
                <View style={ProvinceStyles.statusprovinceContainer}>
                  <Text style={ProvinceStyles.textCountry}>
                    {item.provinsi}
                  </Text>
                  <Text style={ProvinceStyles.textStatus}>
                    {i18n.CONFIRMED} : {item.positif}
                  </Text>
                  <Text style={ProvinceStyles.textStatus}>
                    {i18n.RECOVERED} : {item.sembuh}
                  </Text>
                  <Text style={ProvinceStyles.textStatus}>
                    {i18n.DEATH} : {item.meninggal}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Province;
