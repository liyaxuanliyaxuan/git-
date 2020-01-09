import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import './index.less';

class Order extends Component {

    gotoOrderList = (index) => {
        // 0: 全部  1: 待付款  2: 配送中  3: 已完成  4: 已失效
        Taro.navigateTo({
            url: '/pages/orderlist/index?orderListStatus=' + index
        })
    }

    render() {
        return(
            <View className='order'>
                <View className='order-all'>
                    <View className='my-order'>我的订单</View>
                    <View
                        className='my-all'
                        onClick={this.gotoOrderList.bind(this, 0)}
                        >
                        查看全部订单 >
                    </View>
                </View>
                <View className='order-zone'>
                    <View className='order-zone-item' onClick={this.gotoOrderList.bind(this, 1)}>
                        <Image src={require('./img/payment.png')} />
                        <View>待付款</View>
                    </View>
                    <View className='order-zone-item' onClick={this.gotoOrderList.bind(this, 2)}>
                        <Image src={require('./img/distribution.png')} />
                        <View>配送中</View>
                    </View>
                    <View className='order-zone-item' onClick={this.gotoOrderList.bind(this, 3)}>
                        <Image src={require('./img/done.png')} />
                        <View>已完成</View>
                    </View>
                    <View className='order-zone-item' onClick={this.gotoOrderList.bind(this, 4)}>
                        <Image src={require('./img/failure.png')} />
                        <View>已失效</View>
                    </View>
                </View>
            </View>
        )
    }
}
export default Order