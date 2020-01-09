import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';



import './index.less';



class AddressItem extends Component {
    
    render() {
        return (
                <View className='address-item'>
                    <View class='address-item-left'>
                        <View className='name'><View>兰兰</View><View className='tel'>17784450792</View></View>
                        <View className='add'>重庆 重庆市 南岸区 南山街道 重庆邮电大学</View>
                    </View>
                    <View className='address-item-right'>编辑</View>
                </View>
        )
    }
}

export default AddressItem