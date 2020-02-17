import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';


class OrderDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render() {
        return (
            <View className='order-detail'>

                <View className='goods-info'>
                    <Image className='goods-img' 
                    src='http://yunimg.bbcmart.com/upload/image/2018/08/15/38930_14294111.jpg' />
                    <View className='goods-text'>
                        <View>千层面</View>
                        <View style='color: #A6E3E9; font-weight: bold;'>￥12.9</View>
                    </View>
                    <View className='order-status'>交易成功</View>
                </View>
                <View className='order-other-info'>
                    <View className='order-other-info-title'><View className='line'></View>收件信息</View>
                    <View className='info'>
                        <View className='info1'>
                            收件人：兰铭成 17784450792
                        </View>
                        <View className='info2'>
                            收货地址：四川省 广元市 利州区 南河xxxx
                        </View>
                    </View>
                </View>
                <View className='order-other-info'>
                    <View className='order-other-info-title'><View className='line'></View>订单信息</View>
                    <View className='info'>
                        <View className='info1'>
                            订单编号：1234567984654
                        </View>
                        <View className='info2'>
                            完成时间：2019-05-05 12:22:22
                        </View>
                    </View>
                </View>

                
            </View>
        )
    }
}

export default OrderDetail