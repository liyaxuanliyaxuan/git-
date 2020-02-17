import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, Image, View } from '@tarojs/components';

import './index.less';
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: [{
                url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2849768792,1404089788&fm=26&gp=0.jpg'
            },{
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578141065655&di=4345f0bef2d1f0229a2b4bc06ceb6c3a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010b1e58ca2f3aa801219c777cfe68.jpg%401280w_1l_2o_100sh.jpg'
            }]
        }
    }

    render() {
        const { banner } = this.state
        return (
            
            <Swiper
                className='swiper-container'
                circular
                indicatorDots
                indicatorColor='#999'
                indicatorActiveColor='#bf708f'
                autoplay>
                { banner.map((item, index) => (
                <SwiperItem key={index}>
                    <Image className='swiper-img' mode='widthFix' src={item.url}></Image>
                    
                </SwiperItem>
                ))}
            </Swiper>
        )
    }
}

export default Banner;