import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import GoodShopItem from '../components/goodShopItem/index';
import { AtCheckbox } from 'taro-ui';

import './index.less';

class ShopCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopCarList: [{
                goodImg: 'http://yunimg.bbcmart.com/upload/image/2018/08/15/38930_14294111.jpg',
                goodPrice: '8.8',
                goodTitle: '热狗',
                goodNum: 1
              },{
                goodImg: 'http://www.pptok.com/wp-content/uploads/2013/04/HongYi11.jpg',
                goodPrice: '5.5',
                goodTitle: '千层面',
                goodNum: 2
              },{
                goodImg: 'http://yunimg.bbcmart.com/upload/image/2018/08/15/38930_14294111.jpg',
                goodPrice: '8.8',
                goodTitle: '热狗',
                goodNum: 1
              },{
                goodImg: 'http://www.pptok.com/wp-content/uploads/2013/04/HongYi11.jpg',
                goodPrice: '5.5',
                goodTitle: '千层面',
                goodNum: 1
              },{
                goodImg: 'http://yunimg.bbcmart.com/upload/image/2018/08/15/38930_14294111.jpg',
                goodPrice: '8.8',
                goodTitle: '热狗',
                goodNum: 1
              },{
                goodImg: 'http://www.pptok.com/wp-content/uploads/2013/04/HongYi11.jpg',
                goodPrice: '5.5',
                goodTitle: '千层面',
                goodNum: 1
              }]
        }
    }
    render() {
        const { shopCarList } = this.state;
        return (
            <View className='shop-car'>
                {/* 顶部地址 */}
                <View className='person-address'>
                    <Image src={require('./img/address.png')} />
                    <View className='address-all'>
                        <View className='person-info'>
                            <View className='tel'>兰铭成 177****0792</View>
                            <View className='address'>四川省 广元市 利州区</View>
                        </View>
                        <View className='address-manage'>个人地址管理 ></View>
                    </View>
                </View>

                {/* 购物车商品 */}
                <View className='shop-list'>
                    {
                        shopCarList.map((item, index) => {
                            return(
                                <GoodShopItem goodInfo={item} key={index} />
                            )
                        })
                    }
                </View>

                {/* 立即结算 */}
                <View className='buy'>
                    <View className='choose-all'>
                        <View className='circle'></View>
                        <View className='choose'>全选</View>
                    </View>
                    <View className='pay-all'>
                        <View className='price-all'>合计：<View className='price-detail'>￥0</View></View>
                        <View className='pay-btn'>结算</View>
                    </View>
                </View>
            </View>
        )
    }
}

export default ShopCar