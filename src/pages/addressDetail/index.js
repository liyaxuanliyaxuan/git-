import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import { AtInput }  from 'taro-ui'

import './index.less';


class AddressDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userTel: '',
            userAddress: ''
        }
    }
    handleChangeUserName (userName) {
        this.setState({
          userName
        })
        // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
        return userName
    }
    handleChangeUserTel (userTel) {
        this.setState({
            userTel
        })
        // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
        return userTel
    }
    handleChangeUserAddress (userAddress) {
        this.setState({
            userAddress
        })
        // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
        return userAddress
    }
    handleChangeSave () {
    Taro.navigateTo({
        url:'/pages/orderlist/index'
    })
    }
    render() {
        const { userName, userTel, userAddress} = this.state;
        return (
            <View className='address-detail'>
                <AtInput
                    name='value'
                    type='text'
                    placeholder='收货人'
                    maxLength={10}
                    value={userName}
                    onChange={this.handleChangeUserName.bind(this)}
                />
                <AtInput
                    name='value'
                    type='number'
                    placeholder='手机号码'
                    maxLength={11}
                    value={userTel}
                    onChange={this.handleChangeUserTel.bind(this)}
                />
                <AtInput
                    name='value'
                    type='text'
                    placeholder='所在地区'
                    value={userAddress}
                    onChange={this.handleChangeUserAddress.bind(this)}
                />
                <View className='save-btn'
                onClick={this.handleChangeSave.bind(this)}>保存</View>
            </View>
        )
    }
}

export default AddressDetail