import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';



import './index.less';


class ActivityList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activityList: []
        }
    }
    componentDidMount () {
        const activityType = this.$router.params.activityType
        this.getActivityList(activityType)
    }
    getActivityList (activityType) {
        const url = Taro.getApp().global.url;
        Taro.request({
            url: url + `/activityContent?activityType=${activityType}`,
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                this.setState({
                    activityList: res.data.data.activityList
                })
            }
        })
    }
    config = {
        navigationBarTitleText: this.$router.params.activityTitle,
    }
    navGoodsDetail = (index) => {
        Taro.navigateTo({
            url: `/pages/goodsDetail/index?goodsId=${this.state.activityList[index].goodsId}`
        })
    }
    render() {
        const { activityList } = this.state;
        return (
            <View className='activity-list'>
                {
                    activityList.map((item, index) => {
                        return (
                            <View className='activity-list-item' key={index}>
                                <Image className='img' src={ item.goodsImg } />
                                <View className='text'>
                                    <View className='title'>{ item.goodsName }</View>
                                    <View className='sub-title'>{ item.goodsSubName }</View>
                                    <View className='price' onClick={this.navGoodsDetail.bind(this, index)}>
                                        <View className='iconl'>
                                            { item.activityWords }
                                            <View className='iconr'>
                                                <View><View className='big'>
                                                    ￥{ Number(item.goodsDiscountPrice).toFixed(1).split('.')[0] }</View>
                                                <View className='small'>
                                                    .{ Number(item.goodsDiscountPrice).toFixed(1).split('.')[1] }
                                                </View></View>
                                                <View className='old-price'>￥{ item.goodsOriginalPrice }</View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
                
                {/* <View className='activity-list-item'>
                    <Image className='img' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581863112124&di=1d8b7dfbffc804fc637f0680b783b5f0&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3239132308%2C309437049%26fm%3D214%26gp%3D0.jpg" />
                    <View className='text'>
                        <View className='title'>日系休闲纯棉背心</View>
                        <View className='sub-title'>舒适面料 休闲百搭</View>
                        <View className='price'>
                            <View className='iconl'>
                                限时低价
                                <View className='iconr'>
                                    <View><View className='big'>￥19</View><View className='small'>.9</View></View>
                                    <View className='old-price'>￥168</View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='activity-list-item'>
                    <Image className='img' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581863112124&di=1d8b7dfbffc804fc637f0680b783b5f0&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3239132308%2C309437049%26fm%3D214%26gp%3D0.jpg" />
                    <View className='text'>
                        <View className='title'>日系休闲纯棉背心</View>
                        <View className='sub-title'>舒适面料 休闲百搭</View>
                        <View className='price'>
                            <View className='iconl'>
                                限时低价
                                <View className='iconr'>
                                    <View><View className='big'>￥19</View><View className='small'>.9</View></View>
                                    <View className='old-price'>￥168</View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='activity-list-item'>
                    <Image className='img' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581863112124&di=1d8b7dfbffc804fc637f0680b783b5f0&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3239132308%2C309437049%26fm%3D214%26gp%3D0.jpg" />
                    <View className='text'>
                        <View className='title'>日系休闲纯棉背心</View>
                        <View className='sub-title'>舒适面料 休闲百搭</View>
                        <View className='price'>
                            <View className='iconl'>
                                限时低价
                                <View className='iconr'>
                                    <View><View className='big'>￥19</View><View className='small'>.9</View></View>
                                    <View className='old-price'>￥168</View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View> */}
            </View>
        )
    }
}

export default ActivityList