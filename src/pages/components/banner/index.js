import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.less';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: []
        }
    }

    componentDidMount() {
        const url = Taro.getApp().global.url;
        Taro.request({
            url: url + '/banner',
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                this.setState({
                    banner: res.data.data.bannerList
                })
            }
        })
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