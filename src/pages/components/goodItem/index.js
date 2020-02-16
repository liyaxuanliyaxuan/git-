import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import './index.less';

class GoodItem extends Component {

    navGoodDetail = () => {
        Taro.navigateTo({
            url: `/pages/goodsDetail/index?goodsId=${this.props.goodInfo.goodsId}`
        })
    }

    render() {
        
        const { goodInfo } = this.props;
        return(
            goodInfo ? 
                <View className='good-item' onClick={this.navGoodDetail.bind(this)}>
                    <Image className='good-img' src={ goodInfo.goodsImg } />
                    <View  className='good-info'>
                        <View className='good-title'>{ goodInfo.goodsName }</View>
                        <View className='good-buy'>
                            <View className='good-price'>￥{ goodInfo.goodsDiscountPrice }</View>
                            <Image className='good-add' src={require('./img/add.png')} />
                        </View>
                    </View>
                </View> : null
        )
    }
}
export default GoodItem