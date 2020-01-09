import Taro, { Component } from '@tarojs/taro';
import { View, Input } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import Banner from '../components/banner';
import './index.less';

class HomePage extends Component {
    render() {
        return (
            <View className='homepage'>
                <View className='search-zone'>
                    <Input
                        className='search'
                        placeholder='请输入商品名称'
                        />
                </View>
                <View className='top-back'></View>
                <Banner />
                <Banner />
                <Banner />
                <Banner />
                <Banner />
                <Banner />
            </View>
        )
    }
}

export default HomePage