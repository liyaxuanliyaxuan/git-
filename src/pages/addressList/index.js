import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';



import './index.less';
import AddressItem from '../components/addressItem/index'


class AddressList extends Component {

    addAddressBtn = () => {
        Taro.navigateTo({
            url: '/pages/addressDetail/index'
        })
    }
    render() {
        return (
            <View className='address-list'>
            
                <View class='add-btn'
                    onClick={this.addAddressBtn.bind(this)}
                    >新增收货地址</View>
                <AddressItem />
                <AddressItem />
            </View>
        )
    }
}

export default AddressList