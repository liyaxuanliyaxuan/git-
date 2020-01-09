import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtIcon } from 'taro-ui'

import './index.less';

class GoodShopItem extends Component {
    render() {
        const { goodInfo } = this.props;
        return(
            goodInfo ?
            <View className='good-shop-item'>
                <View className='ifchoose'></View>
                <Image className='good-img' src={goodInfo.goodImg} />
                <View className='good-info'>
                    <View className='good-title'>{goodInfo.goodTitle}</View>
                    <View className='good-buy'>
                        <View className='good-price'>￥{goodInfo.goodPrice * goodInfo.goodNum}</View>
                        <View className='good-add'>
                            <AtIcon value='add-circle' size='20' color='rgb(190, 190, 190)'></AtIcon>
                            <View className='good-num'>{ goodInfo.goodNum }</View>
                            <AtIcon value='subtract-circle' size='20' color='rgb(190, 190, 190)'></AtIcon>
                        </View>
                    </View>
                </View>
            </View> : null
        )
    }
}
export default GoodShopItem