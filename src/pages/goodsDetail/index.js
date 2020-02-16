import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';


const url = Taro.getApp().global.url;
class goodsDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
           goodsInfo: {}
        }
    }
    componentDidMount () {
        const { goodsId } = this.$router.params;
        this.getGoodsDetail(goodsId);

    }
    getGoodsDetail = (goodsId) => {
        // 商品信息
        Taro.request({
            url: url + '/goodsdetail',
            method: 'post',
            data: {
                goodsId
            },
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                this.setState({
                    goodsInfo: res.data.data.goodsInfo
                })
            }
        })
    }
    render() {
        const { goodsInfo } = this.state;
        return (
            <View className='goods-detail'>
                <View className='goods-detail-top'>
                    <Image className='goods-pic' src={ goodsInfo.goodsImg } ></Image>
                    <View className='goods'>
                        <View className='title'>
                            { goodsInfo.goodsName }
                        </View>
                        <View className='num'>单位：{ goodsInfo.goodsUnit }</View>
                        <View className='price'>
                            <View className='old'>￥{ goodsInfo.goodsOriginalPrice }</View><View className='new'>￥{ goodsInfo.goodsDiscountPrice }</View>
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