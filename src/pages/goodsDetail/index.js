import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';


class goodsDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render() {
        return (
            <View className='goods-detail'>
                <View className='goods-detail-top'>
                    <Image className='goods-pic' src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3552682293,2688284779&fm=26&gp=0.jpg" ></Image>
                    <View className='goods'>
                        <View className='title'>
                            三只松鼠坚果大礼包
                        </View>
                        <View className='num'>单位：箱</View>
                        <View className='price'>
                            <View className='old'>￥100</View><View className='new'>￥69</View>
                        </View>
                        <View className='add-btn'>加入购物车</View>
                    </View>
                </View>
                <View className='goods-detail-btm'>
                    <View className='title'>商品详情</View>
                </View>
            </View>
        )
    }
}

export default goodsDetail