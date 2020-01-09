import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import './index.less';

class Order extends Component {
    render() {
        return(
            <View className='order'>
                <View className='order-all'>
                    <View className='my-order'>我的订单</View>
                    <View className='my-all'>查看全部订单 ></View>
                </View>
                <View className='order-zone'>
                    <View className='order-zone-item'>
                        <Image src={require('./img/payment.png')} />
                        <View>待付款</View>
                    </View>
                    <View className='order-zone-item'>
                        <Image src={require('./img/distribution.png')} />
                        <View>配送中</View>
                    </View>
                    <View className='order-zone-item'>
                        <Image src={require('./img/done.png')} />
                        <View>已完成</View>
                    </View>
                    <View className='order-zone-item'>
                        <Image src={require('./img/failure.png')} />
                        <View>已失效</View>
                    </View>
                </View>
            </View>
        )
    }
}
export default Order