import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import GoodShopItem from '../components/goodShopItem/index';
import { AtCheckbox } from 'taro-ui';

import './index.less';

import { selectAll, resetAll } from '../../actions/shopper';


@connect(({shopper}) => {
    return{
        shopCarList: shopper.shopCarList,
        totalPrice: shopper.totalPrice,
        chooseAll: shopper.chooseAll,
        ifChoose: shopper.ifChoose 
    }
  }, (dispatch) => ({
    selectAll () {
        dispatch(selectAll())
    },
    resetAll () {
        dispatch(resetAll())
    }
  }))

class ShopCar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { shopCarList, totalPrice, chooseAll, ifChoose, selectAll, resetAll } = this.props;
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
                                <GoodShopItem goodInfo={item} key={index} index={index}/>
                            )
                        })
                    }
                </View>

                {/* 立即结算 */}
                <View className='buy'>
                    <View className='choose-all' onClick={()=>{
                        if( !chooseAll ){
                            selectAll()
                        }else{
                            resetAll()
                        }
                    }}>
                        <View className={ chooseAll?'is-choose':'not-choose' }></View>
                        <View className='choose'>全选</View>
                    </View>
                    <View className='pay-all'>
                        <View className='price-all'>合计：<View className='price-detail'>￥{ totalPrice.toFixed(2) }</View></View>
                        <View className={chooseAll?'pay-btn--active':'pay-btn'}>结算</View>
                    </View>
                </View>
            </View>
        )
    }
}

export default ShopCar