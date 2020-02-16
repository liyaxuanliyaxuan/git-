import Taro, { Component } from '@tarojs/taro';
import { View, Input, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import Banner from '../components/banner';
import './index.less';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
           hotTabIndex: 0,
           hotNewGoodsList: [],
           activityList: []
        }
    }

    componentDidMount() {
        const url = Taro.getApp().global.url;
        // 拉取 活动栏目
        Taro.request({
            url: url + '/activityList',
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                this.setState({
                    activityList: res.data.data.activityList
                })
            }
        })



        //拉取 热门推荐
        Taro.request({
            url: url + '/ranklist?rankType=0',
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                this.setState({
                    hotNewGoodsList: res.data.data.rankList
                })
            }
        })
    }

    changeHotTab = (index) => {
        const url = Taro.getApp().global.url;
        Taro.request({
            url: url + '/ranklist?rankType=' + index,
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                this.setState({
                    hotNewGoodsList: res.data.data.rankList
                })
            }
        })
        this.setState({
            hotTabIndex: index
        })
    }

    navGoodsDetail = (index) => {
        console.log(this.state.hotNewGoodsList[index].goodsId)
        Taro.navigateTo({
            url: `/pages/goodsDetail/index?goodsId=${this.state.hotNewGoodsList[index].goodsId}`
        })
    }

    navAcitivityList = (index) => {

        const { activityTitle, activityType } = this.state.activityList[index]
        Taro.navigateTo({
            url: `/pages/activityList/index?activityTitle=${activityTitle}&activityType=${activityType}`
        })
    }

    render() {
        const { activityList, hotNewGoodsList } = this.state;
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

                {/* activityBar */}
                <View className='discount-zone'>
                    <View className='discount-zone-box box-main' onClick={this.navAcitivityList.bind(this, 0)}>
                        <View className='title'>
                            <View className='main'>
                                {activityList[0].activityTitle}
                            </View>
                            <View className='vice'>
                                {activityList[0].activitySubTitle}
                            </View>
                        </View>
                        <Image
                            className='img'
                            src={activityList[0].activityCoverUrl}
                            />
                    </View>
                    <View className='discount-zone-box' style={{color: '#08bb11'}} onClick={this.navAcitivityList.bind(this, 1)}>
                        <View className='title'>
                            {activityList[1].activityTitle}
                        </View>
                        <Image
                            className='img'
                            src={activityList[1].activityCoverUrl}
                            />
                    </View>
                    <View className='discount-zone-box'  style={{color: '#f1841e'}} onClick={this.navAcitivityList.bind(this, 2)}>
                        <View className='title'>
                            {activityList[2].activityTitle}
                        </View>
                        <Image
                            className='img'
                            src={activityList[2].activityCoverUrl}
                        />
                    </View>
                </View>

                <View className='recommand-goods'>
                    <View className='title'>
                        <View
                            className={this.state.hotTabIndex ? 'w' : 'w w-choose'}
                            onClick={this.changeHotTab.bind(this, 0)}
                            >热门推荐</View>
                        <View className='nw'></View>
                        <View
                            className={!this.state.hotTabIndex ? 'w' : 'w w-choose'}
                            onClick={this.changeHotTab.bind(this, 1)}
                            >新品上市</View>
                    </View>
                    <View className='recommand-goods-zone'>
                        {
                            hotNewGoodsList.map((item, index) => {
                                return (
                                    <View
                                        onClick={this.navGoodsDetail.bind(this, index)}
                                        key={index}
                                        className={index % 2 ? 'item item-right' : 'item item-left'}>
                                        <Image src={item.goodsImg} className='img' />
                                        <View className='goods-name'>
                                            {item.goodsName}
                                        </View>
                                        <View className='goods-price'>
                                            ￥{item.goodsDiscountPrice}
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                    
                </View>
            </View>
        )
    }
}

export default HomePage