import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtIcon } from 'taro-ui'

import { set, addOne, decOne, joinItem, removeItem} from '../../../actions/shopper'

import './index.less';



@connect(({shopper}) => {
    return{
        chooseAll: shopper.chooseAll,
        ifChoose: shopper.ifChoose     
    }
  }, (dispatch) => ({
    select (info) {
        dispatch(set(info))
    },
    add (index) {
        dispatch(addOne(index)) 
    },
    dec (index) {
        dispatch(decOne(index))
    },
    joinItem (info, index){
        dispatch(joinItem(info, index))
    },
    removeItem (index){
        dispatch(removeItem(index))
    }
  }))


class GoodShopItem extends Component {
    render() {
        const { goodInfo, chooseAll, ifChoose, select , add, dec, index, joinItem, removeItem } = this.props; 
        return(
            goodInfo ?
            <View className='good-shop-item' onClick={select.bind(this,goodInfo)}>
                <View  className={(ifChoose[index])?'is-choose':'not-choose'} 
                  onClick={()=>{
                      if(ifChoose[index]){ removeItem(index) }
                      else{ joinItem(goodInfo, index)}}}></View>
                <Image className='good-img' src={goodInfo.goodImg} />
                <View className='good-info'>
                    <View className='good-title'>{goodInfo.goodTitle}</View>
                    <View className='good-buy'>
                        <View className='good-price'>￥{goodInfo.goodPrice * goodInfo.goodNum}</View>
                        <View className='good-add'>
                            <AtIcon onClick={add.bind(this,index)}  value='add-circle' size='20' color='rgb(190, 190, 190)'></AtIcon>
                            <View className='good-num'>{ goodInfo.goodNum }</View>
                            <AtIcon onClick={dec.bind(this,index)} value='subtract-circle' size='20' color='rgb(190, 190, 190)'></AtIcon>
                        </View>
                    </View>
                </View>
            </View> : null
        )
    }
}
export default GoodShopItem