import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {getAllApiReport} from '../../utils/apiFunction';
import NewsStyles from '../../styles/NewsStyles';
import i18n from '../../i18n/i18n';
import moment from 'moment';
import HTMLView from 'react-native-htmlview';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAllnews: [],
    };
  }

  componentDidMount() {
    getAllApiReport().then(res => {
      this.setState({
        dataAllnews: res.berita,
      });
    });
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={NewsStyles.newsContainer}>
          <View style={NewsStyles.logoContainer}>
            <Image
              style={NewsStyles.sizeLogo}
              source={require('../../assets/title-logo.png')}
            />
          </View>

          <View style={NewsStyles.itemCountryContainer}>
            <Text style={NewsStyles.titleNews}>
              {i18n.NEWS_REPORT.NEWS_TITTLE_REPORT}
            </Text>
            <FlatList
              style={{marginTop: 8}}
              data={this.state.dataAllnews}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                  <View style={NewsStyles.statusNewsContainer}>
                    <Image
                      style={NewsStyles.sizeLogoNews}
                      source={{
                        uri: item.gambar,
                      }}
                    />
                    <View style={{padding: 14}}>
                      <Text style={NewsStyles.textDateNews}>
                        {moment.unix(item.tanggal).format(i18n.TIME_FORMAT)}
                      </Text>
                      <Text style={NewsStyles.textTitleNews}>{item.judul}</Text>
                      <HTMLView value={item.deskripsi} />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default News;
