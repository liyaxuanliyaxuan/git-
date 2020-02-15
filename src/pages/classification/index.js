import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtTabs, AtTabsPane,AtButton  } from 'taro-ui';

import GoodItem from '../components/goodItem/index';

import './index.less';

class Classification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            tabList: [{title: '标签1'},
                      {title:'标签2'},
                      {title:'标签3'},
                      {title:'标签44'},
                      {title:'标签5'},
                      {title:'标签6'},
                      {title:'标签7'},
                      {title:'标签8'},
                      {title:'标签9'},
                      {title:'标签10'}],
            goodsList: [{
              goodImg: 'http://yunimg.bbcmart.com/upload/image/2018/08/15/38930_14294111.jpg',
              goodPrice: '8.8',
              goodTitle: '热狗'
            },{
              goodImg: 'http://www.pptok.com/wp-content/uploads/2013/04/HongYi11.jpg',
              goodPrice: '5.5',
              goodTitle: '千层面'
            },{
              goodImg: 'http://yunimg.bbcmart.com/upload/image/2018/08/15/38930_14294111.jpg',
              goodPrice: '8.8',
              goodTitle: '热狗'
            },{
              goodImg: 'http://www.pptok.com/wp-content/uploads/2013/04/HongYi11.jpg',
              goodPrice: '5.5',
              goodTitle: '千层面'
            },{
              goodImg: 'http://yunimg.bbcmart.com/upload/image/2018/08/15/38930_14294111.jpg',
              goodPrice: '8.8',
              goodTitle: '热狗'
            },{
              goodImg: 'http://www.pptok.com/wp-content/uploads/2013/04/HongYi11.jpg',
              goodPrice: '5.5',
              goodTitle: '千层面'
            }]
      }
    }
    handleClick (value) {
        this.setState({
            currentIndex: value
        })
    }
    render() {
        const { tabList, currentIndex, goodsList } = this.state;
        return (
            <AtTabs
              current={currentIndex}
              scroll
              height='100vh'
              tabDirection='vertical'
              tabList={tabList}
              onClick={this.handleClick.bind(this)}>
              <AtTabsPane tabDirection='vertical' current={currentIndex} index={0}>
                {
                  goodsList.map((item, indexGoods) => {
                    return(
                      <GoodItem goodInfo={item} key={indexGoods} />
                    )
                  })
                }
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={currentIndex} index={1}>
                <View style='font-size:18px;text-align:center;height:200px;'>标签页二的内容</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={currentIndex} index={2}>
                <View style='font-size:18px;text-align:center;height:200px;'>标签页三的内容</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={currentIndex} index={3}>
                <View style='font-size:18px;text-align:center;height:200px;'>标签页四的内容</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={currentIndex} index={4}>
                <View style='font-size:18px;text-align:center;height:200px;'>标签页五的内容</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={currentIndex} index={5}>
                <View style='font-size:18px;text-align:center;height:200px;'>标签页六的内容</View>
              </AtTabsPane>
          </AtTabs>
        )
    }
}

export default Classification