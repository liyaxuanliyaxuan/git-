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
           hotNewGoodsList: [
            {
                goodsName: '养殖场农养殖场农家鸡蛋养殖场农家鸡蛋家鸡蛋养殖场农家鸡蛋养殖场农家鸡蛋养殖场农家鸡蛋养殖场农家鸡蛋',
                img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3784095618,1760969354&fm=26&gp=0.jpg",
                goodsPrice: '24.4'
            },
            {
                goodsName: '养殖场农家鸡蛋',
                img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3784095618,1760969354&fm=26&gp=0.jpg",
                goodsPrice: '24.4'
            },
            {
                goodsName: '养殖场农家鸡蛋',
                img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3784095618,1760969354&fm=26&gp=0.jpg",
                goodsPrice: '24.4'
            },
            {
                goodsName: '养殖场农家鸡蛋',
                img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3784095618,1760969354&fm=26&gp=0.jpg",
                goodsPrice: '24.4'
            },
            {
                goodsName: '养殖场农家鸡蛋',
                img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3784095618,1760969354&fm=26&gp=0.jpg",
                goodsPrice: '24.4'
            }
        ]
        }
    }

    changeHotTab = (index) => {
        console.log(index)
        this.setState({
            hotTabIndex: index
        })
    }

    render() {
        const { hotNewGoodsList } = this.state;
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
                <View className='discount-zone'>
                    <View className='discount-zone-box'>
                        <View className='title'>
                            1元抢购
                        </View>
                        <Image className='img' src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2725077377,3709409194&fm=26&gp=0.jpg" />
                        <View className='price'>￥18.8</View>
                    </View>
                    <View className='discount-zone-box border'>
                        <View className='title'>
                            1元抢购
                        </View>
                        <Image className='img' src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2725077377,3709409194&fm=26&gp=0.jpg" />
                        <View className='price'>￥18.8</View>
                    </View>
                    <View className='discount-zone-box'>
                        <View className='title'>
                            1元抢购
                        </View>
                        <Image className='img' src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2725077377,3709409194&fm=26&gp=0.jpg" />
                        <View className='price'>￥18.8</View>
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
                                    <View key={index} className={index % 2 ? 'item item-right' : 'item item-left'}>
                                        <Image src={item.img} className='img' />
                                        <View className='goods-name'>
                                            {item.goodsName}
                                        </View>
                                        <View className='goods-price'>
                                            {item.goodsPrice}
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