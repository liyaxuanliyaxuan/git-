import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';



class OrderItem extends Component {
    orderDetail = () => {
        Taro.navigateTo({ url: '/pages/orderdetail/index' });
    }
    render() {
        return (
            <View className='order-item'>
                <View className='order-time'>2020-06-06 21:22:35</View>
                <View className='goods-name'>清风卫生纸5提</View>
                <View className='order-pay'>
                    共计1件商品，应付<View className='price'>￥13.9</View>
                </View>
                <View className='order-item-bottom'>
                    <View className='btn' onClick={this.orderDetail.bind(this)}>查看订单</View>
                </View>
            </View>
        )
    }
}

export default OrderItem