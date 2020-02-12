import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import Order from '../components/order'

import './index.less';



class Personal extends Component {

    config = {
        disableScroll: true,
        enablePullDownRefresh:false
    }

    naviGate = (index) => {
        switch(index) {
            case 0: Taro.navigateTo({ url: '/pages/addressList/index' });
            case 1: Taro.navigateTo({ url: '/pages/addressDetail/index' });
            case 2: Taro.navigateTo({ url: '/pages/addressDetail/index' });
            case 3: Taro.navigateTo({ url: '/pages/addressDetail/index' });
        }
    }

    render() {
        return (
            <View className='personal'>
                <View className='head-back'></View>
                <View className='head-back-other'></View>
                <View className='personal-container'>
                    <View className='head-zone'>
                        <Image className='head' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578164557370&di=312d682c322e9d383b2ddb9cd399945c&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F37d12f2eb9389b504660acdc8735e5dde6116ea4.jpg" />
                        <View>LanMch</View>
                    </View>

                    <Order />

                    <View className='one-item margin-top-20' onClick={this.naviGate.bind(this, 0)}>
                        <View>地址管理</View><View>></View>
                    </View>
                    <View className='one-item margin-top-10' onClick={this.naviGate.bind(this, 0)}>
                        <View>推荐有奖</View><View>></View>
                    </View>
                    <View className='one-item margin-top-10' onClick={this.naviGate.bind(this, 0)}>
                        <View>联系客服</View><View>></View>
                    </View>
                    <View className='one-item margin-top-10' onClick={this.naviGate.bind(this, 0)}>
                        <View>版本管理</View><View>></View>
                    </View>
                    
                </View>
            </View>
        )
    }
}

export default Personal