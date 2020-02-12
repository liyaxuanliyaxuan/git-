import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtIcon } from 'taro-ui'

import './index.less';

class GoodShopItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodNum: this.props.goodInfo ? this.props.goodInfo.goodNum : 0
        }
    }
    addGoodNum = () => {
        console.log('++',this.state.goodNum)
        this.setState({
            goodNum: this.state.goodNum + 1
        })
    }
    
    subtractGoodNum = () => {
        this.setState({
            goodNum: this.state.goodNum - 1
        })
    }

    render() {
        const { goodInfo } = this.props;
        return(
            goodInfo && this.state.goodNum ?
            <View className='good-shop-item'>
                <View className='ifchoose'></View>
                <Image className='good-img' src={goodInfo.goodImg} />
                <View className='good-info'>
                    <View className='good-title'>{goodInfo.goodTitle}</View>
                    <View className='good-buy'>
                        <View className='good-price'>￥{goodInfo.goodPrice * goodInfo.goodNum}</View>
                        <View className='good-add'>
                            <AtIcon value='add-circle' size='20' color='rgb(190, 190, 190)'
                                onClick={this.addGoodNum.bind(this)}
                                ></AtIcon>
                            <View className='good-num'>{ this.state.goodNum }</View>
                            <AtIcon value='subtract-circle' size='20' color='rgb(190, 190, 190)'
                                onClick={this.subtractGoodNum.bind(this)}
                                ></AtIcon>
                        </View>
                    </View>
                </View>
            </View> : null
        )
    }
}
export default GoodShopItem