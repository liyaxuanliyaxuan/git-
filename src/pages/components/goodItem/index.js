import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import './index.less';

class GoodItem extends Component {
    render() {
        
        const { goodInfo } = this.props;
        return(
            goodInfo ? 
                <View className='good-item'>
                    <Image className='good-img' src={ goodInfo.goodImg } />
                    <View  className='good-info'>
                        <View className='good-title'>{ goodInfo.goodTitle }</View>
                        <View className='good-buy'>
                            <View className='good-price'>￥{ goodInfo.goodPrice }</View>
                            <Image className='good-add' src={require('./img/add.png')} />
                        </View>
                    </View>
                </View> : null
        )
    }
}
export default GoodItem